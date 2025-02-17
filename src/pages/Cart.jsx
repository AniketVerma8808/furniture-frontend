import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderSummary from "../components/orders/OrderSummary";
import NoCart from "./NoCart";
import reviewImg4 from "../assets/image/review/review4.jpg";
import { AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { toast } from "react-toastify";

const Cart = () => {
  const navigate = useNavigate();

  // Dummy cart data
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Nike Running Shoes",
      price: "₹2,499",
      dicprice: "200",
      quantity: 1,
      images: reviewImg4,
    },
    {
      id: 2,
      title: "Adidas Sports T-shirt",
      price: "₹999",
      dicprice: "200",
      quantity: 2,
      images: reviewImg4,
    },
  ]);

  const handleQuantityChange = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleAddToWishlist = () => {
    toast.success("Added to Wishlist!");
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    toast.success("Item removed from Cart!");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-4">
      {cart.length > 0 ? (
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Cart Section */}
            <div className="lg:col-span-8 bg-white p-6 rounded-lg shadow-md">
              <div className="border border-gray-300 rounded-lg px-6 mt-6">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">
                    My Cart ({cart.length})
                  </h3>
                </div>
                <div className="flex flex-col lg:flex-row">
                  <div className="flex-1 p-4">
                    {cart.map(
                      ({ id, title, price, dicprice, quantity, images }) => (
                        <div
                          key={id}
                          className="flex border-b border-gray-200 py-4 flex-nowrap"
                        >
                          {/* Product Image */}
                          <img
                            src={images}
                            alt={title}
                            className="w-20 h-20 rounded-lg object-cover cursor-pointer"
                            onClick={() => navigate(`/product/${id}`)}
                          />
                          {/* Product Details */}
                          <div className="flex flex-col ml-4">
                            <h2 className="text-lg font-medium">{title}</h2>

                            <div className="flex flex-wrap items-center gap-4 mt-2">
                              {/* Quantity Adjuster */}
                              <div className="flex items-center">
                                <span className="mr-5 text-[#9A8B8B]">
                                  Quantity
                                </span>

                                <button
                                  onClick={() => handleQuantityChange(id, -1)}
                                  className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                                  disabled={quantity <= 1}
                                >
                                  -
                                </button>
                                <span className="mx-3 text-lg font-medium">
                                  {quantity}
                                </span>
                                <button
                                  onClick={() => handleQuantityChange(id, 1)}
                                  className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                                >
                                  +
                                </button>
                              </div>

                              {/* Price Details */}
                              <p className="text-black mt-2">
                                {price}{" "}
                                <span className="line-through ml-5 text-[#9A8B8B]">
                                  {dicprice}
                                </span>
                              </p>

                              <p className="text-green-600 text-sm">
                                You Save ₹2000
                              </p>
                            </div>

                            {/* Actions */}
                            <div className="flex space-x-4 mt-2 flex-wrap text-sm text-[#9A8B8B] font-medium cursor-pointer">
                              <p
                                className="flex items-center group"
                                onClick={handleAddToWishlist}
                              >
                                <AiOutlineHeart className="mr-2 text-gray-600 group-hover:text-red-600 transition-colors duration-200" />
                                Add to Wishlist
                              </p>

                              <p
                                className="flex items-center hover:text-red-600 transition-colors duration-200"
                                onClick={() => handleRemoveItem(id)}
                              >
                                <AiOutlineDelete className="mr-2" /> Remove
                              </p>
                              <p className="flex items-center">
                                <TbTruckDelivery className="mr-2" /> Delivery
                                Estimated
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Order Summary */}
            <div className="lg:col-span-4">
              <OrderSummary />
            </div>
          </div>
        </div>
      ) : (
        <NoCart />
      )}
    </div>
  );
};

export default Cart;
