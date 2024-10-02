import React from 'react';
import { Link } from 'react-router-dom';

const Navbarr = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Home Link */}
        <div>
          <Link to="/" className="text-white text-lg font-semibold">
            Home
          </Link>
        </div>
        {/* Login and Register Links */}
        <div className="flex space-x-4">
          <Link to="/login" className="text-white text-lg">
            Login
          </Link>
          <Link to="/register" className="text-white text-lg">
            Register
          </Link>
          <Link to="/create" className="text-white text-lg">
            create
          </Link>
          <Link to="/logout" className="text-white text-lg">
            logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;
