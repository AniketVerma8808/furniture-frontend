import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen  flex flex-col justify-center items-center text-black text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                404
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-6">
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link
                to="/"
                className="px-6 py-2 bgColor bgColorHover  text-white font-semibold rounded-lg transition duration-200 text-lg sm:text-xl"
            >
                Go to Homepage
            </Link>
        </div>
    );
};

export default NotFound;
