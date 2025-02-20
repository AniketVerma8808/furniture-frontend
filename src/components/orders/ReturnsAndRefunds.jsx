import React from "react";
import orderImg from "../../assets/image/review/review4.jpg";
import { useNavigate } from "react-router-dom";
// Sample Data for Returns & Refunds
const returnsAndRefunds = [
  {
    id: 1,
    name: "Order #4456",
    date: "2025-02-05",
    status: "Refunded",
    totalAmount: "$130.00",
    image: orderImg,
  },
  {
    id: 2,
    name: "Order #7890",
    date: "2025-02-07",
    status: "Returned",
    totalAmount: "$250.00",
    image: orderImg,
  },
  {
    id: 3,
    name: "Order #11223",
    date: "2025-02-09",
    status: "Refunded",
    totalAmount: "$200.00",
    image: orderImg,
  },
];

const ReturnsAndRefunds = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <h3 className="text-[18px]  mb-4">Returns & Refunds</h3>

        {/* Orders List */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          {returnsAndRefunds.length === 0 ? (
            <p>No returns or refunds available.</p>
          ) : (
            <div className="space-y-4">
              {returnsAndRefunds.map((order) => (
                <div
                  key={order.id}
                  className="border-b border-gray-200 pb-4 flex items-center"
                >
                  {/* Order Image */}
                  <div className="w-24 h-24 mr-4">
                    <img
                      src={order.image}
                      alt={order.name}
                      className="w-full h-full object-cover rounded-lg cursor-pointer"
                      onClick={() => navigate(`/product/${order.id}`)}
                    />
                  </div>
                  {/* Order Details */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-[14px] ">{order.name}</h4>
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

export default ReturnsAndRefunds;
