import React from "react";
import orderImg from "../../assets/image/review/review4.jpg";
// Sample Data for Cancelled Orders with Images
const cancelledOrders = [
  {
    id: 1,
    name: "Order #4321",
    date: "2025-02-08",
    status: "Cancelled",
    totalAmount: "$120.00",
       image: orderImg,
  },
  {
    id: 2,
    name: "Order #8765",
    date: "2025-02-09",
    status: "Cancelled",
    totalAmount: "$180.00",
    image: orderImg,
  },
  {
    id: 3,
    name: "Order #11121",
    date: "2025-02-15",
    status: "Cancelled",
    totalAmount: "$220.00",
      image: orderImg,
  },
];

const CancelledOrders = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <h3 className="text-xl  mb-4">Cancelled Orders</h3>

        {/* Orders List */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          {cancelledOrders.length === 0 ? (
            <p>No cancelled orders.</p>
          ) : (
            <div className="space-y-4">
              {cancelledOrders.map((order) => (
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
                      <h4 className="text-lg ">{order.name}</h4>
                      <span className="text-sm text-gray-500">
                        {order.date}
                      </span>
                    </div>
                    <div className="flex justify-between">
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

export default CancelledOrders;
