import React, { useState } from "react";
import OrderSummary from "../components/orders/OrderSummary";

const Address = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <div className=" min-h-screen">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Section */}
            <div className="lg:col-span-8 bg-white p-6 rounded-lg  border border-gray-200 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
                {/* Delivery Address Section */}
                <div className="lg:col-span-8">
                  <div className="border border-gray-300 rounded-lg p-4 h-36">
                    <h3 className="text-xl font-semibold mb-2">
                      Delivery Address
                    </h3>
                    <p className="text-sm text-gray-600">
                      Please enter your shipping details in the form below.
                    </p>
                  </div>
                </div>
                {/* Add Address Section */}
                <div className="lg:col-span-4">
                  <div className="border border-gray-300 rounded-lg p-4 h-36">
                    <h3>Add Address</h3>
                  </div>
                </div>
              </div>

              {/* Address Form */}
              <div className="border border-gray-300 rounded-lg p-6 mt-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Delivery Address
                </h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    {/* First Name */}
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder=" first name"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder=" last name"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="mb-4">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="company "
                    />
                  </div>

                  {/* Street Address */}
                  <div className="mb-4">
                    <label
                      htmlFor="streetAddress"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="streetAddress"
                      name="streetAddress"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder=" address"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
                    {/* City */}
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder=" city"
                      />
                    </div>

                    {/* Pincode */}
                    <div>
                      <label
                        htmlFor="pincode"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Pincode
                      </label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder=" pincode"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label
                        htmlFor="mobileNumber"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder=" mobile number"
                      />
                    </div>
                  </div>
                </form>
              </div>

              {/* GSTIN Section */}
              <div className="border border-gray-300 rounded-lg p-6 mt-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="gstinToggle"
                    name="gstinToggle"
                    className="mr-2"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <label
                    htmlFor="gstinToggle"
                    className="text-lg font-semibold"
                  >
                    GSTIN Details
                  </label>
                </div>

                {isChecked && (
                  <div className="mt-4">
                    <div className="mb-4">
                      <label
                        htmlFor="gstin"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        GSTIN Number
                      </label>
                      <input
                        type="text"
                        id="gstin"
                        name="gstin"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Enter GSTIN Number"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="company "
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-4">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
