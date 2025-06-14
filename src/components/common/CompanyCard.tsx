import React, { useState, useRef, useEffect } from "react";

interface CompProps {
  name: string;
  location: string;
  _id: string;
  status: string;
}

const CompanyCard: React.FC<CompProps> = ({ name, location, _id, status }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex w-full justify-center py-11">
      <div className="rounded-2xl w-full max-w-2xl overflow-visible bg-white shadow-lg p-10 relative">
        <div className="flex justify-center mb-6">
          <img
            src="/vite.svg"
            alt="company logo"
            className="w-24 h-24 object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center">Company Profile</h1>
        <h2 className="text-2xl font-semibold mb-3">{name}</h2>
        <p className="text-gray-600 mb-2 text-lg">Company ID: {_id}</p>
        <p className="text-gray-600 mb-6 text-lg">{location}</p>

        <div className="border-t pt-6 relative">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-medium">
              Current State:{" "}
              <span className="italic text-gray-600 font-normal">{status}</span>
            </h3>
            <button
              className="text-base text-blue-600 underline"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              Options
            </button>
          </div>

          {menuOpen && (
            <div
              ref={menuRef}
              className="absolute right-0 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Account settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  License
                </a>
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
