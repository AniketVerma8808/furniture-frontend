import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cart from "./Cart";
import Address from "./Address";
import CheckoutAddress from "./CheckoutAddress";

function Checkout() {
  const [step, setStep] = useState("cart");
  const location = useLocation();

  useEffect(() => {
    if (location.state?.step) {
      setStep(location.state.step);
    }
  }, [location.state]);

  return (
    <>
      {/* Stepper */}
      <div className="bg-white  ">
        <div className="flex items-center justify-center  pt-12">
          {["Cart", "Address", "Payment"].map((label, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${
                  step === label.toLowerCase() ? "bgColor" : "bg-gray-300"
                }`}
                onClick={() => setStep(label.toLowerCase())}
              >
                {index + 1}
              </div>
              {index < 2 && <div className="w-20 h-1 bg-gray-300 mx-2"></div>}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-6">
          {/* Content Area */}
          <div className="w-full rounded-lg">
            {step === "cart" && <Cart />}
            {step === "address" && (
              <div className="pt-12">
                <CheckoutAddress />
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
      </div>
    </>
  );
}

export default Checkout;
