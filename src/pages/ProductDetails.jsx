import React, { useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { FaRegHeart } from 'react-icons/fa';
import Rating from '../components/rating/Rating';
import { toast } from 'react-toastify';
import ProductZoom from '../components/products/ProductZoom';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [product] = useState({
        title: "Royaloak Astra Magazine Rack- Water Base",
        price: 1999,
        salePrice: 1499,
        description: "This is a detailed description of the product. It explains the features and benefits.",
        rating: 4.5,
        category: { name: "Furniture" },
        subcategory: { name: "Chairs" },
    });

    const handleAddToCart = () => {
        toast.success(`${quantity} item(s) added to Cart!`);
    };

    const handleAddToWishlist = () => {
        toast.success("Added to Wishlist!");
    };

    // Increment and decrement functions for quantity
    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="container min-h-screen mx-auto px-4 mt-10 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Left Image Section */}
                <div className="col-span-5 lg:col-span-2">
                    <div className="h-auto">
                        <ProductZoom />
                    </div>
                </div>
                {/* Right Content Section */}
                <div className="col-span-5 lg:col-span-3 pt-6">
                    <div className="space-y-4">
                        <h3 className="font-roboto font-medium text-[30px] text-[rgb(42,40,40)] leading-[45px]">
                            {product.title}
                        </h3>
                        <h3 className="font-roboto font-medium text-[30px] text-[rgb(42,40,40)] leading-[45px]">
                            ₹{product.salePrice || product.price}
                        </h3>
                        <div className="flex items-center space-x-2">
                            <Rating rating={product.rating || 0} />
                            <span className="text-lg text-gray-500">({product.rating || 0} out of 5)</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{product.description}</p>
                    </div>

                    {/* Category and Subcategory */}
                    <div className="mt-4">
                        <p className="text-gray-600 text-lg">
                            <strong>Category:</strong> {product.category.name || product.category}
                        </p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="mt-6 flex items-center space-x-4">
                        <p className="text-lg font-medium">Quantity:</p>
                        <button
                            onClick={decrementQuantity}
                            className="bg-gray-300 text-gray-700 rounded-full px-3 py-1"
                        >
                            -
                        </button>
                        <span className="text-lg font-semibold">{quantity}</span>
                        <button
                            onClick={incrementQuantity}
                            className="bg-gray-300 text-gray-700 rounded-full px-3 py-1"
                        >
                            +
                        </button>
                    </div>


                    {/* Add to Cart and Add to Wishlist Buttons */}
                    <div className="mt-8 flex gap-10">
                        <button
                            onClick={handleAddToCart}
                            className="flex items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-white bgColor transition duration-300 focus:outline-none"
                        >
                            <HiShoppingCart className="mr-2 h-6 w-6" />
                            Add to Cart
                        </button>
                        <button
                            onClick={handleAddToWishlist}
                            className="flex items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium text-white bgColor transition duration-300 focus:outline-none"
                        >
                            <FaRegHeart className="mr-2 h-6 w-6" />
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
