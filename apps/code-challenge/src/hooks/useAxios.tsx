import Axios from "axios";

export const useAxios = () => {
  return Axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    withCredentials: true,
    validateStatus: () => {
      return true;
    },
  });
};
