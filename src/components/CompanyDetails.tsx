import axios from "axios";
import { useNavigate } from "react-router-dom";

interface CompanyProps {
  name: string;
  location: string;
  _id: string;
  status: string;
  logoURL?: string;
  createdAt?: string;
  suf?: string;
}

const CompanyDetailsComp: React.FC<CompanyProps> = ({
  name,
  location,
  _id,
  status,
  logoURL,
  createdAt,
  suf,
}) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/company/edit/${_id}`, {
      state: { name, location, status, logoURL, createdAt },
    });
  };

  console.log("createdAt:fff", createdAt);
  console.log(name);

  const deleteCompany = async () => {
    const valid = window.confirm("Are you sure you want to delete? ");
    if (!valid) return;

    try {
      const response = await axios.delete(
        `http://localhost:8000/api/company/delete/${_id}`
      );
      console.log(response);
      navigate(`/companies`);
    } catch (err) {
      console.error("failed to delete", err);
      alert("failed to delete");
    }
  };

  return (
    <div className="w-full px-4 pt-0">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{name}</h1>

      <div className="absolute top-13 right-20 w-60 h-60">
        {logoURL ? (
          <img
            src={logoURL}
            alt={`${name} logo`}
            className="mb-4 w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.png";
            }}
          />
        ) : (
          <div className="mb-4 w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-lg py-10">
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

      {/* status label */}
      <p className="mb-4 text-lg">
        <strong className="text-gray-700">Status:</strong> {status}{" "}
        <div className="relative inline-block text-left">
          <button
            id="dropdown-button"
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Options
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div
            id="dropdown-menu"
            className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden"
          >
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Account settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Support
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                License
              </a>
              <hr className="my-1" />
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </p>
      <p>Point of Contact: fff</p>
      <p>Phone Number: fff</p>
      <p>Email: ff</p>
      <p>
        Cusomter Since:{" "}
        {createdAt ? new Date(createdAt).toLocaleString() : "N/A"}
      </p>

      <div className="flex gap-4">
        <button
          className="text-blue-600 font-medium hover:text-blue-800"
          onClick={handleEditClick}
        >
          Edit
        </button>

        <button
          className="text-red-700 font-bold hover:text-red-500"
          onClick={deleteCompany}
        >
          Delete
        </button>
        <p>{suf}</p>
      </div>
    </div>
  );
};

export default CompanyDetailsComp;
