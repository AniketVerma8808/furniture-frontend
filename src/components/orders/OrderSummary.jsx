import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (acc, { product, quantity }) => acc + product.price * quantity,
    0
  );

  const shipping = 0;
  const tax = 2000;
  const total = subtotal + tax;

  const currentStep = location.state?.step || "cart";
  const nextStep = currentStep === "address" ? "payment" : "address";

  const handleProceed = () => {
    localStorage.setItem("checkoutStep", nextStep);
    navigate("/checkout", { state: { step: nextStep } });
  };
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md border h-[500px] border-gray-200">
        <h3 className="text-xl mb-4 text-gray-700">Order Summary</h3>

        {/* Subtotal */}
        <div className="flex justify-between text-[14px] md:text-lg mb-3 text-gray-600">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>

        {/* Paytm Giftcard */}
        <div className="flex justify-between text-[14px] md:text-lg mb-3 text-gray-600">
          <span>Paytm Giftcard</span>
          <span>₹0.00</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between text-[14px] md:text-lg mb-3 text-gray-600">
          <span>Shipping</span>
          <span>₹{shipping.toFixed(2)}</span>
        </div>

        {/* Tax */}
        <div className="flex justify-between text-md mb-3 text-gray-600">
          <span>Tax</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>

        {/* Total */}
        <div className="flex justify-between text-lg border-t pt-3 mt-4 text-gray-800">
          <span>Total Orders</span>
          <span className="text-xl text-green-600">₹{total.toFixed(2)}</span>
        </div>

        {/* Discount Code Section */}
        <div className="mt-4">
          <label
            htmlFor="discountCode"
            className="block text-sm text-gray-600 mb-2"
          >
            Apply Discount Code
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="text"
              id="discountCode"
              className="w-full p-2 text-sm border-none focus:outline-none"
              placeholder="Enter code here"
            />
            <button className="px-4 py-2 bgColor text-white text-sm rounded-lg">
              Apply
            </button>
          </div>
        </div>

        {/* Navigation Button */}
        <div className="mt-6">
          <button
            onClick={handleProceed}
            className="bgColor w-full text-white cursor-pointer p-3 text-sm rounded-lg"
          >
            {nextStep === "payment"
              ? "Proceed to Payment"
              : "Proceed to Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
