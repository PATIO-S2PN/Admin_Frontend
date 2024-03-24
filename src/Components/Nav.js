import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../Assets/logonew.svg';

function Nav() {
  return (
    <nav className="bg-gray-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="shrink-0">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Search Input - Adjust for mobile */}
          <div className="w-1/2 basis-full md:basis-auto md:flex md:items-center">
            <div className="relative w-full">
              <BsSearch className="text-black text-lg absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer" />
              <input type="text" placeholder="Search Items" className="w-full pl-10 py-2 px-4 bg-gray-100 border rounded-lg" />
            </div>
          </div>

          {/* Login Button - Adjusted for responsiveness */}
          <Link to="/login" className="ml-4">
            <button className="px-4 py-2 text-sm text-white bg-gray-400 rounded hover:bg-gray-700 transition-colors duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
