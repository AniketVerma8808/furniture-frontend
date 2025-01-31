import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaWhatsapp, FaPhoneAlt, FaCommentDots } from "react-icons/fa";
import { FaShippingFast, FaExchangeAlt, FaLock, FaHeadphonesAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            {/* Newsletter Section */}
            <div className="py-6 border-b border-gray-700">
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
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-6 py-8 border-gray-700 text-base">
                <div>
                    <h3 className="font-semibold mb-2 text-base">QUICK LINKS</h3>
                    <ul>
                        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                        <li><Link to="/stores" className="hover:text-gray-400">Royaloak Stores</Link></li>
                        <li><Link to="/media" className="hover:text-gray-400">Media</Link></li>
                        <li><Link to="/feedback" className="hover:text-gray-400">Share Feedback</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-base">SERVICES</h3>
                    <ul>
                        <li><Link to="/services/dismantling" className="hover:text-gray-400">Dismantling Service</Link></li>
                        <li><Link to="/services/re-installation" className="hover:text-gray-400">Re-Installation</Link></li>
                        <li><Link to="/services/loose-fitting" className="hover:text-gray-400">Loose Fitting</Link></li>
                        <li><Link to="/complaints" className="hover:text-gray-400">Complaints</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-base">CORPORATE INFO</h3>
                    <ul>
                        <li><Link to="/blogs" className="hover:text-gray-400">Blogs</Link></li>
                        <li><Link to="/franchise" className="hover:text-gray-400">Become A Franchise</Link></li>
                        <li><Link to="/rent-property" className="hover:text-gray-400">Rent Your Property</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-base">ROYALOAK</h3>
                    <ul>
                        <li><Link to="/our-story" className="hover:text-gray-400">Our Story</Link></li>
                        <li><Link to="/sell-with-us" className="hover:text-gray-400">Sell With Royaloak</Link></li>
                        <li><Link to="/careers" className="hover:text-gray-400">Career</Link></li>
                        <li><Link to="/contact-us" className="hover:text-gray-400">Contact Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-base">MY ACCOUNT</h3>
                    <ul>
                        <li><Link to="/cart" className="hover:text-gray-400">My Cart</Link></li>
                        <li><Link to="/orders" className="hover:text-gray-400">My Orders</Link></li>
                        <li><Link to="/track-order" className="hover:text-gray-400">Track Order</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-base uppercase">Social Accounts</h3>
                    <div className="flex gap-4 mb-2">
                        <Link to="#" className="text-xl"><FaFacebookF /></Link>
                        <Link to="#" className="text-xl"><FaInstagram /></Link>
                        <Link to="#" className="text-xl"><FaYoutube /></Link>
                        <Link to="#" className="text-xl"><FaTwitter /></Link>
                        <Link to="#" className="text-xl"><FaLinkedin /></Link>
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
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between py-4 text-gray-400 text-xs sm:text-sm md:text-base">
                <p>© 2025, Royaloak Inc. Pvt. Ltd. | All rights reserved.</p>
                <p>
                    <Link to="/privacy-policy" className="mx-2 hover:text-gray-400">Privacy Policy</Link> |
                    <Link to="/terms-and-conditions" className="mx-2 hover:text-gray-400">Terms & Conditions</Link> |
                    <Link to="/policies" className="mx-2 hover:text-gray-400">Policies</Link>
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
