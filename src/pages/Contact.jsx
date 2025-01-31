import React, { useState } from 'react';
import { toast } from 'react-toastify';
import BannerImg from '../assets/image/banner/banner2.jpg';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !phone || !message) {
            toast.error('Please fill out all fields!');
            return;
        }

        // Simulate data submission
        console.log({ name, email, phone, message });
        toast.success('Message sent successfully!');
    };

    return (
        <div className="h-full py-4">
            {/* Top Section Banner */}
            <div className="h-48 w-full">
                <img
                    src={BannerImg}
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Contact Information and Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
                {/* Left Side: Address Information */}
                <div className=" p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-gray-800">Our Address</h2>
                    <p className="mt-2 text-sm text-gray-600">123, Main Street, City, Country</p>
                    <p className="mt-2 text-sm text-gray-600">Phone: +123 456 7890</p>
                    <p className="mt-2 text-sm text-gray-600">Email: contact@company.com</p>

                    {/* Google Map Embed */}
                    <div className="w-full mt-4 h-[50vh]">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Find Us on Map</h3>
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

                {/* Right Side: Contact Form */}
                <div className=" p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 mt-1 border borderColor rounded-lg "
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 mt-1 border borderColor rounded-lg "
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-2 mt-1 border  rounded-lg "
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 borderColor"
                                placeholder="Enter your message"
                                rows="4"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bgColor text-white rounded-lg mt-4"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
