import React, { useContext, useEffect, useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { FaRegHeart } from 'react-icons/fa';
import Rating from '../components/rating/Rating';
import { toast } from 'react-toastify';
import ProductZoom from '../components/products/ProductZoom';
import { ProductContext } from '../context/ProductContext';
import { useParams } from 'react-router-dom';
import ProductDetailsPage from './ProductDetailsPage';
import RelatedProduct from '../components/relatedProduct/RelatedProduct';

const ProductDetails = () => {
    const { id } = useParams();
    const { getProductById, addToCart, addToWishlist, currentProduct } = useContext(ProductContext);

    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchedProduct = getProductById(parseInt(id));
        // console.log(fetchedProduct)
        if (fetchedProduct) {
            setProduct(fetchedProduct);
        } else {
            toast.error("Product not found!");
        }
    }, [id, getProductById]);


    const handleAddToCart = () => {
        addToCart(product);
        toast.success("Added to Cart!");
    };

    const handleAddToWishlist = () => {
        addToWishlist(product);
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
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container min-h-screen mx-auto px-4 mt-10 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Left Image Section */}
                <div className="col-span-5 lg:col-span-2">
                    <div className="h-auto">
                        <ProductZoom images={product?.images} />

                    </div>
                </div>
                {/* Right Content Section */}
                <div className="col-span-5 lg:col-span-3 pt-6">
                    <div className="space-y-4">
                        <h3 className="font-roboto text-[26px] sm:text-[30px] text-[rgb(42,40,40)] leading-[45px]">
                            {product.title}
                        </h3>
                        <h3 className="font-roboto font-medium text-[30px] text-[rgb(42,40,40)] leading-[45px]">
                            {product.salePrice || product.price}
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
                            {/* <strong>Category:</strong> {product.category.name || product.category} */}
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
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-10">
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
            <div className="py-8">
                <RelatedProduct currentProductCategory={product.category} />
            </div>
            <div>
                <ProductDetailsPage />
            </div>
        </div>
    );
}

export default ProductDetails;
