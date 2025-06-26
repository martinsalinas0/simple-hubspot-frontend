import { FaMapLocationDot } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";

//creates the company props to use
interface CompanyProps {
  name: string;
  _id: string;
  location: string;
  logoURL: string;
  status: string;
  createdAt: string;
  pointOfContact: string;
  phoneNumber: string;
  email: string;
  dealAmount: number;
}

const CompanyCardForList: React.FC<CompanyProps> = ({
  name,
  _id,
  location,
  logoURL,
  status,
  createdAt,
  pointOfContact,
  phoneNumber,
  email,
  dealAmount,
}) => {
  return (
    <div className="rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow p-6 relative">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-1 capitalize">
            {name}
          </h2>
          <h3>
            Opened:{" "}
            {new Date(createdAt).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </h3>
          <p className="text-sm text-gray-500">ID: {_id}</p>
        </div>
        <img
          src={logoURL || "none"}
          alt={`${name} logo`}
          className="w-12 h-12 object-contain rounded bg-gray-100 p-1"
        />
        <div
          className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center"
          style={{ display: logoURL ? "none" : "flex" }}
        >
          <span className="text-gray-500 text-xs font-medium">{name}</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 flex items-center">
          <FaMapLocationDot className="mr-3" />
          {location}
        </p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600 flex items-center">
          {" "}
          {dealAmount.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center">
          <span
            className={`flex text-justify px-2.5 py-0.5 rounded-full text-cyan-600 font-medium`}
          >
            {status}
          </span>

          <div className="flex  gap-4">
            <div>
              <Link
                to={`/company/${_id}`}
                className=" uppercase flex-1 text-black hover:text-gray-500"
              >
                <div className="flex flex-row items-center">
                  <p className="mr-2">details</p>
                  <SlOptionsVertical />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCardForList;
