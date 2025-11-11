import { Facebook, TwitchIcon, Twitter } from "lucide-react";
import { Link } from "react-router";
import logo from "../assets/log.png";
const Footer = () => {
  return (
    <footer className="bg-[#0B1320] text-gray-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        <div className="flex flex-col gap-y-5 justify-center text-center">
          <img src={logo} className="w-20 h-20 mx-auto" alt="logo" />

          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Making your home buying and selling experience simple and
            successful.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/buy" className="hover:text-white transition">
                Buy
              </Link>
            </li>
            <li>
              <Link to="/rent" className="hover:text-white transition">
                Rent
              </Link>
            </li>
            <li>
              <Link to="/sell" className="hover:text-white transition">
                Sell
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <TwitchIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center pt-6">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-white">HomeNest</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
