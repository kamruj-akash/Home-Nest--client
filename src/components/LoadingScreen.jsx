import { motion } from "framer-motion";
import logo from "../assets/log.png";
const LoadingScreen = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] w-full flex flex-col items-center justify-center text-white overflow-hidden relative  bg-linear-to-b from-[#0F5660] to-[#092D31] opacity-90">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-col items-center z-10 scale-140"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-20 h-20 border-8 border-white/20 border-t-[#FF6B5A] border-b-[#FF6B5A] rounded-full mb-6"
        ></motion.div>

        <img
          src={logo}
          className="w-18 h-18 rounded-full text-white absolute top-1 bg-white"
          alt=""
        />

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-3xl font-bold tracking-wide text-white mt-1"
        >
          HomeNest
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-gray-200 text-sm"
        >
          Loading your dream homes
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
