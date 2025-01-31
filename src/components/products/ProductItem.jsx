import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { toast } from 'react-toastify';

const ProductItem = ({ product }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        toast.success("Added to Cart!");
    };

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-white shadow-lg rounded-lg overflow-hidden relative transition-transform duration-300 "
        >
            {/* Product Image with Click Navigation */}
            <div className="block relative" onClick={() => navigate(`/product/${product.id}`)}>
                <img src={product.image} alt={product.title} className="w-full h-60 object-cover cursor-pointer" />
                {/* Add to Cart Button (Centered on Hover) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <button
                        onClick={(e) => { e.stopPropagation(); handleAddToCart(); }}
                        className="bg-black py-2 px-4 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Favorite Heart Icon */}
            <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md"
            >
                {isFavorite ? <AiFillHeart className="w-6 h-6 text-red-500" /> : <AiOutlineHeart className="w-6 h-6 text-red-500" />}
            </button>

            {/* Product Details */}
            <div className="p-4">
                <h3 className="text-gray-800 font-semibold text-lg truncate">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.collection}</p>
                <div className="mt-2 flex items-center">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <span className="ml-2 text-sm text-gray-400 line-through">{product.oldPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
