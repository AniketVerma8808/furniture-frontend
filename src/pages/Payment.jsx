import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderSummary from "../components/orders/OrderSummary";
import razorpayImg from "../../public/razorpay.png";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
import {
  CreateOrderService,
  CreateRazorpayOrderService,
  VerifyRazorpayPaymentService,
} from "../services/api.service";

const Payment = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isDelivering, setIsDelivering] = useState(false);

  useEffect(() => {
    const storedAddress = localStorage.getItem("selectedAddress");
    if (storedAddress) {
      setSelectedAddress(JSON.parse(storedAddress));
    }
  }, []);

  useEffect(() => {
    const subtotal = cartItems.reduce(
      (acc, { product, quantity }) => acc + product.price * quantity,
      0
    );
    const tax = 2000;
    setTotalAmount(subtotal + tax);
  }, [cartItems]);

  const handlePaymentSelection = (method) => {
    setSelectedPayment(method);
  };

  const handleProceedToPayment = () => {
    if (!selectedPayment) {
      toast.error("Please select a payment method");
      return;
    }
    if (selectedPayment === "razorpay") {
      initiateRazorpayPayment();
    }
  };

  const initiateRazorpayPayment = async () => {
    try {
      setIsDelivering(true);
      const razorpayOrderResponse = await CreateRazorpayOrderService({
        amount: totalAmount,
      });
      const order_id = razorpayOrderResponse.data.id;

      const options = {
        key: "rzp_test_GJHHBFZE4O8Ub6",
        amount: totalAmount,
        currency: "INR",
        order_id,
        handler: async (response) => {
          try {
            const paymentValidation = await VerifyRazorpayPaymentService(
              response
            );
            if (paymentValidation.data.success) {
              const payload = {
                products: cartItems.map((item) => ({
                  product: item.product._id,
                  quantity: item.quantity,
                })),
                order_id,
                totalAmount,
                address: selectedAddress,
                paymentType: "Online",
                transactionId: response.razorpay_payment_id,
              };

              await CreateOrderService(payload)
                .then(() => {
                  toast.success("Order placed successfully!");
                  navigate("/orders");
                })
                .catch(() => {
                  toast.error(
                    "Something went wrong, but your payment is secure!"
                  );
                });
            } else {
              toast.error("Payment verification failed");
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            toast.error("Error during payment verification.");
          }
        },
        prefill: {
          email: "Techxpert@example.com",
          contact: "9000000000",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Error during order process:", error);
      toast.error("Failed to place order.");
    } finally {
      setIsDelivering(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-md border">
          {selectedAddress ? (
            <>
              <div>
                <h3 className="text-lg font-semibold mb-2">Bill To</h3>
                <p className="text-gray-600">
                  {selectedAddress.firstName} {selectedAddress.lastName}
                </p>
                <p className="text-gray-600">{selectedAddress.address}</p>
                <p className="text-gray-600">
                  {selectedAddress.city} - {selectedAddress.pincode}
                </p>
                <p className="text-gray-600">Phone: {selectedAddress.phone}</p>
              </div>
            </>
          ) : (
            <p className="text-gray-600">No saved address found.</p>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <label
            className={`flex items-center gap-3 border p-3 rounded-lg cursor-pointer hover:shadow-md transition ${
              selectedPayment === "razorpay"
                ? "border-gray-700"
                : "border-gray-300"
            }`}
            onClick={() => handlePaymentSelection("razorpay")}
          >
            <input
              type="radio"
              name="payment"
              value="razorpay"
              checked={selectedPayment === "razorpay"}
              readOnly
              className="w-5 h-5 accent-black cursor-pointer"
            />
            <img src={razorpayImg} alt="Razorpay" className="h-12" />
          </label>
        </div>

        {selectedPayment && (
          <button
            onClick={handleProceedToPayment}
            className="bgColor w-full text-white p-3 text-sm rounded-lg"
          >
            Proceed to Payment
          </button>
        )}
      </div>
      <div className="lg:col-span-1">
        <OrderSummary setTotalAmount={setTotalAmount} />
      </div>
    </div>
  );
};

export default Payment;
