import { FaMapLocationDot } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";

//creates the company props to use
interface CompanyProps {
  name: string;
  location: string;
  _id: string;
  status: string;
  logoURL?: string;
  createdAt?: string;
}

const CompanyCardForList: React.FC<CompanyProps> = ({
  name,
  location,
  _id,
  status,
  logoURL,
  createdAt,
}) => {
  return (
    <div className="rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow p-6 relative">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">{name}</h2>
          <p className="text-sm text-gray-500">ID: {_id}</p>
        </div>

        <img
          src={logoURL}
          alt={`${name} logo`}
          className="w-12 h-12 object-contain rounded bg-gray-100 p-1"
        />
        <div
          className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center"
          style={{ display: logoURL ? "none" : "flex" }}
        >
          <span className="text-gray-500 text-xs font-medium">
            {name.charAt(0).toUpperCase()}
          </span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 flex items-center">
          <FaMapLocationDot className="mr-3" />
          {location}
        </p>
        {/* <span>CREATed AT{createdAt}</span> */}
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
                className="font-bold   flex-1 hover:text-gray-600"
              >
                <p>details</p>
                <SlOptionsVertical />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCardForList;
