import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";
import NoProduct from "./NoProduct";
import noProductImage from "../assets/image/Furniture images/wishlit.png";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETEWishlistService,
  POSTCartService,
} from "../services/api.service";
import {
  removeFromWishlist,
  updateCountWishlist,
} from "../redux/wishlistSlice";
import { store } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const Wishlist = () => {
  const { wishlistItems, wishlistCount } = useSelector(
    (state) => state.wishlist
  );

  const [hoveredItem, setHoveredItem] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = async (product) => {
    let token = store.getState().auth.token;
    if (!token) {
      toast.error("Please log in to manage your cart.");
      navigate("/login");
      return;
    }

    await POSTCartService({ productId: product._id, quantity: 1 })
      .then((res) => {
        // dispatch(updateCountCart("inc"));
        dispatch(addToCart(product));
        toast.success("Product added to cart successfully");
      })
      .catch((err) => console.log(err));
  };

  const handleRemovefromWishlist = async (productId) => {
    await DELETEWishlistService(productId);
    dispatch(updateCountWishlist("dec"));
    dispatch(removeFromWishlist(productId));
    toast.info("Item removed from wishlist");
  };
  return (
    <div className="min-h-[420px] pb-12">
      <div className="container mx-auto max-w-7xl pt-12">
        <div className=" p-4">
          <h3 className="text-2xl  text-gray-800 mb-4">My Wishlist</h3>

          {/* Conditionally render message if no items are in the wishlist */}
          {wishlistCount === 0 ? (
            <>
              <NoProduct image={noProductImage} />
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {wishlistItems.map((item) => (
                <div
                  key={item._id}
                  className="bg-white border-gray-200 border rounded-lg relative p-2 mt-6"
                  onMouseEnter={() => setHoveredItem(item._id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => handleRemovefromWishlist(item._id)}
                    className="absolute -top-4 -right-3 bg-gray-100 rounded-full p-1 hover:bg-gray-200 transition"
                  >
                    <AiOutlineClose
                      size={18}
                      className="text-gray-600 hover:text-gray-900"
                    />
                  </button>

                  <img
                    src={item.images[0]}
                    alt="Product"
                    className="w-full h-auto object-cover rounded-lg cursor-pointer"
                  />
                  {/* Add to Cart Button on Hover */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredItem === item._id ? "opacity-100" : "opacity-0"
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
                      {item.name}
                    </h3>
                    {/* <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">
                      {item.collection}
                    </p> */}
                    <div className="mt-2 flex items-center">
                      <span className="text-[12px] sm:text-[14px]  text-gray-900">
                        ${item.price}
                      </span>
                      <span className="ml-2 text-sm text-gray-400 line-through">
                        ${item.price + 1000}
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
