import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import CheckoutAddress from "./CheckoutAddress";
import Payment from "./Payment";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = useState(
    localStorage.getItem("checkoutStep") || "cart"
  );
  // Step update based on navigation state
  useEffect(() => {
    if (location.state?.step) {
      setStep(location.state.step);
      localStorage.setItem("checkoutStep", location.state.step);
    }
  }, [location.state]);

  useEffect(() => {
    localStorage.setItem("checkoutStep", step);
  }, [step]);

  // Function to navigate to a specific step
  const handleStepChange = (newStep) => {
    setStep(newStep);
    navigate("/checkout", { state: { step: newStep } });
  };

  return (
    <div className="bg-white">
      {/* Stepper */}
      <div className="flex items-center justify-center pt-12">
        {["Cart", "Address", "Payment"].map((label, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center">
              <div className="flex  items-center">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-white cursor-pointer ${
                    step === label.toLowerCase() ? "bgColor" : "bg-gray-300"
                  }`}
                  onClick={() => handleStepChange(label.toLowerCase())}
                >
                  {index + 1}
                </div>
              </div>

              {index < 2 && <div className="w-20 h-1 bg-gray-300 mx-2"></div>}
            </div>
            <span className="mt-2 text-sm text-gray-600">{label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between px-2 gap-6">
        {/* Content Area */}
        <div className="w-full rounded-lg px-6 py-4">
          {step === "cart" && <Cart />}
          {step === "address" && (
            <div className="container mx-auto max-w-7xl pt-12">
              <CheckoutAddress navigate={navigate} />
            </div>
          )}
          {step === "payment" && (
            <div className="container mx-auto max-w-7xl pt-12">
              <Payment />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
