import { FaUser, FaHeart, FaShoppingCart, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bgBlack text-white">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Bar */}
                <div className="flex justify-between items-center px-6 py-2 text-sm border-b border-gray-700">
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt />
                        <span>Deliver to - <span className="text-orange-400">560001</span></span>
                        <button className="text-orange-400 text-xs">✎</button>
                    </div>
                    <div className="hidden md:flex gap-6 text-gray-300 text-xs">
                        <Link to="#">Track Order</Link>
                        <Link to="#">Royaloak Stores</Link>
                        <Link to="#">Franchise Enquiry</Link>
                        <Link to="#">Rent your property</Link>
                        <Link to="#">Customer Support</Link>
                        <Link to="#">Careers</Link>
                    </div>
                </div>

                {/* Main Navbar */}
                <div className="flex justify-between items-center mx-auto px-6 py-4 flex-wrap">

                    <div>

                        <h1 className="text-3xl font-bold flex items-start gap-2 mx-auto">
                            <span className="text-orange-400">ROYAL</span>OAK
                        </h1>
                    </div>
                    <div className="flex gap-8 text-lg">
                        <div className="flex flex-col items-center">
                            <FaUser />
                            <span className="text-xs">LOGIN</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaHeart />
                            <span className="text-xs">WISHLIST</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaShoppingCart />
                            <span className="text-xs">CART</span>
                        </div>
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <div className="md:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <button className="text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Categories Menu (Mobile) */}
                <nav className={`${isMenuOpen ? "block" : "hidden"} md:block  px-6 py-2 border-t border-gray-700`}>
                    <div className="mx-auto">
                        <ul className="flex flex-col md:flex-row justify-center gap-4 text-sm text-gray-300">
                            <li className="flex items-center gap-1">
                                <Link to="#">INTERNATIONAL COLLECTION</Link> <IoIosArrowDown />
                            </li>

                            <li className="flex items-center gap-1">
                                <Link to="#">DINING</Link> <IoIosArrowDown />
                            </li>
                            <li className="flex items-center gap-1">
                                <Link to="#">STUDY & OFFICE</Link> <IoIosArrowDown />
                            </li>
                            <li className="flex items-center gap-1">
                                <Link to="#">OUTDOOR</Link> <IoIosArrowDown />
                            </li>
                            <li className="flex items-center gap-1">
                                <Link to="#">DECOR</Link> <IoIosArrowDown />
                            </li>
                            <li className="flex items-center gap-1">
                                <Link to="#">FURNISHINGS</Link> <IoIosArrowDown />
                            </li>
                            <li><Link to="#">SMART STORAGE</Link></li>
                            <li><Link to="#">NEW ARRIVALS</Link></li>
                            <li><Link to="#">BULK ORDERS</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
