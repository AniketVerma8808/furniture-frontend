import React, { useEffect, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import Rating from "../components/rating/Rating";
import { toast } from "react-toastify";
import ProductZoom from "../components/products/ProductZoom";
import { useParams } from "react-router-dom";
import ProductDetailsPage from "./ProductDetailsPage";
import RelatedProduct from "../components/relatedProduct/RelatedProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { POSTWishlistService } from "../services/api.service";
import { store } from "../redux/store";
import { addToWishlist, updateCount } from "../redux/wishlistSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p._id === id);

  //   console.log("product details page", product);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    toast.success(`${quantity} item(s) added to cart!`);
  };

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
          dispatch(updateCount("inc"));
          dispatch(addToWishlist(product));
          toast.success("Added to Wishlist");
        })
        .catch((err) => console.log(err));
    }
  };

  if (!product) {
    return <div>Loading...</div>;
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
        </div>
        {/* Right Content Section */}
        <div className=" pt-6">
          <div className="space-y-4">
            <h3 className=" text-[26px] sm:text-[30px] text-[rgb(42,40,40)] leading-[45px]">
              {product.name}
            </h3>

            <div className="mt-4 flex items-center gap-8">
              <h3 className=" text-[30px] text-[rgb(42,40,40)] leading-[45px]">
                {product.salePrice || product.price}
              </h3>

              {product.discount > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-md text-gray-400 line-through">
                    ₹{product.price}
                  </span>
                  <span className="text-md rounded-md px-3 py-2 text-white bgColor  font-semibold">
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
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Category and Subcategory */}
          <div className="mt-4">
            <p className="text-gray-600 text-lg">
              {/* <strong>Category:</strong> {product.category.name || product.category} */}
            </p>
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
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-10">
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center rounded-md px-5 py-2.5 text-center text-sm  text-white bgColor transition duration-300 focus:outline-none"
            >
              <HiShoppingCart className="mr-2 h-6 w-6" />
              Add to Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="flex items-center justify-center rounded-md px-5 py-2.5 text-center text-sm  text-white bgColor transition duration-300 focus:outline-none"
            >
              <FaRegHeart className="mr-2 h-6 w-6" />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* <div className="py-8"> */}
      {/* <RelatedProduct currentProductCategory={product.category} /> */}
      {/* </div> */}
      <div>
        <ProductDetailsPage />
      </div>
    </div>
  );
};

export default ProductDetails;
