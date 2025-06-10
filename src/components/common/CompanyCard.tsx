import type React from "react";
// import { Company } from "../../types/Company";

const CompanyCard: React.FC = () => {
  return (
    <div className="flex w-full justify-center py-11">
      <div className="rounded-2xl w-auto overflow-hidden bg-white shadow-lg p-6 max-w-md">
        <div className="flex justify-center mb-4">
          <img
            src="/public/vite.svg"
            alt="company logo"
            className="w-16 h-16 object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold mb-4 text-center">Company Profile</h1>
        <h2 className="text-xl font-semibold mb-2">Company Name</h2>
        <p className="text-gray-600 mb-2">Company ID: 3132</p>
        <p className="text-gray-600 mb-4">City, State, Country</p>
        <div className="border-t pt-4">
          <h3 className="text-lg font-medium">
            Current State:{" "}
            <span className="italic text-gray-600 font-normal">
              CONTRACT SENT
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
