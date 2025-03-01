import React, { useEffect, useState } from "react";
import { HiPlus, HiPencil, HiTrash } from "react-icons/hi";
import { toast } from "react-toastify";
import {
  DELETEAddressService,
  GETAddressService,
  POSTAddressService,
  UPDATEAddressService,
} from "../services/api.service";

const Address = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    phone: "",
    pincode: "",
    company: "",
    gstNumber: "",
  });
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = () => {
    setLoading(true);
    GETAddressService()
      .then((response) => {
        // console.log("Fetched addresses:", response);
        setSavedAddresses(response.data.data);
      })
      .catch(() => {
        toast.error("Failed to fetch addresses.");
      })
      .finally(() => setLoading(false));
  };

  const handleAddressSelect = (addressId) => {
    setSelectedAddress((prevSelected) =>
      prevSelected === addressId ? null : addressId
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/\d{6}$/.test(formData.pincode)) {
      toast.error("Invalid zip code. Enter a valid 6 digit zip code.");
      return;
    }
    if (!/\d{10}$/.test(formData.phone)) {
      toast.error("Enter a valid 10-digit phone number.");
      return;
    }

    try {
      setLoading(true);
      if (isEditing && editingId) {
        await UPDATEAddressService(editingId, formData);
        toast.success("Address updated successfully!");
      } else {
        await POSTAddressService(formData);
        toast.success("New address added successfully!");
      }
      fetchAddresses();
      setFormData({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        phone: "",
        pincode: "",
        company: "",
        gstNumber: "",
      });
      setIsEditing(false);
      setEditingId(null);
    } catch (error) {
      toast.error("Failed to save address.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (address) => {
    setIsEditing(true);
    setEditingId(address._id);
    setFormData(address);
  };

  const handleDelete = async (_id) => {
    try {
      await DELETEAddressService(_id);
      setSavedAddresses((prev) =>
        prev.filter((address) => address._id !== _id)
      );
      toast.success("Address deleted successfully!");
    } catch {
      toast.error("Failed to delete address.");
    }
  };
  return (
    <div className="min-h-screen pb-12">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-8">
              <div className="border border-gray-300 rounded-lg p-4 min-h-36">
                <h3 className="text-base md:text-xl mb-2">Delivery Address</h3>
                {savedAddresses.length > 0 ? (
                  savedAddresses.map((address) => (
                    <div
                      key={address._id}
                      className="mb-4 p-4 flex items-center border border-gray-200 rounded-lg gap-4"
                    >
                      {/* Radio Button Centered */}
                      <div className="flex flex-col items-center">
                        <input
                          type="radio"
                          value={address._id}
                          checked={selectedAddress === address._id}
                          onClick={() => handleAddressSelect(address._id)}
                          className="w-5 h-5 cursor-pointer accent-blue-500"
                        />
                      </div>

                      {/* Address Details */}
                      <div className="flex-1">
                        <p className="text-[14px]">
                          <strong>
                            {address.firstName} {address.lastName}
                          </strong>
                        </p>
                        <p className="text-[14px]">
                          {address.address}, {address.city} - {address.pincode}
                        </p>
                        <p className="text-[14px]">Phone: {address.phone}</p>
                        {address.company && (
                          <p className="text-[14px]">
                            Company: {address.company}
                          </p>
                        )}
                        {address.gstNumber && (
                          <p className="text-[14px]">
                            GST: {address.gstNumber}
                          </p>
                        )}
                      </div>

                      {/* Edit & Delete Buttons */}
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => handleEdit(address)}
                          className="p-2 bgColor text-white rounded"
                        >
                          <HiPencil />
                        </button>
                        <button
                          onClick={() => handleDelete(address._id)}
                          className="p-2 bg-red-500 text-white rounded"
                        >
                          <HiTrash />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-600">
                    No saved addresses. Please enter your shipping details
                    below.
                  </p>
                )}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="flex flex-col items-center justify-center gap-6 border border-gray-300 rounded-lg p-4 h-36">
                <h3 className="text-base md:text-xl mb-2">
                  {isEditing ? "Update Address" : "Add Address"}
                </h3>

                <button
                  onClick={handleSubmit}
                  className="p-2 bgColor text-white rounded-full"
                >
                  {isEditing ? (
                    <HiPencil className="w-6 h-6" />
                  ) : (
                    <HiPlus className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg p-6 mt-6">
            <h2 className="text-base md:text-xl mb-4">Delivery Address</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Street Address"
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  placeholder="Pincode"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Mobile Number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </form>
          </div>
          {/* GSTIN Section */}
          <div className="border border-gray-300 rounded-lg p-6 mt-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="gstinToggle"
                name="gstinToggle"
                className="mr-2"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label htmlFor="gstinToggle" className="text-base">
                GSTIN Details
              </label>
            </div>

            {isChecked && (
              <div className="mt-4">
                <div className="mb-4">
                  <label
                    htmlFor="gstNumber"
                    className="block text-sm text-gray-700 mb-2"
                  >
                    GSTIN Number
                  </label>
                  <input
                    type="text"
                    id="gstNumber"
                    name="gstNumber"
                    value={formData.gstNumber}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Enter GSTIN Number"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="company"
                    className="block text-sm  text-gray-700 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="company "
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
