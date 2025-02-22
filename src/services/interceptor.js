import axios from "axios";
import {store} from "../redux/store";
import { jwtDecode } from "jwt-decode";
import { logoutUser } from "../redux/authSlice";

const API_URL = import.meta.env.VITE_BACKEND_PORT_DEVELOPMENT;

const clientAxios = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to check if token is expired
const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 < Date.now();
  } catch (error) {
    return true; // Treat any error as expired token
  }
};

// Request Interceptor
clientAxios.interceptors.request.use(
  (config) => {
    let token = store.getState().auth.token;

    if (isTokenExpired(token)) {
      console.log("🚨 Token Expired! Logging out...");
      store.dispatch(logoutUser()); // Clear token in Redux
      token = null;
    }

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default clientAxios;


