import React from "react";

interface CompanyProps {
  name: string;
  location: string;
  _id: string;
  status: string;
  logoURL?: string;
}

const CompanyDetailsComp: React.FC<CompanyProps> = ({
  name,
  location,
  _id,
  status,
  logoURL,
}) => {
  return (
    <div className="w-full px-4 pt-0">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>

      <div className="absolute top-13 right-20 w-50 h-50">
        {logoURL ? (
          <img
            src={logoURL}
            alt={`${name} logo`}
            className="mb-4 w-full max-h-60 object-contain content-end"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.png";
            }}
          />
        ) : (
          <div className="mb-4 w-full max-h-60 flex items-center justify-center bg-gray-200 text-gray-500 text-lg py-10">
            No logo available
          </div>
        )}
      </div>

      <p className="mb-2 text-lg">
        <strong className="text-gray-700">Location:</strong> {location}
      </p>
      <hr className="my-3" />

      <p className="mb-2 text-lg">
        <strong className="text-gray-700">ID:</strong> {_id}
      </p>
      <hr className="my-3" />

      <p className="mb-4 text-lg">
        <strong className="text-gray-700">Status:</strong> {status}
      </p>

      <div className="flex gap-4">
        <button className="text-blue-600 font-medium hover:text-blue-800">
          Edit
        </button>

        <button className="text-red-700 font-bold hover:text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CompanyDetailsComp;
