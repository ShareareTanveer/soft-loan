import axios from 'axios';
import { getSession } from 'next-auth/react';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to attach the token dynamically
axiosInstance.interceptors.request.use(
  async (config) => {
    const session:any = await getSession();
    if (session?.accessToken) {
      config.headers.Authorization = `JWT ${session.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    if (error.response && error.response.status === 401) {
      // Optional: handle 401 errors globally (e.g., redirect to login)
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
