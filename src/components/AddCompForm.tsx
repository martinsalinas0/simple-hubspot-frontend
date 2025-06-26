import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCompany, clearError } from "../stores/slices/companySlice";
import type { AppDispatch, RootState } from "../stores/configureStore";
import { useNavigate } from "react-router-dom";

const AddCompForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { isLoading, error } = useSelector(
    (state: RootState) => state.companies
  );

  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [logoURL, setLogoURL] = useState<string>("");
  const [pointOfContact, setPointOfContact] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dealAmount, setDealAmount] = useState<number>(0);
  const [status] = useState<string>("initiated");

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await dispatch(
        addCompany({
          name,
          location,
          logoURL: logoURL || "",
          pointOfContact,
          email,
          phoneNumber,
          dealAmount,
          status,
        })
      ).unwrap();
      navigate(`/company/${result._id}`);
    } catch (err) {
      console.error("Failed to add company:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-600">Add Company</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="Company Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Company Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2-medium mb-2">
              Deal Amount: (USD)
            </label>
            <input
              type="number"
              name="dealAmount"
              value={dealAmount}
              onChange={(e) => setDealAmount(parseFloat(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="$0.00 USD"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Location:</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="City and state"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Point of Contact:
            </label>
            <input
              type="text"
              name="point of contact"
              value={pointOfContact}
              onChange={(e) => setPointOfContact(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="First and Last Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Phone Number:
            </label>
            <input
              type="tel"
              name="phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="000-000-0000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="email@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Company Logo URL
            </label>
            <input
              type="url"
              name="logoURL"
              value={logoURL}
              onChange={(e) => setLogoURL(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
