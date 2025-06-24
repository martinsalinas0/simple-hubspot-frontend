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

      <p className="mb-4 text-lg">
        <strong className="text-gray-700">Status:</strong> {status}
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
