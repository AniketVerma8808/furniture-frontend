import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

export default function YourOrder() {
  const { getPendingOrders, markOrderAsDelivered, orders } =
    useContext(ProductContext);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  console.log(orders);

  useEffect(() => {
    const orders = getPendingOrders();
    setPendingOrders(orders);
  }, [orders]);

  const handleMarkAsDelivered = (orderId) => {
    markOrderAsDelivered(orderId);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  const handleOrderClick = (orderId) => {
    // navigate(`/order_details/${orderId}`);
  };

  return (
    <>
      <div className="flex justify-center items-center h-48">
        <h1>Pending Orders</h1>
        {pendingOrders.length === 0 ? (
          <p>No pending orders</p>
        ) : (
          <ul>
            {pendingOrders.map((order) => (
              <li key={order.orderId}>
                <div>
                  <p>Order ID: {order.orderId}</p>
                  <p>Status: {order.status}</p>
                  <button onClick={() => handleMarkAsDelivered(order.orderId)}>
                    Mark as Delivered
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <section className="bg-white py-8 antialiased dummy:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl text-center font-semibold text-gray-900 dummy:text-white sm:text-2xl">
            Your Orders
          </h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {orders &&
                  orders.map((item) => (
                    <div
                      key={item.orderId}
                      onClick={() => handleOrderClick(item.orderId)}
                      className="cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-sm dummy:border-gray-700 dummy:bg-gray-800 md:p-6 hover:shadow-lg"
                    >
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                          <div className="text-end md:order-4 md:w-32">
                            <p className="text-base font-bold text-gray-900 dummy:text-white">
                              Price: ₹{item.totalPrice}
                            </p>
                            <p className="text-sm font-medium text-gray-600 dummy:text-gray-400">
                              Payment: {item.paymentMethod}
                            </p>
                          </div>
                        </div>
                        <div>
                          <img
                            src={item.cart[0].images[0]}
                            alt={item.cart[0].title}
                            className="w-32"
                          />
                        </div>
                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <h1 className="text-base font-medium text-gray-900 dummy:text-white">
                            {item.cart[0].title}
                          </h1>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
