import React from 'react'
import { useNavigate } from 'react-router-dom';

const CategoriesItem = ({ icon, name }) => {
    const navigate = useNavigate()

    const handleCategoryClick = () => {
        navigate(`/products/${name.toLowerCase()}`);
    }
    return (
        <div onClick={handleCategoryClick} className="flex flex-col items-center p-3 sm:p-4 rounded-md shadow-md text-black border border-gray-300 mx-1 sm:mx-2 transition-all duration-300">
            {/* Icon Section */}
            <div className="text-4xl sm:text-5xl md:text-6xl text-gray-500 text-opacity-60 mb-1 sm:mb-2">
                {icon}
            </div>
            {/* Category Name */}
            <span className="text-xs sm:text-sm  text-center">{name}</span>
        </div>
    );
};


export default CategoriesItem
