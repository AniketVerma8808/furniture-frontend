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
  // console.log(user, "from store");

  const [profile, setProfile] = useState({
    name: "",
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
      // console.log(response, "response from updated profile");
      dispatch(updateProfile(response.data.data));
      toast.success(response.data.message || "Profile updated successfully!");
      setIsEditable(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        userId: user._id || user.id || "",
      });
      setIsSubscribed(user.subscribe || false);
    }
  }, [user]);

  // Toggle Subscribe
  const toggleHandler = async () => {
    try {
      const response = await SubscribeService();
      const newSubscriptionStatus = !isSubscribed;
      setIsSubscribed(newSubscriptionStatus);
      dispatch(updateProfile({ subscribe: newSubscriptionStatus }));
      toast.success(
        response.data.message ||
          (newSubscriptionStatus
            ? "Subscribed successfully!"
            : "Unsubscribed successfully!")
      );
    } catch (error) {
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

      {/* Name Field */}
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-gray-400 text-[13px] mb-1">
            Full Name:
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full border-b text-base border-gray-300 pl-10 pr-2 py-2 disabled:cursor-not-allowed"
              disabled={!isEditable}
            />
            <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          </div>
        </div>
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
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isSubscribed}
            onChange={toggleHandler}
            className="sr-only peer"
          />
          <div
            className={`w-12 h-6 rounded-full transition-colors 
        ${isSubscribed ? "bgColor" : "bg-gray-300"} 
        peer after:content-[''] after:absolute after:w-5 after:h-5 
        after:bg-white after:rounded-full after:transition-all 
        after:left-0.5 after:top-0.5 peer-checked:after:translate-x-6`}
          ></div>
        </label>
        <span className="text-[14px]">
          {isSubscribed ? "Subscribed" : "Unsubscribed"}
        </span>
      </div>
    </div>
  );
};

export default Profile;
