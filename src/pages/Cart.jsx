import React, { useContext, useState } from "react";
import { IoIosTrash } from "react-icons/io";
import { ProductContext } from "../context/ProductContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader/Loader";

const Cart = () => {
    const { cart, handleQuantityChange, handleRemoveItem } = useContext(ProductContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const parsePrice = (price) => {
        return parseFloat(price.replace('₹', '').replace(',', ''));
    }

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + parsePrice(item.price) * item.quantity, 0);
    };

    const shippingFee = cart.length > 0 ? 50 : 0;
    const finalTotal = calculateTotal() + shippingFee;

    const handleProceedToCheckout = async () => {
        setLoading(true);

        // Save cart data in localStorage for checkout
        const cartData = cart.map((item) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity,
        }));

        localStorage.setItem("cartData", JSON.stringify(cartData));
        localStorage.setItem("totalAmount", finalTotal.toFixed(2));

        // Simulate loading time and navigate to checkout page
        setTimeout(() => {
            navigate("/checkout");
            setLoading(false);
        }, 2000);
    };




    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
            {cart.length > 0 ? (
                <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-4">
                    {/* Cart Header */}
                    <div className="p-4 border-b">
                        <h1 className="text-2xl font-bold">Shopping Cart</h1>
                    </div>

                    {/* Cart Items & Order Summary */}
                    <div className="flex flex-col lg:flex-row">
                        {/* Cart Items */}
                        <div className="flex-1 p-4">
                            {cart.map(({ id, title, price, quantity, images }) => (
                                <div key={id} className="flex items-center justify-between border-b py-4 flex-wrap lg:flex-nowrap">
                                    {/* Product Info */}
                                    <div className="flex items-center w-full lg:w-auto mb-4 lg:mb-0">

                                        <img
                                            src={images && images[0]}
                                            alt={title}
                                            className="w-20 h-20 rounded-lg object-cover"
                                        />
                                        <div className="ml-4">
                                            <h2 className="text-lg font-medium">{title}</h2>
                                            <p className="text-gray-600"> {price}</p>
                                        </div>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={() => handleQuantityChange(id, -1)}
                                            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                                            disabled={quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="text-lg font-medium">{quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(id, 1)}
                                            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Total Price & Remove Button */}
                                    <div className="flex items-center space-x-4">
                                        {/* <p className="text-lg font-medium">₹{(price * quantity).toFixed(2)}</p> */}
                                        <button
                                            onClick={() => {
                                                handleRemoveItem(id);
                                                toast.success("Removed from Cart!");
                                            }}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <IoIosTrash className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-1/3 bg-gray-50 p-4 border-t lg:border-t-0 lg:border-l">
                            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                            <div className="flex justify-between text-lg mb-2">
                                <span>Subtotal</span>
                                <span>₹{calculateTotal().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-lg mb-2">
                                <span>Shipping</span>
                                <span>₹{shippingFee.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold border-t pt-2">
                                <span>Total</span>
                                <span>₹{finalTotal.toFixed(2)}</span>
                            </div>
                            <button
                                onClick={handleProceedToCheckout}
                                disabled={loading}
                                className="mt-4 w-full bgColor cursor-pointer text-white py-2 rounded  transition duration-300"
                            >
                                {loading ? <Loader color="white" size="4" /> : 'Proceed to Checkout'}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center text-gray-600 text-lg font-medium">Your cart is empty.</div>
            )}
        </div>
    );
};

export default Cart;
