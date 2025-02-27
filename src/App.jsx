import React, { Suspense, useCallback, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { fetchBanners, fetchUserLocation } from "./redux/homeSlice";
import { fetchProducts } from "./redux/productSlice";
import { fetchBlogs } from "./redux/blogSlice";
import TawkToComponent from "./components/tawkToComponent/TawkToComponent";
import { fetchWishlist } from "./redux/wishlistSlice";
import { store } from "./redux/store";
import { jwtDecode } from "jwt-decode";
import { logoutUser } from "./redux/authSlice";
// import Skeleton from "./components/loader/Skeleton";

// lazy loading for good perfomance
const Home = React.lazy(() => import("./pages/Home"));
// const About = React.lazy(() => wait(1000).then(() => import("./pages/About")));
const About = React.lazy(() => import("./pages/About"));
const Login = React.lazy(() => import("./components/auth/Login"));
const Register = React.lazy(() => import("./components/auth/Register"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Wishlist = React.lazy(() => import("./pages/Wishlist"));
const Product = React.lazy(() => import("./components/products/Product"));
const Checkout = React.lazy(() => import("./pages/Checkout"));
const ForgotPassword = React.lazy(() =>
  import("./components/auth/ForgotPassword")
);
const ResetPassword = React.lazy(() =>
  import("./components/auth/ResetPassword")
);
const TermsAndConditions = React.lazy(() =>
  import("./pages/TermsAndConditions")
);
const Policies = React.lazy(() => import("./pages/Policies"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const BlogPage = React.lazy(() => import("./pages/BlogPage"));
const BlogDetails = React.lazy(() => import("./pages/BlogDetails"));
const ComplaintsForm = React.lazy(() => import("./pages/ComplaintsForm"));
const FranchiseForm = React.lazy(() => import("./pages/FranchiseForm"));
const PropertyForm = React.lazy(() => import("./pages/PropertyForm"));
const Loosefitting = React.lazy(() => import("./pages/services/Loosefitting"));
const Reinstallation = React.lazy(() =>
  import("./pages/services/Reinstallation")
);
const Dismantling = React.lazy(() => import("./pages/services/Dismantling"));
const BedslaneStores = React.lazy(() => import("./pages/BedslaneStores"));
const Media = React.lazy(() => import("./pages/Media"));
const Ourstory = React.lazy(() => import("./pages/Bedslane/Ourstory"));
const SellBedslane = React.lazy(() => import("./pages/Bedslane/SellBedslane"));
const Careers = React.lazy(() => import("./pages/Bedslane/Careers"));
const Setting = React.lazy(() => import("./pages/Setting"));
const Address = React.lazy(() => import("./pages/Address"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Orders = React.lazy(() => import("./pages/Orders"));
const ChangePassword = React.lazy(() => import("./pages/ChangePassword"));

const ScrollToTop = React.memo(() => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
});

const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 < Date.now();
  } catch (error) {
    return true; // Treat any error as expired token
  }
};

const Loader = () => {
  <>
    {/* <Skeleton /> */}
    <div className="h-screen flex justify-center items-center text-5xl text-black">
      {" "}
      Loading..........
    </div>
  </>;
};

// const wait = (time) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, time);
//   });
// };

const App = () => {
  const dispatch = useDispatch();
  let token = store.getState().auth.token;

  const fetchData = useCallback(() => {
    if (!isTokenExpired(token)) {
      dispatch(fetchWishlist());
    } else {
      store.dispatch(logoutUser()); // Clear token in Redux
      token = null;
    }
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
      <main className="overflow-y-hidden  antialiased">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset" element={<ResetPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Product />} />
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
            <Route path="/orders" element={<Orders />} />
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
        </Suspense>
      </main>
      <Footer />
      <TawkToComponent />

      {/* Toast container for notifications */}
      <ToastContainer
        position="top-left"
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
