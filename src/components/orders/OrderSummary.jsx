import React from "react";

const OrderSummary = () => {
  return (
    <div>
      <div className=" bg-white p-6 rounded-lg shadow-md border h-[500px] border-gray-200">
        <h3 className="text-xl  mb-4 text-gray-700">Order Summary</h3>

        {/* Subtotal */}
        <div className="flex justify-between text-lg mb-3 text-gray-600">
          <span>Subtotal</span>
          <span>₹5000</span>
        </div>

        {/* Paytm Giftcard */}
        <div className="flex justify-between text-lg mb-3 text-gray-600">
          <span>Paytm Giftcard</span>
          <span>₹0.00</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between text-lg mb-3 text-gray-600">
          <span>Shipping</span>
          <span className="text-gray-500">Not yet calculated</span>
        </div>

        {/* Tax */}
        <div className="flex justify-between text-lg mb-3 text-gray-600">
          <span>Tax</span>
          <span>₹2000</span>
        </div>

        {/* Total */}
        <div className="flex justify-between text-lg  border-t pt-3 mt-4 text-gray-800">
          <span>Total Orders</span>
          <span className="text-xl text-green-600">₹10000</span>
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
          </div>
          <div className="mt-4 flex justify-end">
            <button className="px-4 py-2 bgColor text-white text-sm  rounded-lg ">
              Apply
            </button>
          </div>
          <div className="mt-4 flex items-center">
            <button className="bgColor w-full text-white p-3 text-sm rounded-lg">Proceed To CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
