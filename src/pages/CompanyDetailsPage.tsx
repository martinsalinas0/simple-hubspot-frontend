import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { AppDispatch, RootState } from "../stores/configureStore";
import { getCompById } from "../stores/slices/companiesListSclice";
import CompanyDetailsComp from "../components/CompanyDetails";

const CompanyDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const company = useSelector(
    (state: RootState) => state.companies.currentCompany
  );
  const isLoading = useSelector(
    (state: RootState) => state.companies.isLoading
  );
  const error = useSelector((state: RootState) => state.companies.error);

  useEffect(() => {
    if (id) {
      dispatch(getCompById(id));
    }
  }, [dispatch, id]);

  if (isLoading) return <p className="text-center mt-10">Loading company...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-600">Error: {error}</p>;
  if (!company) return <p className="text-center mt-10">No company found.</p>;

  return (
    <div className="flex  min-h-screen p-6 bg-gray-100">
      <CompanyDetailsComp
        name={company.name}
        location={company.location}
        _id={company._id}
        status={company.status}
        logoURL={company.logoURL}
        createdAt={company.createdAt}
        suf="THIS IS JUST SHOWING ME REMINDING ME HOW COMPS AND PROPS WORK"
      />
    </div>
  );
};

export default CompanyDetailsPage;
