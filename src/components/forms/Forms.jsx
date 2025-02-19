import React, { useState } from "react";
import { toast } from "react-toastify";
import { FormService } from "../../services/api.service";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";

const Forms = ({ title, image, issueType }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      toast.error("Please fill out all fields!");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    if (!validatePhone(phone)) {
      toast.error("Phone number must be exactly 10 digits!");
      return;
    }

    setLoading(true);

    const payload = {
      name,
      email,
      phone,
      issueType,
      issue: message,
    };

    // console.log("Payload being sent:", payload);
    try {
      await FormService(payload);
      toast.success("Help request submitted successfully");
      navigate("/");
    } catch (error) {
      console.error("Request error:", error);
      toast.error(error.response.data?.message || "Internal Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12">
      <h2 className="text-2xl  text-center text-gray-800">{title}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
        {/* Left Side: Image or Address */}
        <div className="hidden lg:block p-6 rounded-lg">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg rounded-lg"
            />
          ) : (
            <div>
              <h2 className="text-2xl  text-gray-800">Our Address</h2>
              <p className="mt-2 text-sm text-gray-600">
                123, Main Street, City, Country
              </p>
              <p className="mt-2 text-sm text-gray-600">Phone: +123 456 7890</p>
              <p className="mt-2 text-sm text-gray-600">
                Email: contact@company.com
              </p>

              {/* Google Map Embed */}
              <div className="w-full mt-4 h-[50vh]">
                <h3 className="text-xl  text-gray-800 mb-2">Find Us on Map</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.762527771376!2d80.97130937450004!3d26.783838665618674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfbcbafef436d%3A0x98435c83639e8c67!2sTechxpert%20Digital%20Services%20%7C%20website%20Developer%20Lucknow%20%7C%20App%20Developer%20Lucknow%20%7C%20Website!5e0!3m2!1sen!2sin!4v1738137918846!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg shadow-md"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Contact Form */}
        <div className="p-2 md:p-6 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label htmlFor="name" className="block text-sm  text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm  text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm  text-gray-700">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
                placeholder="Enter your message"
                rows="4"
              />
            </div>
            <button
              type="submit"
              className=" py-2 bgColor text-white rounded-lg mt-4"
              disabled={loading}
              style={{ height: "40px", width: "100%" }}
            >
              {loading ? <Loader size={5} color="white" /> : "Send Message"}
              {/* {loading ? "Submitting..." : "Send Message"} */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forms;
