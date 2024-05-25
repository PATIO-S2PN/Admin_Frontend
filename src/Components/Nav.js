import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import logo from '../Assets/logonew.svg';

function Nav() {
  return (
    <nav className="bg-orange-100 shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="shrink-0">
            <img src={logo} alt="Logo" className="w-auto h-10" />
          </div>

          {/* Search Input - Adjust for mobile */}
          <div className="w-1/2 basis-full md:basis-auto md:flex md:items-center">
            <div className="relative w-full">
              <BsSearch className="absolute text-lg text-black transform -translate-y-1/2 cursor-pointer left-3 top-1/2" />
              <input type="text" placeholder="Search Items" className="w-full px-4 py-2 pl-10 bg-gray-100 border rounded-lg" />
            </div>
          </div>

          {/* Login Button - Adjusted for responsiveness */}
          <Link to="/login" className="ml-4">
            <button className="px-4 py-2 text-sm text-white transition-colors duration-300 bg-gray-400 rounded hover:bg-gray-700">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
