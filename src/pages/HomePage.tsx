import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 bg-neutral-200 py-8">
      <p className="text-gray-600 text-center text-7xl mb-9 bg-orange-200 rounded-2xl p-2 font-chicle">
        Simplified Hubspot CRM!
      </p>
      <p className="text-center text-blue-600 text-xl">
        Manage Customers with ease!
      </p>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center border-8 rounded-lg border-orange-300 justify-center min-h-96 bg-gray-100">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border-4 border-dotted border-red-300">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-6 text-center border-dashed border-2 rounded-md">
                Admin View
              </div>
              <p className="text-gray-700 text-base">
                <Link
                  to="/companies"
                  className="text-gray-800 font-bold underline m-9"
                >
                  View all companies here...
                </Link>
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mt-6"></div>
      </div>
    </div>
  );
};

export default HomePage;
