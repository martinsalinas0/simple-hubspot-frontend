import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCompany } from "../stores/slices/companiesSclice";
import type { AppDispatch, RootState } from "../stores/configureStore";

const AddCompForm: React.FC = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [logoURL, setLogoURL] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const isLoading = useSelector(
    (state: RootState) => state.companies.isLoading
  );
  const error = useSelector((state: RootState) => state.companies.error);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !location || !logoURL) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      await dispatch(
        addCompany({
          name,
          location,
          logoURL,
          status: "initiated",
        })
      ).unwrap();

      setName("");
      setLocation("");
      setLogoURL("");
      alert("Company added!");
    } catch (err) {
      console.error("Failed to add company:", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-9">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Add Company</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">Company Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="City and state"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Company Logo URL</label>
            <input
              type="text"
              name="logoURL"
              value={logoURL}
              onChange={(e) => setLogoURL(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="if no url, leave blank"
            />
            <p className="text-red-600">*all fields required</p>
          </div>

          <input
            type="submit"
            value={isLoading ? "Submitting..." : "Submit"}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            disabled={isLoading}
          />

          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddCompForm;
