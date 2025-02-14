
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

const API_URL = import.meta.env.VITE_BACKEND_PORT_DEVELOPMENT

// Create Axios instance
const clientAxios = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Utility function to decode the JWT token and check if it's expired
const isTokenExpired = (token) => {
  if (!token) return true

  try {
    const decodedToken = jwtDecode(token)
    const currentTime = Date.now() / 1000 // Current time in seconds
    return decodedToken.exp < currentTime // Return true if expired
  } catch (error) {
    console.error('Error decoding token', error)
    return true // Consider token expired if decoding fails
  }
}

// Request Interceptor
clientAxios.interceptors.request.use(
  (config) => {
    const token =  localStorage.getItem('token')
    // If token exists, add it to the Authorization header
    if (token && !isTokenExpired(token)) {
      config.headers['Authorization'] = `Bearer ${token}`
    } 

    // If the request is multipart/form-data, Axios will handle the content type automatically.
    if (config.headers['Content-Type'] === 'multipart/form-data') {
      delete config.headers['Content-Type'] // Allow Axios to set the correct Content-Type for multipart
    }

    return config
  },
  (error) => {
    // Handle request error
    return Promise.reject(error)
  }
)

export default clientAxios
