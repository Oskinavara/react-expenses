import axiosInstance from 'axios';

axiosInstance.defaults.baseURL = 'http://192.168.0.52:3001/';
axiosInstance.defaults.headers.post = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

export default axiosInstance;
