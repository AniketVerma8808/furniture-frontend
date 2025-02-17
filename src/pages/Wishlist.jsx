

import React from "react";
import { Link } from "react-router-dom";
import reviewImg4 from "../assets/image/review/review4.jpg";
import { AiOutlineClose } from "react-icons/ai";
const Wishlist = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* left Section */}
            <div className="lg:col-span-4 ">
              <div className=" border w-80 h-[500px] border-gray-200 shadow-lg rounded-md pt-12 p-6">
                <h3 className="font-semibold text-lg">Aniket Verma</h3>
                <div className="mt-4 space-y-4">
                  <p className="text-black font-medium">Account Settings</p>

                  <Link
                    to={"/"}
                    className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
                  >
                    My Profile
                  </Link>
                  <Link
                    to={"/"}
                    className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
                  >
                    My Address
                  </Link>
                  <Link
                    to={"/"}
                    className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
                  >
                    My Orders
                  </Link>
                  <Link
                    to={"/"}
                    className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
                  >
                    My Wishlist
                  </Link>
                  <Link
                    to={"/"}
                    className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
                  >
                    Change Password
                  </Link>
                  <Link
                    to={"/"}
                    className="block py-2 text-gray-600 hover:text-black"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>

            {/* right Section */}
            <div className="lg:col-span-8 p-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                My Wishlist
              </h3>
              <p className="text-gray-600">Total items in Wishlist: 1</p>

              {/* Wishlist Item Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white shadow-md rounded-lg relative p-2 mt-6">
                  {/* Close Button */}
                  <button className="absolute top-0 right-0 bg-gray-100 rounded-full p-1 hover:bg-gray-200 transition">
                    <AiOutlineClose
                      size={18}
                      className="text-gray-600 hover:text-gray-900"
                    />
                  </button>

                  <img
                    src={reviewImg4} // Replace with actual image URL
                    alt="Product"
                    className="w-full h-auto object-cover rounded-lg cursor-pointer"
                  />
                  <div className="p-3 sm:p-4">
                    <h3 className="text-gray-800 font-semibold text-[14px] truncate">
                      Product Title
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">
                      Product Collection
                    </p>
                    <div className="mt-2 flex items-center">
                      <span className="text-[12px] sm:text-[14px] font-bold text-gray-900">
                        $19.99
                      </span>
                      <span className="ml-2 text-sm text-gray-400 line-through">
                        $29.99
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-md rounded-lg relative p-2 mt-6">
                  {/* Close Button */}
                  <button className="absolute top-0 right-0 bg-gray-100 rounded-full p-1 hover:bg-gray-200 transition">
                    <AiOutlineClose
                      size={18}
                      className="text-gray-600 hover:text-gray-900"
                    />
                  </button>

                  <img
                    src={reviewImg4} // Replace with actual image URL
                    alt="Product"
                    className="w-full h-auto object-cover rounded-lg cursor-pointer"
                  />
                  <div className="p-3 sm:p-4">
                    <h3 className="text-gray-800 font-semibold text-[14px] truncate">
                      Product Title
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">
                      Product Collection
                    </p>
                    <div className="mt-2 flex items-center">
                      <span className="text-[12px] sm:text-[14px] font-bold text-gray-900">
                        $19.99
                      </span>
                      <span className="ml-2 text-sm text-gray-400 line-through">
                        $29.99
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
