import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/authSlice";
import { Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { toast } from "react-toastify";

const Setting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Logout successful!");
    navigate("/");
  };

  return (
    <div className="py-12">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="border border-gray-200 rounded-md p-6 sticky pt-6">
              <h3 className="text-[16px] md:text-[22px]">Aniket Verma</h3>

              {/* Mobile Menu Toggle Button */}
              <div className="flex justify-between items-center mt-4">
                <p className="text-black text-[14px] md:text-[17px] ">
                  Account Settings
                </p>
                {/* Mobile Menu Toggle Button */}
                <button
                  className="lg:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <HiMenu className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Menu Links */}
              <div
                className={`mt-4 space-y-4 ${
                  isOpen ? "block" : "hidden"
                } lg:block text-[14px]`}
              >
                <Link
                  to="/settings/profile"
                  className="block py-2 text-gray-600 border-b  border-gray-200 hover:text-black"
                >
                  My Profile
                </Link>

                <Link
                  to="/settings/address"
                  className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
                >
                  My Address
                </Link>

                <Link
                  to="/orders"
                  className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
                >
                  My Orders
                </Link>

                <Link
                  to="/settings/change-password"
                  className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
                >
                  Change Password
                </Link>

                <button
                  onClick={handleLogout}
                  className="block py-2 text-gray-600 hover:text-red-500"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-9 overflow-y-auto h-[calc(100vh-80px)] no-scrollbar">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
