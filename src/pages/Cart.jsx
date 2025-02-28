import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderSummary from "../components/orders/OrderSummary";
import { AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { toast } from "react-toastify";
import noProductImage from "../assets/image/Furniture images/cart.png";
import NoProduct from "./NoProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETECartService,
  DELETEWishlistService,
  POSTWishlistService,
} from "../services/api.service";
import {
  removeFromCart,
  updateCartquantity,
  updateCountCart,
} from "../redux/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
  updateCountWishlist,
} from "../redux/wishlistSlice";
import { store } from "../redux/store";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleQuantityChange = (productId, change) => {
    dispatch(updateCartquantity({ productId, change }));
  };

  const handleAddToWishlist = async (product) => {
    let token = store.getState().auth.token;

    if (!token) {
      toast.error("Please log in to manage your wishlist.");
      navigate("/login");
      return;
    }

    const isInWishlist = wishlistItems.some((item) => item._id === product._id);

    if (isInWishlist) {
      await DELETEWishlistService(product._id)
        .then(() => {
          dispatch(updateCountWishlist("dec"));
          dispatch(removeFromWishlist(product._id));
          toast.info("Removed from Wishlist");
        })
        .catch((err) => console.log(err));
    } else {
      await POSTWishlistService(product._id)
        .then(() => {
          dispatch(updateCountWishlist("inc"));
          dispatch(addToWishlist(product));
          toast.success("Added to Wishlist");
        })
        .catch((err) => console.log(err));
    }
  };

  const removeItem = async (productId) => {
    await DELETECartService(productId);
    dispatch(updateCountCart("dec"));
    dispatch(removeFromCart(productId));
    toast.info("Item removed from cart");
  };

  return (
    <div className="py-12">
      {cartItems.length > 0 ? (
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Cart Section */}
            <div className="lg:col-span-8 bg-white p-2 md:p-6 rounded-lg border border-gray-200 shadow-md">
              <div className="border border-gray-300 rounded-lg px-2 md:px-6 mt-6">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-xl  mb-2">
                    My Cart ({cartItems.length})
                  </h3>
                </div>
                <div className="flex flex-col lg:flex-row">
                  <div className="flex-1 p-4">
                    {cartItems?.map(({ product, quantity }) => (
                      <div
                        key={product._id}
                        className="flex border-b border-gray-200 py-4 flex-nowrap"
                      >
                        {/* Product Image */}
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-20 h-20 rounded-lg object-cover cursor-pointer"
                          onClick={() => navigate(`/product/${product._id}`)}
                        />
                        {/* Product Details */}
                        <div className="flex flex-col ml-4">
                          <h2 className="text-[14px] line-clamp-2">
                            {product.name}
                          </h2>

                          <div className="flex flex-wrap items-center gap-4 mt-2">
                            {/* Quantity Adjuster */}
                            <div className="flex items-center flex-wrap">
                              <p>
                                <span className="mr-5 text-[#9A8B8B]">
                                  Quantity
                                </span>
                              </p>
                              <div className="flex items-center">
                                <button
                                  onClick={() =>
                                    handleQuantityChange(product._id, -1)
                                  }
                                  className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                                  disabled={quantity <= 1}
                                >
                                  -
                                </button>
                                <span className="mx-3 text-lg">{quantity}</span>
                                <button
                                  onClick={() =>
                                    handleQuantityChange(product._id, 1)
                                  }
                                  className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            {/* Price Details */}
                            <p className="text-black mt-2">
                              ₹{product.price}{" "}
                              <span className="line-through ml-5 text-[#9A8B8B]">
                                ₹{product.price + product.discount}
                              </span>
                            </p>

                            <p className="text-green-600 text-sm">
                              You Save ₹{product.discount}
                            </p>
                          </div>

                          {/* Actions */}
                          <div className="flex space-x-4 mt-2 flex-wrap text-sm text-[#9A8B8B]  cursor-pointer">
                            <p
                              className="flex items-center group"
                              onClick={() => handleAddToWishlist(product)}
                            >
                              {isFavorite ? (
                                <AiFillHeart className="mr-2 text-gray-600 group-hover:text-red-600 transition-colors duration-200" />
                              ) : (
                                <AiOutlineHeart className="mr-2 text-gray-600 group-hover:text-red-600 transition-colors duration-200" />
                              )}
                              Add to Wishlist
                            </p>

                            <p
                              className="flex items-center hover:text-red-600 transition-colors duration-200"
                              onClick={() => removeItem(product._id)}
                            >
                              <AiOutlineDelete className="mr-2" /> Remove
                            </p>
                            <p className="flex items-center">
                              <TbTruckDelivery className="mr-2" /> Delivery
                              Estimated
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Order Summary */}
            <div className="lg:col-span-4">
              <OrderSummary />
            </div>
          </div>
        </div>
      ) : (
        <NoProduct image={noProductImage} />
      )}
    </div>
  );
};

export default Cart;
