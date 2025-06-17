import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <div>
    <nav className="bg-white shadow px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Left side links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/companies"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Companies
          </Link>
          <Link
            to="/single"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Single
          </Link>
          <Link
            to="/add-company"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Add Company
          </Link>
          <Link
            to="/buttons"
            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Buttons
          </Link>
        </div>

        {/* Right side user info */}
        <div className="text-orange-950 font-bold px-3 py-2">User</div>
      </div>
    </nav>
  </div>
);

export default Navbar;
