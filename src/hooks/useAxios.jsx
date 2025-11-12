import axios from "axios";

const useAxios = () => {
  const instance = axios.create({
    baseURL: "https://akash-home-nest-server.vercel.app",
  });
  return instance;
};

export default useAxios;
