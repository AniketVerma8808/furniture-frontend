import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { toast } from "react-toastify";

const Address = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    streetAddress: "",
    city: "",
    pincode: "",
    phone: "",
    gstin: "",
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{5,6}$/.test(formData.pincode)) {
      toast.error("Invalid zip code. Please enter a valid 5-6 digit zip code.");
      return;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error(" Please enter a valid phone Number 10 digit");
      return;
    }

    // console.log("Address Submitted:", formData);
    toast.success("Address Submitted:");
  };

  return (
    <div>
      <div className=" min-h-screen pb-12">
        <div className="container mx-auto max-w-7xl">
          <div className="">
            <div className=" bg-white p-6 rounded-lg  border border-gray-200 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
                {/* Delivery Address Section */}
                <div className="lg:col-span-8">
                  <div className="border border-gray-300 rounded-lg p-4 h-36">
                    <h3 className="text-base md:text-xl  mb-2">
                      Delivery Address
                    </h3>
                    <p className="text-sm text-gray-600">
                      Please enter your shipping details in the form below.
                    </p>
                  </div>
                </div>
                {/* Add Address Section */}
                <div className="lg:col-span-4">
                  <div className="flex flex-col items-center   justify-start md:justify-center gap-6 border border-gray-300 rounded-lg p-4 h-36">
                    <h3 className="text-base md:text-xl  mb-2">Add Address</h3>
                    <button
                      onClick={handleSubmit}
                      className="p-2 bgColor text-white rounded-full"
                    >
                      <HiPlus className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Address Form */}
              <div className="border border-gray-300 rounded-lg p-6 mt-6">
                <h2 className="text-base md:text-xl  mb-4">Delivery Address</h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    {/* First Name */}
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm  text-gray-700 mb-2"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder=" first name"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm  text-gray-700 mb-2"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder=" last name"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="mb-4">
                    <label
                      htmlFor="company"
                      className="block text-sm  text-gray-700 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="company "
                    />
                  </div>

                  {/* Street Address */}
                  <div className="mb-4">
                    <label
                      htmlFor="streetAddress"
                      className="block text-sm  text-gray-700 mb-2"
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="streetAddress"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder=" address"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
                    {/* City */}
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm  text-gray-700 mb-2"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder=" city"
                      />
                    </div>

                    {/* Pincode */}
                    <div>
                      <label
                        htmlFor="pincode"
                        className="block text-sm  text-gray-700 mb-2"
                      >
                        Pincode
                      </label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder=" pincode"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm  text-gray-700 mb-2"
                      >
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
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
                  <label htmlFor="gstinToggle" className="text-base ">
                    GSTIN Details
                  </label>
                </div>

                {isChecked && (
                  <div className="mt-4">
                    <div className="mb-4">
                      <label
                        htmlFor="gstin"
                        className="block text-sm  text-gray-700 mb-2"
                      >
                        GSTIN Number
                      </label>
                      <input
                        type="text"
                        id="gstin"
                        name="gstin"
                        value={formData.gstin}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="Enter GSTIN Number"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="company"
                        className="block text-sm  text-gray-700 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="company "
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
