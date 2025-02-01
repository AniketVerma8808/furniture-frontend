import React, { useContext } from "react";
import { IoIosTrash } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ProductContext } from "../context/ProductContext";

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useContext(ProductContext);

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
            {wishlist?.length > 0 ? (
                <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg">
                    <div className="p-4 border-b">
                        <h1 className="text-2xl font-bold">Your Wishlist</h1>
                    </div>
                    <div className="space-y-4 p-4">
                        {wishlist.map(({ id, image, title, price }) => (
                            <div
                                key={id}
                                className="flex items-center justify-between border-b py-4"
                            >
                                <div className="flex items-center">
                                    <img
                                        src={image}
                                        alt={title}
                                        className="w-20 h-20 rounded-lg object-cover"
                                    />
                                    <div className="ml-4">
                                        <h2 className="text-lg font-medium">{title}</h2>
                                        <p className="text-gray-600">₹{price}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        removeFromWishlist(id);
                                        toast.success("Removed from Wishlist!");
                                    }}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <IoIosTrash className="w-6 h-6" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="p-4">
                        <Link to="/">
                            <button className="w-full bg-[#75A513] text-white py-2 rounded hover:bg-[#609f10] transition duration-300">
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="text-center text-gray-600 text-lg font-medium">
                    Your wishlist is empty.
                </div>
            )}
        </div>
    );
};

export default Wishlist;
