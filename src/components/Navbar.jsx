import { useState } from "react";
import { NavLink } from "react-router-dom";
import Frame from "../assets/Frame.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full bg-white shadow  z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center ml-2 px-4 md:px-10 py-4">

        {/* Logo */}
        <div>
          <img src={Frame} alt="logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center gap-8 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-500"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-500"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/features"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-500"
            }
          >
            Features
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-500"
            }
          >
            Pricing
          </NavLink>

          <NavLink
            to="/download"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-500"
            }
          >
            Download
          </NavLink>

          <NavLink
            to="/help"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "hover:text-blue-500"
            }
          >
            Help
          </NavLink>

          <NavLink to="/auth">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2  ml-20  rounded-lg transition">
              Login / Sign up
            </button>
          </NavLink>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-6 bg-white border-t text-gray-700 font-medium">

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500"
          >
            About
          </NavLink>

          <NavLink
            to="/features"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500"
          >
            Features
          </NavLink>

          <NavLink
            to="/pricing"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500"
          >
            Pricing
          </NavLink>

          <NavLink
            to="/download"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500"
          >
            Download
          </NavLink>

          <NavLink
            to="/help"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500"
          >
            Help
          </NavLink>

          <NavLink to="/auth" onClick={() => setMenuOpen(false)}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg">
              Login / Sign up
            </button>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;