import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
