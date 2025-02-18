import React, { useState } from "react";
import orderImg from "../../assets/image/review/review4.jpg";
const completedOrders = [
  {
    id: 1,
    name: "Order #1234",
    date: "2025-02-10",
    status: "Completed",
    totalAmount: "$150.00",
    image: orderImg,
  },
  {
    id: 2,
    name: "Order #5678",
    date: "2025-02-12",
    status: "Completed",
    totalAmount: "$250.00",
    image: orderImg,
  },
  {
    id: 3,
    name: "Order #91011",
    date: "2025-02-14",
    status: "Completed",
    totalAmount: "$450.00",
    image: orderImg,
  },
];

const CompletedOrders = () => {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto max-w-7xl">
        <h3 className="text-[18px]  mb-4">Completed Orders</h3>

        {/* Orders List */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          {completedOrders.length === 0 ? (
            <p>No orders have been completed yet.</p>
          ) : (
            <div className="space-y-4">
              {completedOrders.map((order) => (
                <div
                  key={order.id}
                  className="border-b border-gray-200 pb-4 flex items-center"
                >
                  {/* Order Image */}
                  <div className="w-24 h-24 mr-4">
                    <img
                      src={order.image}
                      alt={order.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  {/* Order Details */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-[14px">{order.name}</h4>
                      <span className="text-sm text-gray-500">
                        {order.date}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">
                        Status: {order.status}
                      </span>
                      <span className="text-gray-700">
                        Total: {order.totalAmount}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompletedOrders;
