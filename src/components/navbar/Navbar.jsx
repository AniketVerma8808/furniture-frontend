// import {
//   FaUser,
//   FaHeart,
//   FaShoppingCart,
//   FaMapMarkerAlt,
//   FaSearch,
//   FaBars,
// } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { FiLogOut } from "react-icons/fi";
// import { BiUserCircle } from "react-icons/bi";
// import { toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";

// import { logoutUser } from "../../redux/authSlice";
// import CartCard from "../cart/CartCard";

// const dummyCart = [
//   {
//     id: 1,
//     name: "Nike Shoes",
//     price: 99.99,
//     quantity: 2,
//     image: "https://via.placeholder.com/50",
//   },
//   {
//     id: 2,
//     name: "Adidas Sneakers",
//     price: 89.99,
//     quantity: 1,
//     image: "https://via.placeholder.com/50",
//   },
// ];

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [hoveredCategory, setHoveredCategory] = useState(null);
//   const [isCategoryOpen, setIsCategoryOpen] = useState(null);
//   const [isDropdownOpenUser, setIsDropdownOpenUser] = useState(false);
//   // const [isDropdownOpenCart, setIsDropdownOpenCart] = useState(false);

//   const { user } = useSelector((state) => state.auth);
//   const { city } = useSelector((state) => state.home);

//   const dispatch = useDispatch();

//   const navigate = useNavigate();
//   const categories = [
//     {
//       name: "BEDROOM",
//       subcategories: null,
//     },
//     { name: "BEDS", subcategories: null },
//     { name: "MATTRESSES", subcategories: null },
//     { name: "WARDROBES", subcategories: null },
//     { name: "DECOR", subcategories: null },
//     { name: "SIDE TABLES", subcategories: null },
//   ];

//   const handleCategoryClick = (categoryName) => {
//     setIsCategoryOpen((prev) => (prev === categoryName ? null : categoryName));
//   };

//   const handleDropdownToggle = () => {
//     setIsDropdownOpenUser((prev) => !prev);
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     // logout();
//     toast.success("logout successful!");
//     navigate("/");
//     setIsDropdownOpenUser(false);
//   };

//   return (
//     <header className="bgBlack text-white">
//       <div className=" ">
//         {/* Top Bar */}
//         <div className="border-b border-gray-700">
//           <div className="container px-4 md:px-8 mx-auto flex justify-center md:justify-between items-center py-2 text-sm flex-wrap">
//             {/* Location & Edit Button */}
//             <div className="flex items-center gap-2 flex-wrap mb-2 sm:mb-0">
//               <FaMapMarkerAlt />
//               <span className="text-[8px] md:text-[12px]">
//                 Deliver to -{" "}
//                 <span className="text-red-400">{city || "N/A"}</span>
//               </span>
//             </div>

//             {/* Links Section */}
//             <div className="flex gap-6 text-gray-300 text-[8px] sm:text-xs items-center justify-between sm:justify-end">
//               <Link to="#" className="border-r border-gray-400 pr-2 sm:pr-4">
//                 Bedslane
//               </Link>
//               <Link
//                 to="/franchise"
//                 className="border-r border-gray-400 pr-2 sm:pr-4"
//               >
//                 Franchise Enquiry
//               </Link>
//               <Link
//                 to="/rent-property"
//                 className="border-r border-gray-400 pr-2 sm:pr-4"
//               >
//                 Rent your property
//               </Link>
//               <Link to="#" className="pr-0">
//                 Customer Support
//               </Link>{" "}
//               {/* No border on last link */}
//             </div>
//           </div>
//         </div>

//         {/* Main Navbar */}
//         <div className="container px-4 md:px-8 mx-auto flex justify-between items-center py-4 flex-wrap gap-4">
//           {/* Desktop view - Logo left, Links right */}
//           <div className="hidden md:flex w-full justify-between items-center">
//             {/* Logo */}
//             <Link
//               to={"/"}
//               className="flex justify-center md:justify-start w-full"
//             >
//               <img
//                 src="/logo.png"
//                 alt="Bedslane Logo"
//                 className="h-8 sm:h-12 mx-auto md:mx-0"
//               />
//             </Link>

//             {/* Desktop Links (Login, Wishlist, Cart) */}
//             <div className="gap-8 text-lg items-center hidden md:flex">
//               {user?.name != null ? (
//                 <div className="relative group flex items-center gap-4">
//                   <div className="flex flex-col items-center relative">
//                     <Link to="/settings" className="flex flex-col items-center">
//                       <BiUserCircle
//                         className="text-[20px]"
//                         // onClick={handleDropdownToggle}
//                       />
//                       <span className="text-[8px] sm:text-xs">
//                         {/* {user?.name} */}
//                         {user?.name?.split(" ")[0]}
//                       </span>
//                     </Link>
//                   </div>
//                 </div>
//               ) : (
//                 <Link to="/login" className="flex flex-col items-center">
//                   <FaUser />
//                   <span className="text-xs">LOGIN</span>
//                 </Link>
//               )}

//               <Link
//                 to="/wishlist"
//                 className="flex flex-col items-center relative"
//               >
//                 <FaHeart />
//                 <span className="text-xs">WISHLIST</span>
//                 {/* {wishlist.length > 0 && (
//                                     <span className="absolute -top-5 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">{wishlist.length}</span>
//                                 )} */}
//               </Link>
//               <Link className="flex flex-col items-center relative">
//                 <CartCard initialCart={dummyCart} />
//               </Link>
//             </div>
//           </div>

//           {/* Mobile view - Links (Login, Wishlist, Cart) */}
//           <div className="md:hidden flex items-center justify-between w-full">
//             {/* Left - Mobile Menu Toggle */}
//             <button
//               className="text-white"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               <FaBars className="w-6 h-6" />
//             </button>

//             {/* Center - Logo */}
//             <Link to="/" className="flex justify-center w-full">
//               <img
//                 src="/logo.png"
//                 alt="Bedslane Logo"
//                 className="h-8 sm:h-8 mx-auto"
//               />
//             </Link>

//             {/* Right - Icons */}
//             <div className="flex items-center gap-6 text-lg">
//               {/* User Account */}
//               {user?.name ? (
//                 <div className="relative group flex items-center gap-2">
//                   <Link
//                     to="/settings"
//                     // onClick={handleDropdownToggle}
//                     className="flex flex-col items-center text-white"
//                   >
//                     <BiUserCircle className="text-[20px]" />
//                     <span className="text-white text-[8px]">
//                       {/* {user.name}
//                        */}
//                       {user?.name?.split(" ")[0]}
//                     </span>
//                   </Link>
//                 </div>
//               ) : (
//                 <Link
//                   to="/login"
//                   className="flex flex-col items-center text-white"
//                 >
//                   <FaUser />
//                   <span className="text-[8px]">LOGIN</span>
//                 </Link>
//               )}

//               {/* Wishlist */}
//               <Link
//                 to="/wishlist"
//                 className="flex flex-col items-center text-white relative"
//               >
//                 <FaHeart />
//                 <span className="text-[8px]">WISHLIST</span>
//               </Link>

//               <CartCard initialCart={dummyCart} />
//             </div>
//           </div>
//         </div>

//         {/* Mobile Category Menu */}
//         <div
//           className={`md:hidden ${
//             isMenuOpen ? "block" : "hidden"
//           } px-6 py-2 border-t border-gray-700`}
//         >
//           <ul className="text-sm text-gray-300">
//             {categories.map((category, index) => (
//               <li key={index} className="relative">
//                 <div
//                   className="flex items-center justify-between cursor-pointer py-2"
//                   onClick={() => handleCategoryClick(category.name)}
//                 >
//                   <span>{category.name}</span>
//                   {category.subcategories && <IoIosArrowDown />}
//                 </div>
//                 {isCategoryOpen === category.name && category.subcategories && (
//                   <div className="pl-4">
//                     <ul>
//                       {category.subcategories.map((subcategory, subIndex) => (
//                         <li key={subIndex} className="py-1">
//                           <h3 className="-bold">{subcategory.title}</h3>
//                           <ul className="pl-4">
//                             {subcategory.items.map((item, itemIndex) => (
//                               <li key={itemIndex} className="py-1">
//                                 {item}
//                               </li>
//                             ))}
//                           </ul>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Desktop Category Menu */}
//         <nav className="hidden md:block  py-2 border-t border-gray-700 z-40 relative">
//           <div className="max-w-7xl px-2">
//             <ul className="flex justify-around text-sm text-gray-300">
//               {categories.map((category, index) => (
//                 <li
//                   key={index}
//                   className="relative flex items-center gap-1 cursor-pointer"
//                   onMouseEnter={() => setHoveredCategory(category.name)}
//                   onMouseLeave={() => setHoveredCategory(null)}
//                 >
//                   <Link to="#" className="text-[12px] -normal">
//                     {category.name}
//                   </Link>
//                   {category.subcategories && <IoIosArrowDown />}
//                   {hoveredCategory === category.name &&
//                     category.subcategories && (
//                       <div className="absolute top-full -left-60 w-[1200px] bg-white text-black p-8 shadow-lg grid grid-cols-5 gap-8">
//                         {category.subcategories.map((subcategory, subIndex) => (
//                           <div key={subIndex}>
//                             <h3 className="-bold text-[12px] mb-4">
//                               {subcategory.title}
//                             </h3>
//                             <ul>
//                               {subcategory.items.map((item, itemIndex) => (
//                                 <li
//                                   key={itemIndex}
//                                   className="py-2 hover:text-gray-900"
//                                 >
//                                   {item}
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { FaUser, FaHeart, FaMapMarkerAlt, FaBars } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/authSlice";
import CartCard from "../cart/CartCard";

const dummyCart = [
  {
    id: 1,
    name: "Nike Shoes",
    price: 99.99,
    quantity: 2,
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Adidas Sneakers",
    price: 89.99,
    quantity: 1,
    image: "https://via.placeholder.com/50",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { city } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Logout successful!");
    navigate("/");
  };

  const categories = [
    { name: "BEDS", path: "/categories/beds" },
    { name: "MATTRESSES", path: "/categories/mattresses" },
    { name: "WARDROBES", path: "/categories/wardrobes" },
    { name: "DECOR", path: "/categories/decor" },
    { name: "SIDE TABLES", path: "/categories/side-tables" },
  ];

  return (
    <header className="bgBlack text-white">
      {/* Top Bar */}
      <div className="border-b border-gray-700">
        <div className="container px-4 md:px-8 mx-auto flex justify-center md:justify-between items-center py-2 text-sm flex-wrap">
          {/* Location */}
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span className="text-[8px] md:text-[12px]">
              Deliver to - <span className="text-red-400">{city || "N/A"}</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-gray-300 text-[8px] sm:text-xs items-center">
            <Link to="#" className="border-r border-gray-400 pr-2 sm:pr-4">
              Bedslane
            </Link>
            <Link
              to="/franchise"
              className="border-r border-gray-400 pr-2 sm:pr-4"
            >
              Franchise Enquiry
            </Link>
            <Link
              to="/rent-property"
              className="border-r border-gray-400 pr-2 sm:pr-4"
            >
              Rent your property
            </Link>
            <Link to="#" className="pr-0">
              Customer Support
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container px-4 md:px-8 mx-auto flex justify-between items-center py-4 flex-wrap gap-4">
        {/* Desktop Navbar */}
        <div className="hidden md:flex w-full justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex justify-center md:justify-start w-full">
            <img
              src="/logo.png"
              alt="Bedslane Logo"
              className="h-8 sm:h-12 mx-auto md:mx-0"
            />
          </Link>

          {/* Icons */}
          <div className="flex gap-8 text-lg items-center">
            {user ? (
              <Link to="/settings" className="flex flex-col items-center">
                <BiUserCircle className="text-[20px]" />
                <span className="text-[8px] sm:text-xs">
                  {user?.name?.split(" ")[0]}
                </span>
              </Link>
            ) : (
              <Link to="/login" className="flex flex-col items-center">
                <FaUser />
                <span className="text-xs">LOGIN</span>
              </Link>
            )}

            <Link to="/wishlist" className="flex flex-col items-center">
              <FaHeart />
              <span className="text-xs">WISHLIST</span>
            </Link>

            <CartCard initialCart={dummyCart} />
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center justify-between w-full">
          {/* Menu Toggle */}
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex justify-center w-full">
            <img
              src="/logo.png"
              alt="Bedslane Logo"
              className="h-8 sm:h-8 mx-auto"
            />
          </Link>

          {/* Icons */}
          <div className="flex items-center gap-6 text-lg">
            {user ? (
              <Link
                to="/settings"
                className="flex flex-col items-center text-white"
              >
                <BiUserCircle className="text-[20px]" />
                <span className="text-white text-[8px]">
                  {user?.name?.split(" ")[0]}
                </span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="flex flex-col items-center text-white"
              >
                <FaUser />
                <span className="text-[8px]">LOGIN</span>
              </Link>
            )}

            <Link
              to="/wishlist"
              className="flex flex-col items-center text-white"
            >
              <FaHeart />
              <span className="text-[8px]">WISHLIST</span>
            </Link>

            <CartCard initialCart={dummyCart} />
          </div>
        </div>
      </div>

      <nav className="hidden md:block py-2 border-t border-gray-700 z-40 relative">
        <div className="max-w-7xl px-2">
          <ul className="flex justify-around text-sm text-gray-300">
            {categories.map((category, index) => (
              <li
                key={index}
                className="relative flex items-center gap-1 cursor-pointer"
              >
                <Link to={category.path} className="text-[12px]">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden py-2 border-t border-gray-700 z-40 relative">
          <div className="">
            <ul className="flex flex-col text-sm text-gray-300">
              {categories.slice(0, 5).map((category, index) => (
                <li key={index} className="py-2 px-6 border-b border-gray-700">
                  <Link
                    to={category.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-[12px] text-white"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
