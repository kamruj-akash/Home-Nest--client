import { motion } from "framer-motion";
import { Home } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#0F5660] text-white overflow-hidden relative">
      {/* Background subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F5660] to-[#092D31] opacity-90"></div>

      {/* Animated glow orbs */}
      <div className="absolute w-72 h-72 bg-[#1FA1A8]/20 rounded-full blur-3xl -top-10 -left-20 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-[#FF6B5A]/20 rounded-full blur-3xl bottom-0 right-0 animate-pulse delay-300"></div>

      {/* Logo spinner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex flex-col items-center z-10"
      >
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-20 h-20 border-4 border-white/20 border-t-[#FF6B5A] rounded-full mb-6"
        ></motion.div>

        {/* Center icon */}
        <Home className="w-10 h-10 text-white absolute top-[25px]" />

        {/* App name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-3xl font-bold tracking-wide text-white mt-10"
        >
          HomeNest
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-gray-200 text-sm mt-2"
        >
          Loading your dream homes...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
