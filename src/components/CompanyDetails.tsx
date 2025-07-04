import axios from "axios";
import { useNavigate } from "react-router-dom";

interface CompanyProps {
  name: string;
  location: string;
  _id: string;
  status: string;
  logoURL?: string;
  createdAt?: string;
  pointOfContact?: string;
  phoneNumber?: string;
  customerEmail?: string;
  dealAmount: number;
}

const CompanyDetailsComp: React.FC<CompanyProps> = ({
  name,
  location,
  _id,
  status,
  logoURL,
  createdAt,
  pointOfContact,
  phoneNumber,
  customerEmail,
  dealAmount,
}) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/company/edit/${_id}`, {
      state: {
        name,
        location,
        status,
        logoURL,
        createdAt,
        pointOfContact,
        phoneNumber,
        customerEmail,
        dealAmount,
      },
    });
  };

  // console.log("createdAt:fff", createdAt);
  // console.log(name);

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
        <strong className="text-gray-700 ">Deal Amount: </strong>
        {dealAmount.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
        <p>Current Deal:</p>
      </p>
      <hr className="my-3" />

      <p className="mb-2 text-lg">
        <strong className="text-gray-700">ID:</strong> {_id}
      </p>
      <hr className="my-3" />

      {/* status label */}
      <p className="mb-4 text-lg">
        <strong className="text-gray-700">Status:</strong> <em>{status}</em>{" "}
      </p>
      <p>Point of Contact: {pointOfContact}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Email: {customerEmail}</p>
      <p>
        Cusomter Since:{" "}
        {createdAt ? new Date(createdAt).toLocaleString() : "N/A"}
      </p>

      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2  m-3 rounded hover:bg-blue-800"
          onClick={handleEditClick}
        >
          Edit
        </button>

        <button
          className="bg-red-500 text-white px-4 py-2  m-3 rounded hover:bg-red-900"
          onClick={deleteCompany}
        >
          Delete
        </button>
        <button
          type="button"
          onClick={() => navigate(`/active-companies`)}
          className="bg-neutral-500 text-white px-2 py-2  m-3 rounded hover:bg-neutral-800"
        >
          {" "}
          Back
        </button>
      </div>
    </div>
  );
};

export default CompanyDetailsComp;
