import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Layout from "./Layout";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!password || !confirmPassword) {
      toast.error("Please fill out both fields!");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    console.log("Reset Password Request:", { password });
    toast.success("Password reset successfully!");
    navigate("/login");
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  py-0 sm:py-4 md:py-8 lg:py-12">
      <Layout />
      <div className="flex justify-center items-start w-full p-4">
        <form onSubmit={handleSubmit} className="w-full p-0 md:p-6 space-y-4">
          <h2 className="text-base md:text-2xl  text-center text-gray-800">
            Reset Password
          </h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Enter your new password below.
          </p>

          {/* Password Field */}
          <div className="relative mt-4">
            <label
              htmlFor="password"
              className="block text-sm  text-gray-700"
            >
              New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border borderColor rounded-lg "
              placeholder="Enter new password"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <IoIosEye size={22} />
              ) : (
                <IoIosEyeOff size={22} />
              )}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="relative mt-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm  text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border borderColor rounded-lg "
              placeholder="Re-enter new password"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <IoIosEye size={22} />
              ) : (
                <IoIosEyeOff size={22} />
              )}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-2 bgColor text-white rounded-lg mt-4 flex justify-center items-center"
            disabled={loading}
            style={{ height: "40px", width: "100%" }}
          >
            {loading ? <Loader size={5} color="white" /> : " Reset Password"}
            Reset Password
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Remembered your password?{" "}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => navigate("/login")}
              >
                Back to Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
