// src/components/Navbar.jsx
import { Landmark, Menu } from "lucide-react";
import { Link } from "react-router";
import Container from "./Container";

const Navbar = () => {
  // console.log(user);

  //   const logOutHandler = () => {
  //     // logOut()
  //     //   .then(() => {
  //     //     toast.success("Logout Successful"), setUser(null);
  //     //   })
  //     //   .catch((err) => console.log(err));
  //   };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/all-properties">All Properties</Link>
      </li>
      <li>
        <Link to="/my-properties">Add Properties</Link>
      </li>
      <li>
        <Link to="/my-properties">My Properties</Link>
      </li>
      <li>
        <Link to="/my-ratings">My Ratings</Link>
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
            {/* <button onClick={logOutHandler} className="btn btn-ghost btn-circle">
            <LogOut className="w-6 h-6 text-primary" />
          </button> */}

            <div className="hidden md:flex gap-1">
              <Link to="/login" className="btn btn-sm bg-base-100">
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-sm bg-[#0F5660] text-white"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
