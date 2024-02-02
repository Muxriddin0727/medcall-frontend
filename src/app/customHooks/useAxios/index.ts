import axios from "axios";
import store from "../../redux";
import { setTokenExpired } from "../../redux/userSlice";

const axiosInstance = axios.create({
 baseURL: 'http://46.28.44.182:3002',
});

// Add a request interceptor to attach the token to each request
axiosInstance.interceptors.request.use((config) => {
 const token = localStorage.getItem('token');
 if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
 }
 return config;
}, (error) => {
 return Promise.reject(error);
});

// Add a response interceptor to handle token expiration
axiosInstance.interceptors.response.use((response) => {
 return response;
}, (error) => {
 if (error.response && error.response.status === 401) {
    store.dispatch(setTokenExpired()); // Dispatch the Redux action to handle token expiration
 }
 return Promise.reject(error);
});

export const useAxios = () => {
 const request = async ({
    url,
    method = "GET",
    body,
    headers,
 }: {
    url: string;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: object;
    headers?: object;
 }) => {
    return axiosInstance({
      url,
      method,
      data: body,
      headers: {
        ...headers,
      },
    });
 };

 return request;
};
