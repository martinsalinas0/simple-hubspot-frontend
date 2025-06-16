import type React from "react";

const AddCompForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-100 mt-9 ">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Add Company</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Company Name</label>
            <input
              type="text"
              name="fname"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Location</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Company Logo</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="file"
            />
          </div>

          <input
            type="submit"
            value="Submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCompForm;
