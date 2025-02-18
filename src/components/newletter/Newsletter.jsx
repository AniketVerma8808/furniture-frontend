import React, { useState } from "react";
import { toast } from "react-toastify";
import { NewsletterService } from "../../services/api.service";
import Loader from "../loader/Loader";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  // Handle input change
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    setLoading(true);

    try {
      await NewsletterService({ email });
      toast.success("Successfully subscribed to the newsletter!");
      setEmail("");
    } catch (error) {
      console.error("Error subscribing to the newsletter:", error);
      toast.error(error.response.data?.message || "Internal Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="py-6 border-b border-gray-700">
        <div className="container px-4 md:px-8 mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-start md:text-center sm:text-left p-2">
            <h2 className="text-[16px] md:text-[22px] font-normal ">
              SUBSCRIBE TO NEWSLETTER
            </h2>
            <p className="text-[12px] md:text-[14px]">
              Be the first to know about new arrivals, sales & promos by
              submitting your email!
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center justify-center gap-4 relative">
            <input
              type="email"
              placeholder="Please enter your email"
              value={email}
              onChange={handleInputChange}
              className="p-3 w-72 sm:w-96 bg-white text-black rounded-lg text-[12px]"
            />
            <button
              onClick={handleSubmit}
              className="bg-black text-white text-center text-[13px] px-4 py-2 rounded-lg sm:rounded-r absolute right-2 sm:w-auto min-w-[120px] h-[35px] flex justify-center items-center"
              disabled={loading}
            >
              {loading ? <Loader size={5} color="white" /> : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
