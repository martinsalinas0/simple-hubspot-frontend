import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyProfile from "./CompanyProfile";
import { Link } from "react-router-dom";

const Companies: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Companies</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-4">
            Welcome to the Companies page. Here you can manage and view all your
            companies.
          </p>

          {/* Add your companies content here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example company cards */}
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Company Name
              </h3>
              <p className="text-gray-600 text-sm mb-2">Industry: Technology</p>
              <p className="text-gray-600 text-sm">Location: New York, NY</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Another Company
              </h3>
              <p className="text-gray-600 text-sm mb-2">Industry: Finance</p>
              <p className="text-gray-600 text-sm">
                Location: San Francisco, CA
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Third Company
              </h3>
              <p className="text-gray-600 text-sm mb-2">Industry: Healthcare</p>
              <p className="text-gray-600 text-sm">Location: Boston, MA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Link
          to="/companyProfile"
          className="text-gray-600 hover:text-red px-3 py-2 rounded-md text-lg font-medium transition-colors"
        >
          CompanyProfile Page
        </Link>
      </div>
      <Routes>
        <Route path="/companyProfile" element={<CompanyProfile />} />
      </Routes>
    </div>
  );
};

export default Companies;
