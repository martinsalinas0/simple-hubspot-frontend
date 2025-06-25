import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <div>
    <nav className="bg-orange-400 shadow-2xl bg-opacity-25 px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to={"/dnd"}
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Companies Dashboard
          </Link>
          <Link
            to="/companies"
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Companies (list)
          </Link>
          <Link
            to="/single"
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Single
          </Link>
          <Link
            to="/add-company"
            className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Add Company
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
