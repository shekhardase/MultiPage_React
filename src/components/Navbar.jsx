import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 p-4 shadow-lg">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-white text-2xl font-bold tracking-wide">MyWebsite</h1>
        <div className="flex space-x-6">
          <Link
            to="/home"
            className="text-white text-lg font-semibold transition-all hover:text-pink-400"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg font-semibold transition-all hover:text-pink-400"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-white text-lg font-semibold transition-all hover:text-pink-400"
          >
            About
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
