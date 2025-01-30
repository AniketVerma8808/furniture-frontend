import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaWhatsapp, FaPhoneAlt, FaCommentDots } from "react-icons/fa";
import { FaShippingFast, FaExchangeAlt, FaLock, FaHeadphonesAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            {/* Newsletter Section */}
            <div className=" py-6 border-b border-gray-700">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <div className="text-center sm:text-left p-2">
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">SUBSCRIBE TO NEWSLETTER</h2>
                        <p className="text-base">Be the first to know about new arrivals, sales & promos by submitting your email!</p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center justify-center gap-4 relative">
                        <input type="text" placeholder="Please enter your email" className="p-3 w-72 sm:w-96 bg-white text-black rounded-lg" />
                        <button className="bg-black text-white px-4 py-2 rounded-lg sm:rounded-r absolute right-2">Subscribe</button>
                    </div>
                </div>
            </div>


            {/* Links Section */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-6 px-10 py-8 border-gray-700 text-base">
                <div>
                    <h3 className="font-semibold mb-2 text-base">QUICK LINKS</h3>
                    <ul>
                        <li>Home</li>
                        <li>Royaloak Stores</li>
                        <li>Media</li>
                        <li>Share Feedback</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-base">SERVICES</h3>
                    <ul>
                        <li>Dismantling Service</li>
                        <li>Re-Installation</li>
                        <li>Loose Fitting</li>
                        <li>Complaints</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-base">CORPORATE INFO</h3>
                    <ul>
                        <li>Blogs</li>
                        <li>Become A Franchise</li>
                        <li>Rent Your Property</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-base">ROYALOAK</h3>
                    <ul>
                        <li>Our Story</li>
                        <li>Sell With Royaloak</li>
                        <li>Career</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-base">MY ACCOUNT</h3>
                    <ul>
                        <li>My Cart</li>
                        <li>My Orders</li>
                        <li>Track Order</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-base uppercase">Social Accounts</h3>
                    <div className="flex gap-4 mb-2">
                        <FaFacebookF className="text-xl" />
                        <FaInstagram className="text-xl" />
                        <FaYoutube className="text-xl" />
                        <FaTwitter className="text-xl" />
                        <FaLinkedin className="text-xl" />
                    </div>
                    <h3 className="font-semibold mb-2 text-base uppercase">Pay Using</h3>
                    {/* Add payment icons here */}
                </div>
            </div>

            {/* Benefits Section */}
            <div className="max-w-7xl mx-auto px-10 py-6 rounded-lg shadow-lg bg-[#363434] text-center md:text-left">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="flex flex-col items-center gap-2 text-base">
                        <FaShippingFast className="text-xl" />
                        <div>
                            <h4 className="font-semibold">FREE DELIVERY</h4>
                            <p>When ordering from Rs. 2500.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-base">
                        <FaExchangeAlt className="text-xl" />
                        <div>
                            <h4 className="font-semibold">EASY RETURNS</h4>
                            <p>If goods have problems</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-base">
                        <FaLock className="text-xl" />
                        <div>
                            <h4 className="font-semibold">SECURE PAYMENT</h4>
                            <p>100% secure payment</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-base">
                        <FaHeadphonesAlt className="text-xl" />
                        <div>
                            <h4 className="font-semibold">9 AM TO 6:30 PM | 7 DAYS</h4>
                            <p>Dedicated support</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Bottom Bar */}
            <div className="flex flex-col sm:flex-row justify-between py-4 text-gray-400 text-xs sm:text-sm md:text-base">
                <p>© 2025, Royaloak Inc. Pvt. Ltd. | All rights reserved.</p>
                <p>
                    <a href="#" className="mx-2">Privacy Policy</a> |
                    <a href="#" className="mx-2">Terms & Conditions</a> |
                    <a href="#" className="mx-2">Policies</a>
                </p>
            </div>

            {/* Floating Buttons */}
            {/* Uncomment if needed */}
            {/* <div className="fixed bottom-4 right-4 flex flex-col gap-3">
                    <button className="bg-green-500 p-3 rounded-full text-white"><FaWhatsapp size={20} /></button>
                    <button className="bg-orange-500 p-3 rounded-full text-white"><FaPhoneAlt size={20} /></button>
                    <button className="bg-gray-500 p-3 rounded-full text-white"><FaCommentDots size={20} /></button>
                </div> */}
        </footer>
    );
};

export default Footer;
