import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser } from "../redux/authSlice";
import { passwardChangeService } from "../services/api.service";
import Loader from "../components/loader/Loader";

const ChangePassword = () => {
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !password.currentPassword ||
      !password.newPassword ||
      !password.confirmPassword
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password.newPassword !== password.confirmPassword) {
      toast.error("New password and confirm password do not match.");
      return;
    }
    setLoading(true);
    try {
      const response = await passwardChangeService(
        {
          currentPassword: password.currentPassword,
          newPassword: password.newPassword,
        },
        token
      );

      toast.success(response.data.message || "Password changed successfully!");
      dispatch(logoutUser());
      navigate("/login");
    } catch (error) {
      console.error("Error Response:", error);
      toast.error(
        error.response?.data?.message || "Failed to change password!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <form onSubmit={handleSubmit}>
        {/* Current Password */}
        <div className="mb-6">
          <label className="block text-gray-600 text-[13px] mb-2">
            Current Password:
          </label>
          <div className="relative">
            <input
              type={showPassword.currentPassword ? "text" : "password"}
              name="currentPassword"
              value={password.currentPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg pr-10"
            />
            <span
              className="absolute top-5 right-3 cursor-pointer"
              onClick={() => togglePasswordVisibility("currentPassword")}
            >
              {showPassword.currentPassword ? <FiEye /> : <FiEyeOff />}
            </span>
          </div>
        </div>

        {/* New Password */}
        <div className="mb-6">
          <label className="block text-gray-600 text-[13px] mb-2">
            New Password:
          </label>
          <div className="relative">
            <input
              type={showPassword.newPassword ? "text" : "password"}
              name="newPassword"
              value={password.newPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg pr-10"
            />
            <span
              className="absolute top-5 right-3 cursor-pointer"
              onClick={() => togglePasswordVisibility("newPassword")}
            >
              {showPassword.newPassword ? <FiEye /> : <FiEyeOff />}
            </span>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-gray-600 text-[13px] mb-2">
            Confirm Password:
          </label>
          <div className="relative">
            <input
              type={showPassword.confirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={password.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg pr-10"
            />
            <span
              className="absolute top-5 right-3 cursor-pointer"
              onClick={() => togglePasswordVisibility("confirmPassword")}
            >
              {showPassword.confirmPassword ? <FiEye /> : <FiEyeOff />}
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-start">
          <button
            type="submit"
            className=" bgColor text-white py-2 text-[14px] rounded-lg"
            disabled={loading}
            style={{ height: "40px", width: "80px" }}
          >
            {loading ? <Loader size={5} color="white" /> : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
