import React, { useState, useRef, useEffect } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";

//creates the company props to use
interface CompanyProps {
  name: string;
  location: string;
  _id: string;
  status: string;
  logoURL?: string;
}

const CompanyCard: React.FC<CompanyProps> = ({
  name,
  location,
  _id,
  status,
  logoURL,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [menuOpen]);

  const handleMenuClick = (action: string) => {
    setMenuOpen(false);

    switch (action) {
      case "edit":
        onEdit?.();
        break;
      case "delete":
        onDelete?.();
        break;
    }
  };

  const getStatusColor = (status: string) => {
    const statusColors: { [key: string]: string } = {
      active: "text-green-600 bg-green-50",
      inactive: "text-gray-600 bg-gray-50",
      pending: "text-yellow-600 bg-yellow-50",
      suspended: "text-red-600 bg-red-50",
    };
    return statusColors[status.toLowerCase()] || "text-gray-600 bg-gray-50";
  };

  return (
    <div className="rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow p-6 relative">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">{name}</h2>
          <p className="text-sm text-gray-500">ID: {_id.slice(0, 8)}...</p>
        </div>
        <img
          src={logoURL || "/vite.svg"}
          alt={`${name} logo`}
          className="w-12 h-12 object-contain rounded"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/vite.svg";
          }}
        />
      </div>

      <div className="mb-4">
        <p className="text-gray-600 flex items-center">
          <FaMapLocationDot className="mr-3" />
          {location}
        </p>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs text-cyan-600 font-medium`}
          >
            {status}
          </span>
          <button
            className="text-gray-400 hover:text-gray-600 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle options menu"
            aria-expanded={menuOpen}
          >
            {" "}
            <SlOptionsVertical />
          </button>
        </div>

        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute right-6 bottom-12 w-48 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50"
            role="menu"
          >
            <div className="py-1" role="none">
              <button
                onClick={() => handleMenuClick("edit")}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Edit Company
              </button>
              <button
                onClick={() => handleMenuClick("view-details")}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                View Details
              </button>
              <div className="border-t my-1"></div>
              <button
                onClick={() => handleMenuClick("delete")}
                className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                role="menuitem"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyCard;
