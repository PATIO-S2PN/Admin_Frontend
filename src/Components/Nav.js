import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logonew.svg';

function Nav() {
  return (
    <nav className="bg-gray-300 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo and branding */}
              <img src={logo} alt="Logo" className="h-10 w-auto" />
              
            </div>
            
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <Link to="/login">
              <button className="px-4 py-2 text-sm bg-gray-400 rounded-lg hover:bg-gray-500">
                Login
              </button>
              
            </Link>
          </div>
        </div>
      </div>
      
    </nav>
  );
}

export default Nav;
