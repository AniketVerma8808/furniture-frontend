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
