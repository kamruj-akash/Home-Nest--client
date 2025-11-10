// src/components/Navbar.jsx
import { Landmark, Menu, X } from "lucide-react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Container from "./Container";
import { useState } from "react";

const Navbar = () => {
  const { user, setUser, loading, setLoading, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logOutHandler = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successful"), setLoading(false), setUser(null);
      })
      .catch((err) => toast.error(err.message));
  };

  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-cyan-900/10 text-cyan-800" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-cyan-900/10 text-cyan-800" : ""
          }
          to="/all-properties"
        >
          All Properties
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-cyan-900/10 text-cyan-800" : ""
          }
          to="/add-properties"
        >
          Add Properties
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-cyan-900/10 text-cyan-800" : ""
          }
          to="/my-properties"
        >
          My Properties
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-cyan-900/10 text-cyan-800" : ""
          }
          to="/my-ratings"
        >
          My Ratings
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow-xs">
      <Container>
        <div className="navbar bg-white  px-4 py-2 top-0 z-50">
          <div className="navbar-start">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              {/* Use your own logo SVG or daisyUI avatar */}
              <div className="avatar placeholder">
                <div className="bg-teal-800 text-white rounded-full w-8">
                  <span className="text-lg font-bold">
                    <Landmark />
                  </span>
                </div>
              </div>
              <span className="text-2xl font-bold text-[#0F5660]">
                HomeNest
              </span>
            </Link>
          </div>

          {/* Navbar End */}
          <div className="navbar-center hidden md:flex items-center gap-2">
            <ul className="menu menu-horizontal px-1 hidden md:flex">
              {navItems}
            </ul>

            {/* Mobile Menu */}
            <div className="md:hidden dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <Menu className="w-6 h-6 text-primary" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu menu-sm mt-2 p-2 shadow bg-base-100 rounded-box "
              >
                {navItems}
              </ul>
            </div>
          </div>
          <div className="navbar-end">
            <div className="flex justify-center items-center gap-1">
              {loading ? (
                <p>Loading...</p>
              ) : user ? (
                <div className="dropdown dropdown-end cursor-pointer">
                  <div tabIndex={0} role="button">
                    <img
                      className="w-10 rounded-full h-10"
                      src={user?.photoURL}
                      alt={user?.displayName}
                      title={user?.displayName}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <ul
                    tabIndex="-1"
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                  >
                    <li>
                      <a>{user?.displayName}</a>
                    </li>
                    <li>
                      <a>{user?.email}</a>
                    </li>
                    <li>
                      <button onClick={logOutHandler}>LogOut</button>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <Link to="/login" className="btn btn-sm bg-base-100">
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-sm bg-[#0F5660] text-white"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
            <button
              className="md:hidden btn btn-ghost btn-circle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-[#0F5660]" />
              ) : (
                <Menu className="w-6 h-6 text-[#0F5660]" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-sm animate-slideDown">
            <ul className="flex flex-col gap-3 py-3 px-6 text-gray-700 font-medium">
              {navItems}
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
