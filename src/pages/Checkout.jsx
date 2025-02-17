import { useState } from "react";
import Cart from "./Cart";
import Checkout2 from "./Checkout2";
import Address from "./Address";

function Checkout() {
  const [step, setStep] = useState("cart");

  return (
    <div className="flex flex-col items-center justify-between gap-6 py-12">
      {/* Sidebar */}
      <div className="flex flex-row gap-4 w-full md:w-1/4">
        <button
          className={`p-3 text-center rounded-lg ${
            step === "cart" ? "bgColor text-white" : "bg-gray-300"
          }`}
          onClick={() => setStep("cart")}
        >
          <div>
            {/* <p>1</p> */}
            <span> Cart</span>
          </div>
        </button>
        <button
          className={`p-3 text-center rounded-lg ${
            step === "address" ? "bgColor text-white" : "bg-gray-300"
          }`}
          onClick={() => setStep("address")}
        >
          Address
        </button>
        <button
          className={`p-3 text-center rounded-lg ${
            step === "payment" ? "bgColor text-white" : "bg-gray-300"
          }`}
          onClick={() => setStep("payment")}
        >
          Payment
        </button>
      </div>

      {/* Content Area */}
      <div className="w-full  p-6  rounded-lg">
        {step === "cart" && (
          <div>
            <Cart />
          </div>
        )}
        {step === "address" && (
          <div>
           
            <Address />
          </div>
        )}
        {step === "payment" && (
          <div>
            <h2 className="text-2xl mb-4">Payment Information</h2>
            {/* Payment form content goes here */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
