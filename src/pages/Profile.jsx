import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../components/loader/Loader";
import { FaAddressBook, FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  profileUpdateService,
  SubscribeService,
} from "../services/api.service";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("Redux User Data:", user);

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userId: "",
  });
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOn, setIsOn] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  useEffect(() => {
    if (user) {
      const nameParts = user.name ? user.name.split(" ") : ["", ""];
      setProfile({
        firstName: nameParts[0] || "",
        lastName: nameParts.slice(1).join(" ") || "",
        email: user.email || "",
        phone: user.phone || "",
        userId: user.id || "", 
      });
    }
  }, [user]);

  // Handle Profile Update
  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await profileUpdateService(profile);
      toast.success("Profile updated successfully!");
      setIsEditable(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  // Toggle Subscribe
  const toggleHandler = async () => {
    try {
      const response = await SubscribeService();
      setIsOn((prev) => !prev);
      toast.success(
        response.data.message ||
          (isOn ? "Unsubscribed successfully!" : "Subscribed successfully!")
      );
    } catch (error) {
      toast.error("Subscription update failed!");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      {loading && <Loader />}
      <div className="flex justify-between items-center">
        <h2 className="text-base md:text-[22px] mb-4">My Profile</h2>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => {
              if (isEditable) {
                handleUpdate();
              }
              setIsEditable(!isEditable);
            }}
            className="w-full bgColor text-white text-[12px] p-1 rounded-sm px-3 flex justify-center items-center"
          >
            {isEditable ? "Save" : "Update"}
          </button>
        </div>
      </div>
      {/* Name Fields */}
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
      {/* Email, Phone, User ID */}
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
              className="w-full border-b text-base border-gray-300 pl-10 pr-2 py-2 focus:outline-none"
              disabled
            />
            <FaAddressBook className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>
      </div>
      {/* Subscription Toggle */}
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
        <span className="text-[14px]">
          {isOn ? "Subscribe" : "Unsubscribe"}
        </span>
      </div>
    </div>
  );
};

export default Profile;
