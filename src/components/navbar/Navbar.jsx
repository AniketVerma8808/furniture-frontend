import { FaUser, FaHeart, FaShoppingCart, FaMapMarkerAlt, FaSearch, FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { FiLogOut } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from '../../redux/authSlice';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [isCategoryOpen, setIsCategoryOpen] = useState(null);
    const [isDropdownOpenUser, setIsDropdownOpenUser] = useState(false);
    const { cart, wishlist, isAuthenticated, logout, } = useContext(ProductContext);
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    console.log(user, "user in navbar");
    const navigate = useNavigate();
    const categories = [
        { name: "INTERNATIONAL COLLECTION", subcategories: null },
        {
            name: "DINING",
            subcategories: [
                { title: "SOFAS", items: ["Fabric Sofas", "Wooden Sofas", "Leather Sofas"] },
                { title: "RECLINERS", items: ["Fabric Recliners", "Leather Recliners", "Recliner Sofas"] },
                { title: "SEATINGS", items: ["Lounge Chairs", "Rocking Chairs"] },
                { title: "LIVING ROOM TABLES", items: ["Wooden Tables", "Glass Tables"] },
            ],
        },
        { name: "STUDY & OFFICE", subcategories: null },
        { name: "OUTDOOR", subcategories: null },
        { name: "DECOR", subcategories: null },
        { name: "FURNISHINGS", subcategories: null },
        { name: "SMART STORAGE", subcategories: null },
        { name: "NEW ARRIVALS", subcategories: null },
        { name: "BULK ORDERS", subcategories: null },
    ];

    const handleCategoryClick = (categoryName) => {
        setIsCategoryOpen((prev) => (prev === categoryName ? null : categoryName));
    };


    const handleDropdownToggle = () => {
        setIsDropdownOpenUser((prev) => !prev);
    };

    const handleLogout = () => {
        dispatch(logoutUser())
        // logout();
        toast.success("logout successful!")
        navigate("/")
        setIsDropdownOpenUser(false);
    };

    return (
        <header className="bgBlack text-white">
            <div className=" ">
                {/* Top Bar */}
                <div className="border-b border-gray-700">
                    <div className="max-w-7xl px-4 md:px-0 mx-auto flex justify-between items-center  py-2 text-sm flex-wrap">
                        {/* Location & Edit Button */}
                        <div className="flex items-center gap-2 flex-wrap mb-2 sm:mb-0">
                            <FaMapMarkerAlt />
                            <span>Deliver to - <span className="text-red-400">123456</span></span>
                            <button className="text-red-400 text-xs">✎</button>
                        </div>

                        {/* Links Section */}
                        <div className="flex gap-6 text-gray-300 text-xs flex-wrap justify-center sm:justify-end">
                            <Link to="#">Track Order</Link>
                            <Link to="#">Royaloak Stores</Link>
                            <Link to="#">Franchise Enquiry</Link>
                            <Link to="#">Rent your property</Link>
                            <Link to="#">Customer Support</Link>
                            <Link to="#">Careers</Link>
                        </div>
                    </div>
                </div>

                {/* Main Navbar */}
                <div className="max-w-7xl px-4 md:px-0 mx-auto flex justify-between items-center py-4 flex-wrap gap-4">
                    {/* Desktop view - Logo left, Links right */}
                    <div className="flex w-full justify-between items-center">
                        {/* Logo */}
                        {/* <Link to={'/'} className="flex justify-center md:justify-start w-full">
                            <img src="https://www.royaloakindia.com/media/logo/stores/1/logo-for-Website.png" alt="Royaloak Logo" className="h-8 sm:h-12 mx-auto md:mx-0" />
                           
                      </Link> */}
                        <Link to={'/'} className="flex">
                            <h1 className="text-3xl font-bold flex text-start items-start gap-2 mx-auto">
                                logo
                            </h1>
                        </Link>
                        {/* Desktop Links (Login, Wishlist, Cart) */}
                        <div className="gap-8 text-lg items-center hidden md:flex">
                            {user?.name != null ? (
                                <div className="relative group flex items-center gap-4">
                                    {user?.name}
                                    <BiUserCircle className="h-8 w-8 text-white cursor-pointer" onClick={handleDropdownToggle} />
                                    {isDropdownOpenUser && (
                                        <div className="absolute  right-0 z-50 top-8 w-48 bgBlack text-white border rounded-lg shadow-lg">
                                            {/* <Link
                                                onClick={() => setIsDropdownOpenUser(false)}
                                                to="/profile"
                                                className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black"
                                            >
                                                Profile
                                            </Link> */}
                                            <Link
                                                onClick={() => setIsDropdownOpenUser(false)}
                                                to="/orders"
                                                className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black"
                                            >
                                                Orders
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full text-left block px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <FiLogOut className="text-red-400" />
                                                    Logout
                                                </div>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link to='/login' className="flex flex-col items-center">
                                    <FaUser />
                                    <span className="text-xs">LOGIN</span>
                                </Link>
                            )}

                            <Link to="/wishlist" className="flex flex-col items-center relative">
                                <FaHeart />
                                <span className="text-xs">WISHLIST</span>
                                {wishlist.length > 0 && (
                                    <span className="absolute -top-5 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">{wishlist.length}</span>
                                )}
                            </Link>
                            <Link to="/cart" className="flex flex-col items-center relative">
                                <FaShoppingCart />
                                <span className="text-xs">CART</span>
                                {cart.length > 0 && (
                                    <span className="absolute -top-5 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">{cart.length}</span>
                                )}
                            </Link>
                        </div>
                    </div>

                    {/* Mobile view - Links (Login, Wishlist, Cart) */}
                    <div className="md:hidden flex justify-between w-full mt-4">
                        <div className="flex justify-start md:hidden w-full">
                            <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <FaBars className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex gap-8 text-lg items-center">
                            {user?.name != null ? (
                                <div className="relative group flex items-center gap-4">
                                    {user?.name}
                                    <BiUserCircle className="h-8 w-8 text-white cursor-pointer" onClick={handleDropdownToggle} />
                                    {isDropdownOpenUser && (
                                        <div className="absolute -left-3 top-12 z-50 w-48 bg-white border rounded-lg shadow-lg">
                                            <Link
                                                onClick={() => setIsDropdownOpenUser(false)}
                                                to="/profile"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Profile
                                            </Link>
                                            <Link
                                                onClick={() => setIsDropdownOpenUser(false)}
                                                to="/orders"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Orders
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full text-left block px-4 py-2 text-sm text-red-700 hover:bg-gray-100"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <FiLogOut className="text-red-400" />
                                                    Logout
                                                </div>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link to="/login" className="flex flex-col items-center">
                                    <FaUser />
                                    <span className="text-xs">LOGIN</span>
                                </Link>
                            )}
                            <Link to="/wishlist" className="flex flex-col items-center relative">
                                <FaHeart />
                                <span className="text-xs">WISHLIST</span>
                                {wishlist.length > 0 && (
                                    <span className="absolute -top-5 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">{wishlist.length}</span>
                                )}
                            </Link>
                            <Link to="/cart" className="flex flex-col items-center relative">
                                <FaShoppingCart />
                                <span className="text-xs">CART</span>
                                {cart.length > 0 && (
                                    <span className="absolute -top-5 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">{cart.length}</span>
                                )}
                            </Link>
                        </div>

                        {/* Right side mobile toggle button */}

                    </div>
                </div>



                {/* Mobile Category Menu */}
                <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} px-6 py-2 border-t border-gray-700`}>
                    <ul className="text-sm text-gray-300">
                        {categories.map((category, index) => (
                            <li key={index} className="relative">
                                <div
                                    className="flex items-center justify-between cursor-pointer py-2"
                                    onClick={() => handleCategoryClick(category.name)}
                                >
                                    <span>{category.name}</span>
                                    {category.subcategories && <IoIosArrowDown />}
                                </div>
                                {isCategoryOpen === category.name && category.subcategories && (
                                    <div className="pl-4">
                                        <ul>
                                            {category.subcategories.map((subcategory, subIndex) => (
                                                <li key={subIndex} className="py-1">
                                                    <h3 className="font-bold">{subcategory.title}</h3>
                                                    <ul className="pl-4">
                                                        {subcategory.items.map((item, itemIndex) => (
                                                            <li key={itemIndex} className="py-1">{item}</li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Category Menu */}
                <nav className='hidden md:block  py-2 border-t border-gray-700 z-40 relative'>
                    <div className="max-w-7xl px-2">
                        <ul className="flex justify-around text-sm text-gray-300">
                            {categories.map((category, index) => (
                                <li
                                    key={index}
                                    className="relative flex items-center gap-1 cursor-pointer"
                                    onMouseEnter={() => setHoveredCategory(category.name)}
                                    onMouseLeave={() => setHoveredCategory(null)}
                                >
                                    <Link to="#">{category.name}</Link>
                                    {category.subcategories && <IoIosArrowDown />}
                                    {hoveredCategory === category.name && category.subcategories && (
                                        <div className="absolute top-full -left-60 w-[1200px] bg-gray-800 text-white p-8 shadow-lg grid grid-cols-4 gap-8">
                                            {category.subcategories.map((subcategory, subIndex) => (
                                                <div key={subIndex}>
                                                    <h3 className="font-bold mb-4">{subcategory.title}</h3>
                                                    <ul>
                                                        {subcategory.items.map((item, itemIndex) => (
                                                            <li key={itemIndex} className="py-2 hover:text-orange-400">{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
