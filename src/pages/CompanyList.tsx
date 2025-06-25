import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../stores/configureStore.ts";
import { fetchCompanies } from "../stores/slices/companySlice.ts";
import CompanyCardForList from "../components/CompanyCardForList.tsx";

const CompaniesList: React.FC = () => {
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

  //shows UI if there is an error
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

  //if there are no companies, its shows this UI
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

  //finally, if everything works, it shows this
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Companies</h1>
          <p className="text-gray-600">Manage and view all your companies</p>
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
          <button>HERE</button>
        </div>
      </div>
    </div>
  );
};

export default CompaniesList;
