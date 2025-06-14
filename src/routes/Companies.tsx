import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CompanyProfile from "./CompanyProfile";
import { Link } from "react-router-dom";
import axios from "axios";

interface Company {
  _id: string;
  name: string;
  logoUrl: string;
  location: string;
}

const URL = "http://localhost:8000/api";

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(`${URL}/company/all`);
        setCompanies(response.data.companies);
        console.log(response.data.companies);
      } catch (error) {
        console.error(error);
        setError("Failed API request");
        console.log("waht");
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);
  console.log("hhi");

  if (loading) return <p>Loading Companies</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Companies</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 mb-4">All active companies</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div
                key={company._id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {company.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  LOCATION: {company.location}
                </p>
                <p className="text-gray-600 text-sm">
                  IMAGE URL: {company.logoUrl}
                </p>
                <p>STATUS: </p>
              </div>
            ))}
          </div>
          {/* Add your companies content here */}
        </div>
      </div>

      <div className="p-6">
        <Link
          to="/companyProfile"
          className="text-gray-600 hover:text-red px-3 py-2 rounded-md text-lg font-medium transition-colors"
        >
          CompanyProfil ssaqe Page
        </Link>
      </div>
      <Routes>
        <Route path="/companyProfile" element={<CompanyProfile />} />
      </Routes>
    </div>
  );
};

export default CompanyList;
