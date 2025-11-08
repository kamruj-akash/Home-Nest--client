import { Home } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-4">
      {/* 404 Text */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-[#0F5660] mb-4">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-8 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved. Let’s
        get you back home.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="btn bg-[#0F5660] hover:bg-[#134a51] text-white flex items-center gap-2 px-6"
      >
        <Home className="w-4 h-4" /> Back to Home
      </Link>

      {/* Optional small note */}
      <p className="mt-8 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} HomeNest. All rights reserved.
      </p>
    </div>
  );
};

export default NotFound;
