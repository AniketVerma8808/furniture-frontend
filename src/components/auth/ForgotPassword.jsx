import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }
    console.log("Forgot Password Request Sent:", { email });
    toast.success("If this email exists, you will receive a reset link.");
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  py-0 sm:py-4 md:py-8 lg:py-12">
      <Layout />
      <div className="flex justify-center items-start w-full p-4">
        <form onSubmit={handleSubmit} className="w-full p-0 md:p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Forgot Password
          </h2>
          <p className="text-sm text-gray-600 text-center mt-2">
            Enter your registered email to receive a reset link.
          </p>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border borderColor rounded-lg "
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className=" py-2 bgColor text-white rounded-lg mt-4 flex justify-center items-center"
            disabled={loading}
            style={{ height: "40px", width: "100%" }}
          >
            {loading ? <Loader size={5} color="white" /> : "  Send Reset Link"}
          </button>

          <div className="text-center mt-4">
            <Link to="/login" className="text-blue-500 text-sm hover:underline">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
