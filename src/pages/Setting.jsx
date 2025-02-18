import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/authSlice";
import { Outlet } from "react-router-dom";

const Setting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Logout successful!");
    navigate("/");
  };

  return (
    <div className="py-12">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3">
            <div className="border  border-gray-200 rounded-md pt-12 p-6">
              <h3 className="font-semibold text-lg">Aniket Verma</h3>
              <div className="mt-4 space-y-4">
                <p className="text-black font-medium">Account Settings</p>

                <Link
                  to="/settings/profile"
                  className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
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
                  to="/settings/orders"
                  className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
                >
                  My Orders
                </Link>
                <Link
                  to="/settings/subscribe"
                  className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
                >
                  Subscribe
                </Link>
                <Link
                  to="/settings/change-password"
                  className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
                >
                  Change Password
                </Link>
                <Link
                  to="/"
                  onClick={handleLogout}
                  className="block py-2 text-gray-600 hover:text-red-500"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9">
            <Outlet />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
