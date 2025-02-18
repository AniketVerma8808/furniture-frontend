import React from "react";
import OrderSummary from "../components/orders/OrderSummary";
import Address from "./Address";

const CheckoutAddress = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <Address />
          </div>
          <div className="lg:col-span-4">
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutAddress;
