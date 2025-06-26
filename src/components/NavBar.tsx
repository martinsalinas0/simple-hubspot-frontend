import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <div className="">
    <nav className="min-w-auto bg-darkblue shadow-2xl px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-offwhite hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to={"/dashboard"}
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/active-companies"
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Current Companies
          </Link>
          <Link
            to="/deals"
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Deals
          </Link>
          <Link
            to="/add-company"
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Add Company
          </Link>{" "}
          <Link
            to={"/data"}
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Data
          </Link>
          <Link
            to="/buttons"
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Buttons
          </Link>
          <Link
            to={"/test"}
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Test Page{" "}
          </Link>
        </div>

        {/* Right side user info */}
        <div className="text-orange-950 font-bold px-3 py-2">User</div>
      </div>
    </nav>
  </div>
);

export default Navbar;
