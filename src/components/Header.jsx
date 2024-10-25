import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 w-full text-black body-font z-20 px-32">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            src="/logo.svg"
            alt="Techor Logo"
            className="h-12 w-48 ml-0 lg:ml-12"
          />
        </NavLink>

        {/* Toggle Button for Small Screens - Positioned on the Top Right */}
        <div
          className="md:hidden absolute top-8 right-6 cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Navigation */}
        <nav
          className={`w-full md:w-auto flex flex-col md:flex-row items-center text-base gap-4 
          ${isMenuOpen ? "nav-menu nav-menu-open bg-white" : "nav-menu hidden md:flex "}`}
        >
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="hover:font-bold"
          >
            Home
          </NavLink>
          <GoChevronDown />
          <a href="#" className="hover:font-bold">
            Electronics
          </a>
          <GoChevronDown />
          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="hover:font-bold"
          >
            Contacts
          </NavLink>
          <GoChevronDown />
          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="hover:font-bold"
          >
            About
          </NavLink>
          <GoChevronDown />
          <NavLink
            to="/login"
            onClick={() => setIsMenuOpen(false)}
            className="hover:font-bold"
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
