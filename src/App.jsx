import React, { useCallback, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Product from "./components/products/Product";
import Checkout from "./pages/Checkout";
// import YourOrder from "./components/orders/YourOrder";
// import OrderDetails from "./components/orders/OrderDetails";
import { useDispatch } from "react-redux";
import { fetchBanners, fetchUserLocation } from "./redux/homeSlice";
import { fetchProducts } from "./redux/productSlice";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import Policies from "./pages/Policies";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import { fetchBlogs } from "./redux/blogSlice";
import ComplaintsForm from "./pages/ComplaintsForm";
import FranchiseForm from "./pages/FranchiseForm";
import PropertyForm from "./pages/PropertyForm";
import Loosefitting from "./pages/services/Loosefitting";
import Reinstallation from "./pages/services/Reinstallation";
import Dismantling from "./pages/services/Dismantling";
import BedslaneStores from "./pages/BedslaneStores";
import Media from "./pages/Media";
import Ourstory from "./pages/Bedslane/Ourstory";
import SellBedslane from "./pages/Bedslane/SellBedslane";
import Careers from "./pages/Bedslane/Careers";
import Setting from "./pages/Setting";
import Address from "./pages/Address";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import ChangePassword from "./pages/ChangePassword";


const ScrollToTop = React.memo(() => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
});

const App = () => {
  const dispatch = useDispatch();
  const fetchData = useCallback(() => {
    dispatch(fetchUserLocation());
    dispatch(fetchBlogs());
    dispatch(fetchBanners());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="overflow-y-hidden   antialiased">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:name" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/orders" element={<YourOrder />} /> */}
          {/* <Route path="/order_details/:id" element={<OrderDetails />} /> */}
          <Route path="/policies" element={<Policies />} />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />
          <Route path="/privacy&policy" element={<PrivacyPolicy />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogdetails/:id" element={<BlogDetails />} />
          <Route path="/complaints" element={<ComplaintsForm />} />
          <Route path="/franchise" element={<FranchiseForm />} />
          <Route path="/rent-property" element={<PropertyForm />} />
          <Route path="/services/loose-fitting" element={<Loosefitting />} />
          <Route
            path="/services/re-installation"
            element={<Reinstallation />}
          />
          <Route path="/services/dismantling" element={<Dismantling />} />
          <Route path="/stores" element={<BedslaneStores />} />
          <Route path="/media" element={<Media />} />
          <Route path="/our-story" element={<Ourstory />} />
          <Route path="/sell-with-us" element={<SellBedslane />} />
          <Route path="/careers" element={<Careers />} />

          <Route path="/settings" element={<Setting />}>
            <Route index element={<Profile />} />{" "}
            <Route path="/settings/profile" element={<Profile />} />
            <Route path="/settings/address" element={<Address />} />
            <Route path="/settings/orders" element={<Orders />} />
            <Route
              path="/settings/change-password"
              element={<ChangePassword />}
            />
          </Route>

          {/* Define a route for a non-existent path (404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      {/* Toast container for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
