import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderSummary from "../components/orders/OrderSummary";
import razorpayImg from "../../public/razorpay.png";

const Payment = () => {
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [savedAddress, setSavedAddress] = useState(null);

  useEffect(() => {
    const storedAddress = localStorage.getItem("selectedAddress");
    if (storedAddress) {
      setSavedAddress(JSON.parse(storedAddress));
    }
  }, []);

  const handlePaymentSelection = (method) => {
    setSelectedPayment(method);
  };

  const handleProceedToPayment = () => {
    if (!selectedPayment) {
      alert("Please select a payment method");
      return;
    }
    if (selectedPayment === "razorpay") {
      navigate("/razorpay-payment");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Section */}
      <div className="lg:col-span-2 space-y-6">
        {/* Billing & Shipping Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-md border">
          {savedAddress ? (
            <>
              <div>
                <h3 className="text-lg font-semibold mb-2">Bill To</h3>
                <p className="text-gray-600">
                  {savedAddress.firstName} {savedAddress.lastName}
                </p>
                <p className="text-gray-600">{savedAddress.address}</p>
                <p className="text-gray-600">
                  {savedAddress.city} - {savedAddress.pincode}
                </p>
                <p className="text-gray-600">Phone: {savedAddress.phone}</p>
                {savedAddress.company && (
                  <p className="text-gray-600">
                    Company: {savedAddress.company}
                  </p>
                )}
                {savedAddress.gstNumber && (
                  <p className="text-gray-600">
                    GSTIN: {savedAddress.gstNumber}
                  </p>
                )}
                <button className="mt-2 px-3 py-1 bg-orange-500 text-white rounded">
                  Edit
                </button>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Ship To</h3>
                <p className="text-gray-600">
                  {savedAddress.firstName} {savedAddress.lastName}
                </p>
                <p className="text-gray-600">{savedAddress.address}</p>
                <p className="text-gray-600">
                  {savedAddress.city} - {savedAddress.pincode}
                </p>
                <p className="text-gray-600">Phone: {savedAddress.phone}</p>
              </div>
            </>
          ) : (
            <p className="text-gray-600">No saved address found.</p>
          )}
        </div>

        {/* Payment Method Selection */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[{ id: "razorpay", img: razorpayImg, label: "Razorpay" }].map(
            ({ id, img, label }) => (
              <label
                key={id}
                className={`flex items-center gap-3 border p-3 rounded-lg cursor-pointer hover:shadow-md transition ${
                  selectedPayment === id
                    ? "border border-gray-700 "
                    : "border-gray-300"
                }`}
                onClick={() => handlePaymentSelection(id)}
              >
                <input
                  type="radio"
                  name="payment"
                  value={id}
                  checked={selectedPayment === id}
                  readOnly
                  className="w-5 h-5 accent-black cursor-pointer"
                />
                <img src={img} alt={label} className="h-12" />
              </label>
            )
          )}
        </div>

        {/* Proceed to Payment Button */}
        {selectedPayment && (
          <button
            onClick={handleProceedToPayment}
            className="bgColor w-full text-white p-3 text-sm rounded-lg"
          >
            Proceed to Payment
          </button>
        )}
      </div>

      {/* Right Section - Order Summary */}
      <div className="lg:col-span-1">
        <OrderSummary />
      </div>
    </div>
  );
};

export default Payment;
