import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import loginBanner from '../../assets/image/banner/loginBanner.png'
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { ProductContext } from '../../context/ProductContext';

const Login = () => {
    const { login } = useContext(ProductContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error('Please fill out all fields!');
            return;
        }

        if (login(email, password)) {
            toast.success("Login successful!");
            navigate("/");
        } else {
            toast.error("Invalid email or password!");
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 p-4">
            {/* Left side Banner */}
            <div className="hidden lg:block h-full">
                <img
                    src={loginBanner}
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right side Login Form */}
            <div className="flex justify-center items-start w-full p-4">
                <form
                    onSubmit={handleSubmit}
                    className="w-full p-6 space-y-4"
                >
                    <h2 className="text-3xl text-center font-semibold text-gray-800">Login</h2>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                            {showPassword ? <IoIosEye size={22} /> : <IoIosEyeOff size={22} />}
                        </button>
                    </div>

                    <button type="submit" className="w-full py-2 bgColor text-white rounded-lg mt-4">Login</button>



                    {/* Register Link */}
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
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
