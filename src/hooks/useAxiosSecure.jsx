import axios from "axios";
import { useAuth } from "./useAuth";

const useAxiosSecure = () => {
  const { user } = useAuth();
  const instance = axios.create({
    baseURL: "http://localhost:3000",
  });

  instance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  return instance;
};

export default useAxiosSecure;
