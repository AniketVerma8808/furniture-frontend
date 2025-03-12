import { data } from "react-router-dom";
import clientAxios from "./interceptor";

// Login User API
export const LoginService = (data) => {
  return clientAxios.post("/users/login", data);
};

export const RegisterService = (data) => {
  return clientAxios.post("/users/register", data);
};

// Login User API
export const getBannerService = async () => {
  return await clientAxios.get("/banner");
};

// all Blogs data API
export const GetBlogsService = () => {
  return clientAxios.get(`//blogs/all`);
};
export const FormService = (data) => {
  return clientAxios.post("/help", data);
};
export const NewsletterService = (data) => {
  return clientAxios.post("/newsletter", data);
};
export const TestimonialsService = () => {
  return clientAxios.get(`/testimonials/all`);
};
export const profileUpdateService = (data) => {
  return clientAxios.put("/users/update-profile", data);
};
export const passwardChangeService = (data) => {
  return clientAxios.post("/users/change-password", data);
};

export const SubscribeService = () => {
  return clientAxios.patch(`/users/toggle-subscribe`);
};

// products =>

export const GetProductService = () => {
  return clientAxios.get("/products");
};

// wishlist api

export const POSTWishlistService = (productId) => {
  return clientAxios.post("/wishlist", { productId });
};

export const GETWishlistService = () => {
  return clientAxios.get("/wishlist");
};

export const DELETEWishlistService = (productId) => {
  return clientAxios.delete(`/wishlist/${productId}`);
};

// cart api
export const POSTCartService = (data) => {
  return clientAxios.post("/cart", data);
};

export const GETCartService = () => {
  return clientAxios.get("/cart");
};

export const UPDATECartQuantityService = (data) => {
  return clientAxios.put(`/cart/quantity`, data);
};

export const DELETECartService = (productId) => {
  return clientAxios.delete(`/cart/${productId}`);
};

export const POSTAddressService = (data) => {
  return clientAxios.post("/address", data);
};

export const GETAddressService = () => {
  return clientAxios.get("/address");
};

export const UPDATEAddressService = (_id, data) => {
  return clientAxios.patch(`/address/${_id}`, data);
};

export const DELETEAddressService = (_id) => {
  return clientAxios.delete(`/address/${_id}`);
};
// Create a Razorpay order
export const CreateRazorpayOrderService = (orderData) => {
  return clientAxios.post(`order/razorpay/order`, orderData);
};

export const VerifyRazorpayPaymentService = (paymentData) => {
  return clientAxios.post(`order/razorpay/verify`, paymentData);
};

// Create new order
export const CreateOrderService = (data) => {
  return clientAxios.post("/order", data);
};
// get all order
export const GetOrderService = () => {
  return clientAxios.post("/order");
};
