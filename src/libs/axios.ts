import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async function (config) {
  return Promise.resolve(config);
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const uploadAxiosInstance = axios.create();

export default axiosInstance;
