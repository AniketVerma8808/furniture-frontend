import React, { useEffect, useState } from "react";
import { HiChevronDown, HiShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import Rating from "../components/rating/Rating";
import { toast } from "react-toastify";
import ProductZoom from "../components/products/ProductZoom";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetailsPage from "./ProductDetailsPage";
// import RelatedProduct from "../components/relatedProduct/RelatedProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { POSTCartService, POSTWishlistService } from "../services/api.service";
import { store } from "../redux/store";
import { addToWishlist, updateCountWishlist } from "../redux/wishlistSlice";
import { motion } from "framer-motion";
import Skeleton from "../components/loader/Skeleton";
import { addToCart, updateCountCart } from "../redux/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const { products, loading } = useSelector((state) => state.product);
  const product = products.find((p) => p._id === id);

  // console.log("product details page", product);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const handleSelect = (optionId) => {
    // console.log("hello");
    setSelected((prevSelected) =>
      prevSelected.includes(optionId)
        ? prevSelected.filter((id) => id !== optionId)
        : [...prevSelected, optionId]
    );
  };

  // toggle descripton
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // quantity inc & dec
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  // add to cart

  const handleAddToCart = async () => {
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

  // add to wihslist
  const handleAddToWishlist = async () => {
    let token = store.getState().auth.token;
    if (!token) {
      toast.error("Please log in to manage your wishlist.");
      navigate("/login");
      return;
    } else {
      await POSTWishlistService(product._id)
        .then((res) => {
          // we need to update wishlist => one is count another is product
          dispatch(updateCountWishlist("inc"));
          dispatch(addToWishlist(product));
          toast.success("Added to Wishlist");
        })
        .catch((err) => console.log(err));
    }
  };

  if (loading) {
    return (
      <div className="container min-h-screen mx-auto px-4 md:px-8 mt-10 mb-10">
        <Skeleton cardCount={2} />
      </div>
    );
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container min-h-screen mx-auto px-4 md:px-8 mt-10 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Image Section */}
        <div className="">
          <div className="h-auto">
            <ProductZoom images={product?.images} />
          </div>
          <div className="hidden md:block">
            <ProductDetailsPage />
          </div>
        </div>
        {/* Right Content Section */}
        <div className=" pt-6">
          <div className="space-y-4">
            <h3 className="text-[20px] md:text-[24px]  text-[rgb(42,40,40)] leading-[30px] md:leading-[45px]">
              {product.name}
            </h3>

            <div className="mt-4 flex items-center gap-8">
              <h3 className="text-[20px] md:text-[26px] text-[rgb(42,40,40)] leading-[39px]">
                ₹{product.price - product.discount}
              </h3>

              {product.price && (
                <div className="flex items-center space-x-2">
                  <span className="text-md text-gray-400 line-through">
                    ₹{product.price}
                  </span>
                  <span className="text-md rounded-md px-3 py-2 text-white bgColor text-[13px] md:text-[16px] font-semibold">
                    {Math.round((product.discount / product.price) * 100)}% OFF
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Rating rating={product.ratings || 0} />
              <span className="text-lg text-gray-500">
                ({product.rating || 0} out of 5)
              </span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center space-x-4">
            <p className="text-lg ">Quantity:</p>
            <button
              onClick={decrementQuantity}
              className="bg-gray-300 text-gray-700 rounded-full px-3 py-1"
            >
              -
            </button>
            <span className="text-lg ">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="bg-gray-300 text-gray-700 rounded-full px-3 py-1"
            >
              +
            </button>
          </div>

          {/* Add to Cart and Add to Wishlist Buttons */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center w-full rounded-md px-5 py-2.5 text-center text-[13px] lg:text-sm text-white bgColor transition duration-300 focus:outline-none 
    md:col-span-1 lg:col-span-1 lg:w-full"
            >
              <HiShoppingCart className="mr-2 text-base lg:text-2xl" />
              Add to Cart
            </button>

            {/* Add to Wishlist Button */}
            <button
              onClick={handleAddToWishlist}
              className="flex items-center justify-center w-full rounded-md px-5 py-2 md:py-2.5 text-center text-[13px] lg:text-sm text-white bgColor transition duration-300 focus:outline-none 
    md:col-span-1  lg:col-span-1 lg:w-full"
            >
              <FaRegHeart className="mr-2 text-base lg:text-2xl" />
              Add to Wishlist
            </button>

            {/* Dropdown for Customization */}
            {product.isCustomized && (
              <div className="relative w-full md:col-span-2 lg:col-span-2">
                <div
                  className="border border-gray-300 rounded-lg px-4 py-2 cursor-pointer flex justify-between items-center bg-white"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span>Customized Beds</span>
                  <HiChevronDown
                    className={`w-5 h-5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {isOpen && (
                  <div
                    className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-auto"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {product.custom.map((option) => (
                      <label
                        key={option._id}
                        className="flex items-center p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                      >
                        <input
                          type="checkbox"
                          checked={selected.includes(option._id)}
                          onChange={() => handleSelect(option._id)}
                          className="mr-2"
                        />
                        <img
                          src={option.image}
                          alt={option.title}
                          className="w-12 h-12 object-cover rounded-lg mr-3"
                        />
                        <div>
                          <p className="text-sm font-semibold">
                            {option.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            ₹{option.price.toFixed(2)}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* description section */}
          <div
            className={`mt-8 rounded-md transition-shadow duration-300 ${
              activeIndex === 0 ? "custom-shadow" : "custom-shadow"
            }`}
          >
            <button
              onClick={() => toggleAccordion(0)}
              className="w-full flex justify-between rounded-md items-center text-[22px] px-4 py-4 bg-white text-gray-700 transition"
            >
              <span>Description</span>
              <span className="text-[22px]">
                {activeIndex === 0 ? "-" : "+"}
              </span>
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                activeIndex === 0
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden bg-white"
            >
              <div className="px-4 py-3 text-gray-700 font-thin text-[16px] md:font-normal">
                {product.description}
              </div>
            </motion.div>
          </div>

          <div className="custom-shadow flex flex-wrap justify-center md:justify-around border border-gray-300 p-4 mt-8 text-black rounded-md gap-x-6 gap-y-2 text-sm md:text-base">
            <p className="!font-bold">✅ 100% Genuine Products</p>
            <p className="!font-bold">💳 Easy EMI</p>
            <p className="!font-bold">📞 Customer Support</p>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <ProductDetailsPage />
      </div>
    </div>
  );
};

export default ProductDetails;
