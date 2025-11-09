import axios from "axios";

const useAxios = () => {
  const instance = axios.create({
    baseURL: "https://home-nest-server-wheat.vercel.app",
  });
  return instance;
};

export default useAxios;
