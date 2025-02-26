import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Loader from "../loader/Loader";
import Layout from "./Layout";
import { LoginService } from "../../services/api.service";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/authSlice";
import { fetchWishlist } from "../../redux/wishlistSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill out all fields!");
      return;
    }
    setLoading(true);

    await LoginService({ email, password })
      .then((res) => {
        toast.success("Login successful!");
        console.log(res, "response from login api ");
        const { token, user } = res.data;
        dispatch(loginSuccess({ token, user }));
        dispatch(fetchWishlist())

        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  py-0 sm:py-4 md:py-8 lg:py-12">
      <Layout />
      <div className="flex justify-center items-start w-full p-4">
        <form onSubmit={handleSubmit} className="w-full p-0 md:p-6 space-y-4">
          <h2 className=" text-base md:text-2xl text-center  text-gray-800">
            Login
          </h2>
          <div>
            <label htmlFor="email" className="block text-sm  text-gray-700">
              Email
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
          <div className="relative">
            <label htmlFor="password" className="block text-sm  text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border borderColor rounded-lg pr-10"
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
          <div className="text-right mt-2">
            <Link
              to="/forgot-password"
              className="text-sm text-gray-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 bgColor text-white rounded-lg mt-4 flex justify-center items-center"
            disabled={loading}
            style={{ height: "40px", width: "100%" }}
          >
            {loading ? <Loader size={5} color="white" /> : "Login"}
          </button>

          {/* Register Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Click here to Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
