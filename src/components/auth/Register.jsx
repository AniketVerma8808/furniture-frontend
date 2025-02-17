import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Loader from "../loader/Loader";
import Layout from "./Layout";
import { RegisterService } from "../../services/api.service";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, password } = formData;

    // Basic validation
    if (!name || !email || !phone || !password) {
      toast.error("Please fill out all fields!");
      return;
    }

    setLoading(true);
    try {
      await RegisterService(formData);
      toast.success("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.response.data.message || "Internal Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  py-0 sm:py-4 md:py-8 lg:py-12">
      <Layout />
      <div className="flex justify-center flex-col w-full p-4">
        <h2 className="text-3xl text-center font-semibold text-gray-800">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="w-full p-0 md:p-6 space-y-4">
          {["name", "email", "phone"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-700 capitalize"
              >
                {field}
              </label>
              <input
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border borderColor rounded-lg "
                placeholder={`Enter your ${field}`}
              />
            </div>
          ))}

          {/* Password Field */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border borderColor rounded-lg "
              placeholder="Enter your password"
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

          {/* Submit Button */}
          <button
            type="submit"
            className="py-2 bgColor text-white rounded-lg mt-4 flex justify-center items-center"
            disabled={loading}
            style={{ height: "40px", width: "100%" }}
          >
            {loading ? <Loader size={5} color="white" /> : "Register"}
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Click here to Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
