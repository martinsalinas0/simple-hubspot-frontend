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
    <section
      aria-labelledby="company-name"
      className="p-6 max-w-lg mx-auto bg-white rounded shadow-md"
    >
      <h1 id="company-name" className="text-2xl font-bold mb-4">
        {name}
      </h1>

      {logoURL ? (
        <img
          src={logoURL}
          alt={`${name} logo`}
          className="mb-4 w-full max-h-48 object-contain"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.png"; // fallback image path
          }}
        />
      ) : (
        <div className="mb-4 w-full max-h-48 flex items-center justify-center bg-gray-200 text-gray-500">
          No logo available
        </div>
      )}

      <p className="mb-1">
        <strong>Location:</strong> {location}
      </p>
      <hr className="my-2" />
      <p className="mb-1">
        <strong>ID:</strong> {_id}
      </p>
      <hr className="my-2" />
      <p>
        <strong>Status:</strong> {status}
      </p>
      <button className="text-blue-600  flex-1 hover:text-gray-600">
        Edit
      </button>

      <button className="text-red-700  flex-1 font-bold  hover:text-gray-600">
        {" "}
        Delete
        {/* add confirmation for deletion */}
      </button>
    </section>
  );
};

export default CompanyDetailsComp;
