import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../components/loader/Loader";
import { FaAddressBook, FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import {
  profileUpdateService,
  SubscribeService,
} from "../services/api.service";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userId: "",
  });

  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Profile Update
  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await profileUpdateService(profile);
      console.log("API Response Data:", response.data);
      // dispatch(updateProfile(profile));
      dispatch(updateProfile(response.data.updatedUser));
      console.log("Updated Profile Data:", profile);
      toast.success(response.data.message || "Profile updated successfully!");
      setIsEditable(false);
    } catch (error) {
      console.error("Error Response:", error);
      toast.error(error.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Redux User Data Updated:", user);
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

  // Toggle Subscribe
  const toggleHandler = async () => {
    try {
      const response = await SubscribeService();
      setIsSubscribed((prev) => !prev);
      toast.success(
        response.data.message ||
          (isSubscribed
            ? "Unsubscribed successfully!"
            : "Subscribed successfully!")
      );
    } catch (error) {
      console.error("Error Response:", error);
      toast.error("Subscription update failed!");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex justify-between items-center">
        <h2 className="text-base md:text-[22px] mb-4">My Profile</h2>
        <button
          type="button"
          onClick={() => {
            if (isEditable) handleUpdate();
            else setIsEditable(true);
          }}
          className="bgColor text-white text-[12px] p-1 rounded-sm px-3"
          disabled={loading}
          style={{ height: "40px", width: "80px" }}
        >
          {loading ? (
            <Loader size={5} color="white" />
          ) : isEditable ? (
            "Save"
          ) : (
            "Update"
          )}
        </button>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["firstName", "lastName"].map((field, index) => (
          <div key={index}>
            <label className="block text-gray-400 text-[13px] mb-1">
              {field === "firstName" ? "First Name:" : "Last Name:"}
            </label>
            <div className="relative">
              <input
                type="text"
                name={field}
                value={profile[field]}
                onChange={handleChange}
                className="w-full border-b text-base border-gray-300 pl-10 pr-2 py-2 disabled:cursor-not-allowed"
                disabled={!isEditable}
              />
              <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Email, Phone, User ID */}
      <div className="grid grid-cols-1 gap-4 mt-4">
        {[
          {
            label: "Email:",
            name: "email",
            Icon: MdOutlineMailOutline,
            type: "email",
          },
          { label: "Phone:", name: "phone", Icon: FaPhoneAlt, type: "text" },
          {
            label: "User ID:",
            name: "userId",
            Icon: FaAddressBook,
            type: "text",
            disabled: true,
          },
        ].map(({ label, name, Icon, type, disabled = false }, index) => (
          <div key={index}>
            <label className="block text-gray-400 text-[13px] mb-1">
              {label}
            </label>
            <div className="relative">
              <input
                type={type}
                name={name}
                value={profile[name]}
                onChange={handleChange}
                className="w-full border-b text-base border-gray-300 pl-10 pr-2 py-2 disabled:cursor-not-allowed"
                disabled={!isEditable || disabled}
              />
              <Icon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Subscription Toggle */}
      <div className="mt-12">
        <h2 className="text-base md:text-[22px] mb-4">Subscribe</h2>
      </div>
      <div className="flex items-center space-x-4 mt-6">
        <button
          onClick={toggleHandler}
          className={`w-12 h-6 rounded-full flex items-center p-1 transition-all ${
            isSubscribed
              ? "bg-green-500 justify-end"
              : "bg-gray-300 justify-start"
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform ${
              isSubscribed ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
        <span className="text-[14px]">
          {isSubscribed ? "Subscribed" : "Unsubscribed"}
        </span>
      </div>
    </div>
  );
};

export default Profile;
