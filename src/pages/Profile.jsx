import React, { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../components/loader/Loader";
import { FaAddressBook, FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Profile = () => {
  // Initial values
  const initialState = {
    firstName: "Aniket",
    lastName: "Verma",
    email: "aniket@example.com",
    phone: "+91 9876543210",
    userId: "USR123456",
  };

  // State for profile data
  const [profile, setProfile] = useState(initialState);
  const [isEditable, setIsEditable] = useState(false);
  const [isOn, setIsOn] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  // Handle the update
  const handleUpdate = () => {
    toast.success("Profile updated successfully!");
    setIsEditable(false);
  };

  const toggleHandler = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="p-6 bg-white  rounded-lg border border-gray-200">
      <div className="flex justify-between items-center">
        <h2 className="text-base md:text-[22px]  mb-4">My Profile</h2>
        <div className=" flex justify-end">
          <button
            type="button"
            onClick={() => {
              if (isEditable) {
                handleUpdate();
              }
              setIsEditable(!isEditable);
            }}
            className="w-full bgColor text-white text-[12px]  p-1 rounded-sm px-3 flex justify-center items-center"
          >
            {isEditable ? "Update" : "update"}
          </button>
        </div>
      </div>

      {/* Name & Last Name in One Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-400 text-[13px] mb-1">
            First Name:
          </label>
          <div className="relative">
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleChange}
              className="w-full border-b text-base border-gray-300 pl-10 pr-2 py-2"
              disabled={!isEditable}
            />
            <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>

        <div>
          <label className="block text-gray-400 text-[13px] mb-1">
            Last Name:
          </label>
          <div className="relative">
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleChange}
              className="w-full border-b text-base border-gray-300 pl-10 pr-2 py-2"
              disabled={!isEditable}
            />
            <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>
      </div>

      {/* Email, Phone, User ID in Responsive Layout */}
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div>
          <label className="block text-gray-400 text-[13px] mb-1">Email:</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full border-b text-base border-gray-300 pl-10 pr-2 py-2"
              disabled={!isEditable}
            />
            <MdOutlineMailOutline className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>

        <div>
          <label className="block text-gray-400 text-[13px] mb-1">Phone:</label>
          <div className="relative">
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full border-b text-base border-gray-300 pl-10 pr-2 py-2"
              disabled={!isEditable}
            />
            <FaPhoneAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>

        <div>
          <label className="block text-gray-400 text-[13px] mb-1">
            User ID:
          </label>
          <div className="relative">
            <input
              type="text"
              value={profile.userId}
              className="w-full border-b text-base  border-gray-300 pl-10 pr-2 py-2 focus:outline-none"
              disabled
            />
            <FaAddressBook className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-base md:text-[22px] mb-4">Subscribe</h2>
      </div>
      <div className="flex items-center space-x-4 mt-6">
        <button
          onClick={toggleHandler}
          className={`w-12 h-6 rounded-full flex items-center ${
            isOn ? "bg-gray-300 justify-end" : "bg-gray-300 justify-start"
          } p-1 transition-all`}
        >
          <div
            className={`w-6 h-6 rounded-full bgColor shadow-md transform transition-transform ${
              isOn ? "translate-x-0" : "translate-x-0"
            }`}
          />
        </button>
        <span className="text-[14px]  ">
          {isOn ? "Subscribe" : "UnSubscribe"}
        </span>
      </div>
    </div>
  );
};

export default Profile;
