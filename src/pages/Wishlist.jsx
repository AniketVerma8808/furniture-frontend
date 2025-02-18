import React, { useState } from "react";
import { Link } from "react-router-dom";
import reviewImg4 from "../assets/image/review/review4.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import NoProduct from "./NoProduct";
import noProductImage from "../assets/image/Furniture images/wishlit.png";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: "Product Title 1",
      collection: "Product Collection 1",
      price: 19.99,
      originalPrice: 29.99,
      image: reviewImg4,
    },
    {
      id: 2,
      title: "Product Title 2",
      collection: "Product Collection 2",
      price: 24.99,
      originalPrice: 34.99,
      image: reviewImg4,
    },
  ]);

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleRemoveItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
    toast.info("Item removed from wishlist");
  };

  const handleAddToCart = () => {
    toast.success("add to cart");
  };

  return (
    <div className="min-h-[420px] pb-12">
      <div className="container mx-auto max-w-7xl pt-12">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
        {/* left Section */}
        {/* <div className="lg:col-span-4 ">
            <div className="border w-80 h-[480px] border-gray-200 rounded-md pt-12 p-6">
              <h3 className=" text-lg">Aniket Verma</h3>
              <div className="mt-4 space-y-4">
                <p className="text-black ">Account Settings</p>

                <Link
                  to={"/"}
                  className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
                >
                  My Profile
                </Link>
                <Link
                  to={"/"}
                  className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
                >
                  My Address
                </Link>
                <Link
                  to={"/"}
                  className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
                >
                  My Orders
                </Link>
                <Link
                  to={"/"}
                  className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
                >
                  My Wishlist
                </Link>
                <Link
                  to={"/"}
                  className="block py-2 text-gray-600 border-b border-gray-200 hover:text-black"
                >
                  Change Password
                </Link>
                <Link
                  to={"/"}
                  className="block py-2 text-gray-600 hover:text-black"
                >
                  Logout
                </Link>
              </div>
            </div>
          </div> */}

        {/* right Section */}
        <div className=" p-4">
          <h3 className="text-2xl  text-gray-800 mb-4">My Wishlist</h3>

          {/* Wishlist Total Items */}
          <p className="text-gray-600">
            Total items in Wishlist: {wishlistItems.length}
          </p>

          {/* Conditionally render message if no items are in the wishlist */}
          {wishlistItems.length === 0 ? (
            <>
              <NoProduct image={noProductImage} />
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border-gray-200 border rounded-lg relative p-2 mt-6"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="absolute -top-4 -right-3 bg-gray-100 rounded-full p-1 hover:bg-gray-200 transition"
                  >
                    <AiOutlineClose
                      size={18}
                      className="text-gray-600 hover:text-gray-900"
                    />
                  </button>

                  <img
                    src={item.image} // Replace with actual image URL
                    alt="Product"
                    className="w-full h-auto object-cover rounded-lg cursor-pointer"
                  />
                  {/* Add to Cart Button on Hover */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredItem === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(item);
                      }}
                      className="bg-black py-2 px-4 text-white text-sm  rounded-lg hover:bg-gray-800 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-gray-800  text-[14px] truncate">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">
                      {item.collection}
                    </p>
                    <div className="mt-2 flex items-center">
                      <span className="text-[12px] sm:text-[14px]  text-gray-900">
                        ${item.price}
                      </span>
                      <span className="ml-2 text-sm text-gray-400 line-through">
                        ${item.originalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Wishlist;
