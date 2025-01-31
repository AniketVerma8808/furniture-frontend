import React, { useState } from 'react';
import BannerImg from '../../assets/image/banner2.jpg';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!name || !email || !phone || !password) {
            toast.error('Please fill out all fields!');
            return;
        }

        // Simulating data submission
        console.log({ name, email, phone, password });
        toast.success('Registration successful!');
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 p-4">
            {/* Left side Banner */}
            <div className="hidden lg:block h-full">
                <img
                    src={BannerImg}
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right side Register Form */}
            <div className="flex justify-center items-start w-full p-4">
                <form
                    onSubmit={handleSubmit}
                    className="w-full p-6 space-y-4"
                >
                    <h2 className="text-3xl text-center font-semibold text-gray-800">Register</h2>

                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border borderColor rounded-lg "
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Email Field */}
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

                    {/* Phone Field */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border borderColor rounded-lg "
                            placeholder="Enter your phone number"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-1 border borderColor rounded-lg "
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 bgColor text-white rounded-lg mt-4 "
                    >
                        Register
                    </button>
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
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
