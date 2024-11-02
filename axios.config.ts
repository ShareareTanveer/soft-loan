import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://codecanvas-corporate-server.onrender.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.API_KEY ,
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    // For example, logging out the user if a 401 response is received
    // if (error.response && error.response.status === 401) {
    // }
    return Promise.reject(error);
  }
);

export default axiosInstance;
