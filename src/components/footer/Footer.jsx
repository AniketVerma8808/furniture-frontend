import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt,
  FaCommentDots,
} from "react-icons/fa";
import {
  FaShippingFast,
  FaExchangeAlt,
  FaLock,
  FaHeadphonesAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Newsletter from "../newletter/Newsletter";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <Newsletter />
      {/* Links Section */}
      <div className="container px-4 md:px-8 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-6 py-8 border-gray-700 text-[14px] md:text-[16px]">
        <div>
          <h3 className="font-normal mb-2 text-[13px] sm:text-[14px] md:text-[16px]">
            QUICK LINKS
          </h3>
          <ul>
            <li className="footer-link">
              <Link
                to="/"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                Home
              </Link>
            </li>
            <li className="footer-link">
              <Link
                to="/stores"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                Bedslane Stores
              </Link>
            </li>
            <li className="footer-link">
              <Link
                to="/media"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                Media
              </Link>
            </li>
            <li className="footer-link">
              <Link
                to="/feedback"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                Share Feedback
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-normal mb-2 text-[13px] sm:text-[14px] md:text-[16px]">
            SERVICES
          </h3>
          <ul>
            <li className="footer-link">
              <Link
                to="/services/dismantling"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                Dismantling Service
              </Link>
            </li>
            <li className="footer-link">
              <Link
                to="/services/re-installation"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                Re-Installation
              </Link>
            </li>
            <li className="footer-link">
              <Link
                to="/services/loose-fitting"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                Loose Fitting
              </Link>
            </li>
            <li className="footer-link">
              <Link
                to="/complaints"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                Complaints
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-normal mb-2 text-[13px] sm:text-[14px] md:text-[16px]">
            CORPORATE INFO
          </h3>
          <ul>
            <li className="footer-link">
              <Link
                to="/blogs"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                Blogs
              </Link>
            </li>
            <li className="footer-link">
              <Link
                to="/franchise"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                Become A Franchise
              </Link>
            </li>
            <li className="footer-link">
              <Link
                to="/rent-property"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                Rent Your Property
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-normal uppercase mb-2 text-[13px] sm:text-[14px] md:text-[16px]">
            Bedslane
          </h3>
          <ul>
            <li className="footer-link">
              <Link
                to="/our-story"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                Our Story
              </Link>
            </li>
            <li className="footer-link">
              <Link
                to="/sell-with-us"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                Sell With Bedslane
              </Link>
            </li>
            <li className="footer-link">
              <Link
                to="/careers"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                Career
              </Link>
            </li>
            <li className="footer-link">
              <Link
                to="/contact"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-normal mb-2 text-[13px] sm:text-[14px] md:text-[16px]">
            MY ACCOUNT
          </h3>
          <ul>
            <li className="footer-link">
              <Link
                to="/cart"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                My Cart
              </Link>
            </li>
            <li className="footer-link">
              <Link
                to="/orders"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                My Orders
              </Link>
            </li>
            <li className="footer-link">
              <Link
                to="/track-order"
                className="hover:text-gray-400 text-[11px] md:text-[13px]"
              >
                Track Order
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-normal mb-2 text-[13px] sm:text-[14px] md:text-[16px]">
            Social Accounts
          </h3>
          <div className="flex flex-wrap gap-2 md:gap-4 mb-2">
            <div className="bg-white rounded-full p-2 text-black social-icon">
              <Link
                to="#"
                target="_blank"
                className="text-[14px] md:text-[16px] "
              >
                <FaFacebookF />
              </Link>
            </div>
            <div className="bg-white rounded-full p-2 text-black social-icon">
              <Link
                to="#"
                target="_blank"
                className="text-[14px] md:text-[16px] "
              >
                <FaInstagram />
              </Link>
            </div>
            <div className="bg-white rounded-full p-2 text-black social-icon">
              <Link
                to="#"
                target="_blank"
                className="text-[14px] md:text-[16px] "
              >
                <FaYoutube />
              </Link>
            </div>
            <div className="bg-white rounded-full p-2 text-black social-icon">
              <Link
                to="#"
                target="_blank"
                className="text-[14px] md:text-[16px] "
              >
                <FaTwitter />
              </Link>
            </div>
          </div>

          {/* <h3 className="font-semibold mb-2 text-base uppercase">Pay Using</h3> */}
          {/* Add payment icons here */}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container px-4 md:px-8  mx-auto py-6 ">
        <div className="rounded-lg shadow-lg bg-[#363434] text-center md:text-left py-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 px-2 md:px-0">
            <div className="flex md:flex-col items-center gap-2 text-base">
              <FaShippingFast className="text-[14px] md:text-xl" />
              <div>
                <h4 className="font-normal text-[11px] md:text-[13px] ">
                  FREE DELIVERY
                </h4>
                <p className="text-[9px] md:text-[12px] ">
                  When ordering from Rs. 2500.
                </p>
              </div>
            </div>
            <div className="flex md:flex-col items-center gap-2 text-base">
              <FaExchangeAlt className="text-[14px] md:text-xl" />
              <div>
                <h4 className="font-normal text-[11px] md:text-[13px] ">
                  EASY RETURNS
                </h4>
                <p className="text-[9px] md:text-[12px] ">
                  If goods have problems
                </p>
              </div>
            </div>
            <div className="flex md:flex-col items-center gap-2 text-base">
              <FaLock className="text-[14px] md:text-xl" />
              <div>
                <h4 className="font-normal text-[11px] md:text-[13px] ">
                  SECURE PAYMENT
                </h4>
                <p className="text-[9px] md:text-[12px] ">
                  100% secure payment
                </p>
              </div>
            </div>
            <div className="flex md:flex-col items-center gap-2 text-base">
              <FaHeadphonesAlt className="text-[14px] md:text-xl" />
              <div>
                <h4 className="font-normal text-[11px] md:text-[13px] ">
                  9 AM TO 6:30 PM | 7 DAYS
                </h4>
                <p className="text-[9px] md:text-[12px]  ">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container px-4 md:px-8 mx-auto flex flex-col sm:flex-row justify-between py-4 text-white text-[14px] md:text-[16px]">
        <p className="text-[11px] md:text-[12px]">
          © 2025, BedsLane | All rights reserved.
          <span>
            {" "}
            Designed by{" "}
            <Link
              to="https://techxpert.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Techxpert
            </Link>
          </span>
        </p>
        <p className="text-[11px] md:text-[12px]">
          <Link to="/privacy&policy" className="mx-2 hover:text-gray-400">
            Privacy Policy
          </Link>{" "}
          |
          <Link to="/terms&conditions" className="mx-2 hover:text-gray-400">
            Terms & Conditions
          </Link>{" "}
          |
          <Link to="/policies" className="mx-2 hover:text-gray-400">
            Policies
          </Link>
        </p>
      </div>

      {/* Floating Buttons */}
      {/* Uncomment if needed */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3">
        <button className="bg-green-500 p-3 rounded-full text-white">
          <FaWhatsapp size={20} />
        </button>
        <button className="bg-orange-500 p-3 rounded-full text-white">
          <FaPhoneAlt size={20} />
        </button>
        <button className="bg-gray-500 p-3 rounded-full text-white">
          <FaCommentDots size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
