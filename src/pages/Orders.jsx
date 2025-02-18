import React, { useState } from "react";
import InProcessOrders from "../components/orders/InProcessOrders";
import CompletedOrders from "../components/orders/CompletedOrders";
import CancelledOrders from "../components/orders/CancelledOrders ";
import ReturnsAndRefunds from "../components/orders/ReturnsAndRefunds";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("inProcess");

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen py-4">
      <div className="container mx-auto max-w-7xl px-2 md:px-8">
        <h3 className="text-lg md:text-xl  mb-4">My Orders</h3>

        {/* Tabs */}
        <div className="mb-6 flex justify-between space-x-2 md:space-x-4 border-b-2 border-gray-200 text-[12px] md:text-base">
          <button
            className={`${
              activeTab === "inProcess" ? "border-b-2 border-black" : ""
            } py-2 px-2 md:px-4 text-gray-600 hover:text-gray-800`}
            onClick={() => switchTab("inProcess")}
          >
            In Process Orders
          </button>
          <button
            className={`${
              activeTab === "completed" ? "border-b-2 border-black" : ""
            } py-2 px-2 md:px-4 text-gray-600 hover:text-gray-800`}
            onClick={() => switchTab("completed")}
          >
            Completed Orders
          </button>
          <button
            className={`${
              activeTab === "cancelled" ? "border-b-2 border-black" : ""
            } py-2 px-2 md:px-4 text-gray-600 hover:text-gray-800`}
            onClick={() => switchTab("cancelled")}
          >
            Cancelled Orders
          </button>
          <button
            className={`${
              activeTab === "returnsRefunds" ? "border-b-2 border-black" : ""
            } py-2 px-2 md:px-4 text-gray-600 hover:text-gray-800`}
            onClick={() => switchTab("returnsRefunds")}
          >
            Returns & Refunds
          </button>
        </div>

        {/* Content for active tab */}
        <div>
          {activeTab === "inProcess" && <InProcessOrders />}
          {activeTab === "completed" && <CompletedOrders />}
          {activeTab === "cancelled" && <CancelledOrders />}
          {activeTab === "returnsRefunds" && <ReturnsAndRefunds />}
        </div>
      </div>
    </div>
  );
};

export default Orders;
