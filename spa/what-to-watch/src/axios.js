import axios from "axios";


const BASE_URL = `https://5.react.pages.academy/wtw`;
const TIMEOUT = 5000;

export const createAPI = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  return instance;
};
