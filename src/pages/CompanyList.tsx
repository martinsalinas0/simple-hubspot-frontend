import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../stores/configureStore.ts";
import { fetchCompanies } from "../stores/slices/companySlice.ts";
import CompanyCardForList from "../components/CompanyCardForList.tsx";
import { useNavigate } from "react-router-dom";

const CompaniesList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { companies, isLoading, error } = useSelector(
    (state: RootState) => state.companies
  );

  //load all companies
  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading companies...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p className="font-medium">Error loading companies</p>
            <p className="text-sm mt-1">Error: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!companies || companies.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Companies</h1>
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-600">No companies found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2  flex justify-center">
            Companies
          </h1>
          <div className="flex justify-center">
            <p className="text-orange-400">
              Manage and view all your companies
            </p>
            <button
              className="bg-green-800 hover:bg-green-500 text-white font-bold px-0.5 py-0.5 mx-2 rounded inline-flex items-center"
              onClick={() => navigate(`/add-company`)}
            >
              <span className="mr-2">+</span>
              Add Company
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <CompanyCardForList
              key={company._id}
              name={company.name}
              location={company.location}
              _id={company._id}
              status={company.status}
              logoURL={company.logoURL}
              createdAt={company.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesList;
