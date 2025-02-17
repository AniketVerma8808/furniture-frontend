import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { toast } from "react-toastify";
// import { ProductContext } from "../../context/ProductContext";

const ProductItem = ({ product, label }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  // const { addToCart, addToWishlist, wishlist, removeFromWishlist, isAuthenticated } = useContext(ProductContext);

  // useEffect(() => {
  //     if (wishlist.find((item) => item.id === product.id)) {
  //         setIsFavorite(true);
  //     } else {
  //         setIsFavorite(false);
  //     }
  // }, [wishlist, product.id]);

  const handleAddToCart = () => {
    // if (!isAuthenticated) {
    toast.error("Please log in to add items to the cart.");
    navigate("/login");
    return;
    // }
    // addToCart(product);
    toast.success("Added to Cart!");
  };

  const handleAddToWishlist = () => {
    if (!isAuthenticated) {
      toast.error("Please log in to add items to the wishlist.");
      navigate("/login");
      return;
    }
    if (isFavorite) {
      removeFromWishlist(product.id);
      setIsFavorite(false);
      toast.success("Removed from Wishlist!");
    } else {
      addToWishlist(product);
      setIsFavorite(true);
      toast.success("Added to Wishlist!");
    }
  };

  const getLabelColor = (label) => {
    switch (label) {
      case "Best Seller":
        return "bg-yellow-500";
      case "Trending":
        return "bg-green-500";
      case "New Arrival":
        return "bg-blue-500";
      default:
        return "bg-red-500";
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white shadow-md rounded-lg overflow-hidden relative transition-transform duration-300"
    >
      {/* Product Image with Click Navigation */}
      <div
        className="block relative"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full min-h-32 max-h-60 object-cover rounded-lg cursor-pointer"
        />

        {/* Add to Cart Button (Centered on Hover) */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
            className="bg-black py-2 px-4 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
        {/* Dynamic Label */}
        {label && (
          <div
            className={`absolute bottom-0 left-0 text-white text-xs font-semibold px-2 py-1 rounded-md ${getLabelColor(
              label
            )}`}
          >
            {label}
          </div>
        )}
      </div>

      {/* Favorite Heart Icon */}
      <button
        onClick={handleAddToWishlist}
        className="absolute top-2 right-2  p-3 sm:p-2 "
      >
        {isFavorite ? (
          <AiFillHeart className="w-6 h-6 text-[#bc562d]" />
        ) : (
          <AiOutlineHeart className="w-6 h-6 text-[#bc562d]" />
        )}
      </button>

      {/* Product Details */}
      <div className="p-3 sm:p-4">
        <h3 className="text-gray-800 font-semibold text-[14px]  truncate">
          {product.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">
          {product.collection}
        </p>
        <div className="mt-2 flex items-center">
          <span className="text-[12px] sm:text-[14px] font-bold text-gray-900">
            {product.price}
          </span>
          <span className="ml-2 text-sm text-gray-400 line-through">
            {product.oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
