import React, { useState, useEffect, useContext } from "react";
import { IoIosTrash } from "react-icons/io";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader/Loader";
import { ProductContext } from "../context/ProductContext";

const Checkout2 = () => {
  const {
    cart,
    addresses,
    selectedAddress,
    setSelectedAddress,
    addAddress,
    deleteAddress,
    placeOrder,
    updateAddress,
  } = useContext(ProductContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelivering, setIsDelivering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  const [newAddress, setNewAddress] = useState({
    address: "",
    city: "",
    landmark: "",
    state: "",
    zipcode: "",
    phone: "",
    country: "",
  });

  useEffect(() => {
    if (cart.length > 0) {
      setCartData(cart);
      const total = cart.reduce(
        (acc, item) =>
          acc +
          parseFloat(item.price.replace("₹", "").replace(",", "")) *
            item.quantity,
        0
      );
      setTotalAmount(total + 50);
    } else {
      const storedCart = JSON.parse(localStorage.getItem("cartData")) || [];
      setCartData(storedCart);
    }
  }, [cart]);

  const handleAddAddress = () => {
    setIsAdding(true);
    setTimeout(() => {
      addAddress(newAddress);
      setIsModalOpen(false);
      setIsAdding(false);
      setNewAddress({
        address: "",
        city: "",
        landmark: "",
        state: "",
        zipcode: "",
        phone: "",
        country: "",
      });
    }, 1000);
  };

  const handleEditAddress = (_id) => {
    const addressToEdit = addresses.find((address) => address._id === _id);
    setNewAddress(addressToEdit);
    setEditingAddressId(_id);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleUpdateAddress = () => {
    setIsUpdating(true);
    setTimeout(() => {
      updateAddress(newAddress);
      setIsModalOpen(false);
      setIsUpdating(false);
      setIsEditing(false);
    }, 1000);
  };

  const handleDeleteAddress = (_id) => {
    deleteAddress(_id);
  };

  const handleDeliverHere = async () => {
    if (!selectedAddress) {
      toast.error("Please select an address before proceeding.");
      return;
    }

    const orderData = {
      address: addresses.find((address) => address._id === selectedAddress),
      cart: cartData,
      paymentMethod: "COD",
      totalPrice: totalAmount,
    };

    setIsDelivering(true);
    await placeOrder(orderData);
    setIsDelivering(false);
    navigate("/orders");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-medium text-gray-800 border-b pb-4 mb-4 sr-only">
                Delivery Address
              </h2>
              <div className="space-y-4">
                {addresses.map((address) => (
                  <div
                    key={address._id}
                    className={`p-4 border rounded-lg transition-shadow ${
                      selectedAddress === address._id
                        ? "shadow-md"
                        : "bg-white hover:shadow-lg"
                    }`}
                  >
                    <label className="flex items-center gap-4 cursor-pointer">
                      <input
                        type="radio"
                        name="address"
                        checked={selectedAddress === address._id}
                        onChange={() => setSelectedAddress(address._id)}
                        className="h-5 w-5 accent-[#000]"
                      />
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-gray-800 text-lg">
                            {address.name}
                          </h3>
                          <button
                            onClick={() => handleEditAddress(address._id)}
                            className="text-[#000] font-medium hover:underline text-sm"
                          >
                            Edit
                          </button>
                        </div>
                        <p className="text-gray-600">
                          {address.address}, {address.city}
                        </p>
                        <p className="text-gray-600">
                          {address.landmark},{address.phone}, {address.state} -{" "}
                          {address.zipcode}, {address.country}
                        </p>
                        <div className="flex justify-end mt-2">
                          <button
                            onClick={() => handleDeleteAddress(address._id)}
                            className="text-red-500 hover:text-red-600 transition text-sm"
                          >
                            <IoIosTrash className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
              <button
                onClick={handleDeliverHere}
                disabled={isDelivering}
                className="mt-6 w-full bg-[#000] hover:bg-gray-800 text-white font-medium py-3 rounded-lg transition duration-200"
              >
                {isDelivering ? (
                  <Loader size={5} color="white" />
                ) : (
                  "Deliver Here"
                )}
              </button>

              <button
                disabled={loading}
                onClick={() => setIsModalOpen(true)}
                className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 rounded-lg transition duration-200"
              >
                {loading ? (
                  <Loader size={5} color="white" />
                ) : (
                  "Add New Address"
                )}
              </button>
            </div>
          </div>

          {/* Price Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-medium text-gray-800 border-b pb-4 mb-4">
              Price Details
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <p>Price ({cartData.length} items)</p>
                <p>
                  ₹
                  {cartData.reduce(
                    (acc, item) =>
                      acc +
                      parseFloat(item.price.replace("₹", "").replace(",", "")) *
                        item.quantity,
                    0
                  )}
                </p>
              </div>
              <div className="flex justify-between">
                <p>Delivery Charges</p>
                <p className="text-green-500">FREE</p>
              </div>
              <div className="flex justify-between">
                <p>Platform Fee</p>
                <p>₹3</p>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-medium text-gray-800">
              <p>Total Payable</p>
              <p>
                ₹
                {cartData.reduce(
                  (acc, item) =>
                    acc +
                    parseFloat(item.price.replace("₹", "").replace(",", "")) *
                      item.quantity,
                  0
                ) + 3}
              </p>
            </div>
            <hr className="my-4" />
          </div>
        </div>
      </div>

      {/* Modal for adding/editing address */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-medium mb-4">
              {isEditing ? "Edit Address" : "Add New Address"}
            </h3>
            <div className="space-y-4">
              <textarea
                placeholder="Address"
                value={newAddress.address}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, address: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="City"
                value={newAddress.city}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, city: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Landmark"
                value={newAddress.landmark}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, landmark: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="State"
                value={newAddress.state}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, state: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Zip Code"
                value={newAddress.zipcode}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, zipcode: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Phone"
                value={newAddress.phone}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, phone: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Country"
                value={newAddress.country}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, country: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mt-6 flex justify-between gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-gray-300 text-gray-800 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={isEditing ? handleUpdateAddress : handleAddAddress}
                className="w-full bg-[#000] text-white py-2 rounded-lg flex items-center justify-center"
              >
                {isAdding || isUpdating ? (
                  <Loader size={5} color="white" />
                ) : isEditing ? (
                  "Update Address"
                ) : (
                  "Add Address"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout2;
