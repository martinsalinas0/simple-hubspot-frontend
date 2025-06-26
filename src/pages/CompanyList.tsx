import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../stores/configureStore.ts";
import { fetchCompanies } from "../stores/slices/companySlice.ts";
import CompanyCardForList from "../components/CompanyCardForList.tsx";
import { useNavigate } from "react-router-dom";

const CompaniesList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { companies, isLoading, error, count } = useSelector(
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

  //console.log(count);
  // console.log(companies);
  // console.log(companies.length);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="uppercase font-bold text-green-500 font-chicle tracking-widest text-5xl mb-2  flex justify-center">
            Companies
          </h1>
          <div className="w-full flex justify-center">
            <div className="flex flex-col items-center gap-2 border-2 border-green-700 bg-green-100 px-4 py-4 rounded-lg max-w-md w-full">
              <p className="text-green-800 font-bold text-center">
                Manage and view all your companies
              </p>

              <button
                type="button"
                className="bg-white hover:bg-green-200 text-green-700 font-bold px-4 py-2 rounded transition-colors duration-200"
                onClick={() => navigate("/add-company")}
              >
                + Add Company
              </button>
              <p>Number of Current Companies: {count}</p>
            </div>
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
              dealAmount={company.dealAmount}
              pointOfContact={company.pointOfContact}
              phoneNumber={company.phoneNumber}
              email={company.email}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesList;
