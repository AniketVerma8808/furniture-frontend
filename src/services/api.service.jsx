import { data } from "react-router-dom";
import clientAxios from "./interceptor";

// Login User API
export const LoginService = (data) => {
  return clientAxios.post("/users/auth/login", data);
};

export const RegisterService = (data) => {
  return clientAxios.post("/users/auth/register", data);
};

// Login User API
export const getBannerService = async () => {
  return await clientAxios.get("/banner");
};

// all Blogs data API
export const GetBlogsService = () => {
  return clientAxios.get(`/blogs`);
};
export const FormService = (data) => {
  return clientAxios.post("/help", data);
};
export const NewsletterService = (data) => {
  return clientAxios.post("/newsletter", data);
};
export const TestimonialsService = () => {
  return clientAxios.get(`/testimonials`);
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

export const UPDATECartQuantityService = (productId, data) => {
  return clientAxios.put(`/cart/${productId}`, data);
};

export const DELETECartService = (productId) => {
  return clientAxios.delete(`/cart/${productId}`);
};
