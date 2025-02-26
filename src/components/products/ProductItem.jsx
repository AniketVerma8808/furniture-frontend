import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import { store } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
  updateCount,
} from "../../redux/wishlistSlice";
import {
  POSTWishlistService,
  DELETEWishlistService,
} from "../../services/api.service";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check if the product is already in the wishlist
    const isInWishlist = wishlistItems.some((item) => item._id === product._id);
    setIsFavorite(isInWishlist);
  }, [wishlistItems, product._id]);

  const handleAddToCart = () => {
    toast.error("Please log in to add items to the cart.");
    navigate("/login");
  };

  const handleWishlistToggle = async () => {
    let token = store.getState().auth.token;

    if (!token) {
      toast.error("Please log in to manage your wishlist.");
      navigate("/login");
      return;
    }

    if (isFavorite) {
      await DELETEWishlistService(product._id)
        .then((res) => {
          dispatch(updateCount("dec"));
          dispatch(removeFromWishlist(product._id));
          toast.info("Removed from Wishlist");
          setIsFavorite(false);
        })
        .catch((err) => console.log(err));
    } else {
      await POSTWishlistService(product._id)
        .then((res) => {
          // we need to update wishlist => one is count another is product
          dispatch(updateCount("inc"));
          dispatch(addToWishlist(product));
          toast.success("Added to Wishlist");
          setIsFavorite(true);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white custom-shadow rounded-lg overflow-hidden relative transition-transform duration-300"
    >
      <div
        className="block relative"
        onClick={() => navigate(`/product/${product._id}`)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full min-h-32 max-h-60 object-cover rounded-lg cursor-pointer"
        />

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
            className="bg-black py-2 px-4 text-white text-sm rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Wishlist Button */}
      <button
        onClick={handleWishlistToggle}
        className="absolute top-2 right-2 p-3 sm:p-2"
      >
        {isFavorite ? (
          <AiFillHeart className="w-6 h-6 text-[#bc562d]" />
        ) : (
          <AiOutlineHeart className="w-6 h-6 text-[#bc562d]" />
        )}
      </button>

      <div className="p-3 sm:p-4">
        <h3 className="text-gray-800 text-[14px] truncate">{product.name}</h3>
        <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">
          {product.category?.name} - {product.subcategory?.name}
        </p>
        <div className="mt-2 flex items-center">
          <span className="text-[12px] sm:text-[14px] text-gray-900">
            ₹{product.price}
          </span>
          <span className="ml-2 text-sm text-gray-400 line-through">
            ₹{product.price + product.discount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
