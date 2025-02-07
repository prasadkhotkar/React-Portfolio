import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 px-6 md:px-12 flex justify-between items-center bg-black text-white shadow-lg z-50">
      {/* Logo */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
          <a href="/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300">
            Prasad
          </a>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="text-lg capitalize font-medium text-gray-400 hover:text-white transition-all duration-200 cursor-pointer"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={28} /> : <FaBars size={28} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400 space-y-6 text-3xl">
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
                className="hover:text-white transition-all duration-200 cursor-pointer"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
