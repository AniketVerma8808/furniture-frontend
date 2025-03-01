import { FaUser, FaHeart, FaMapMarkerAlt, FaBars } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../cart/CartCard";
import { clearWishlist } from "../../redux/wishlistSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { city } = useSelector((state) => state.home);

  const { wishlistCount } = useSelector((state) => state.wishlist);

  useEffect(() => {
    if (!user) {
      dispatch(clearWishlist());
    }
  }, [user, dispatch]);

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
          <div className="flex items-center gap-2 pb-2 md:pb-0">
            <FaMapMarkerAlt className="" />
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

            <Link
              to="/wishlist"
              className="relative flex flex-col items-center"
            >
              <FaHeart />
              <span className="text-xs">WISHLIST</span>

              {wishlistCount > 0 && (
                <span className="absolute -top-4 right-1 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <CartCard />
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
              className="flex flex-col items-center text-white relative"
            >
              <FaHeart />
              <span className="text-[8px]">WISHLIST</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-3 right-1 bg-red-500 text-white text-xs rounded-full px-1 py-0">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <CartCard />
          </div>
        </div>
      </div>

      {/* desktop menu */}
      <nav className="hidden md:block py-2 border-t border-gray-700 z-40 relative">
        <div className="max-w-7xl px-2">
          <ul className="flex justify-center gap-12 text-sm text-gray-300">
            {categories.map((category, index) => (
              <li
                key={index}
                className="relative flex items-center gap-1 cursor-pointer"
              >
                {/* <Link to={category.path} className="text-[12px]"> */}
                <Link className="text-[12px]">{category.name}</Link>
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
                    // to={category.path}
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
