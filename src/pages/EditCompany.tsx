import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import type { AppDispatch } from "../stores/configureStore";
import { getCompById } from "../stores/slices/companySlice";

const EditCompany = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  //get single comp
  useEffect(() => {
    dispatch(getCompById(id));
  }, [dispatch, id]);

  const [compName, setCompName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [logoURL, setLogoURL] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const [oldCompName, setOldCompName] = useState<string>("");
  const [oldLocation, setOldLocation] = useState<string>("");
  const [oldLogoURL, setOldLogoURL] = useState<string>("");
  const [oldStatus, setOldStatus] = useState<string>("");

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/company/${id}`
        );
        const data = response.data.company;
        setCompName(data.name);
        setLocation(data.location);
        setLogoURL(data.logoURL);
        setStatus(data.status);
        setOldCompName(data.name);
        setOldLocation(data.location);
        setOldLogoURL(data.logoURL);
        setOldStatus(data.status);
      } catch (err) {
        console.error("Failed to fetch company:", err);
      }
    };

    if (id) fetchCompany();
  }, [id]);

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!compName && !location && !status && !logoURL) {
      alert("Nothing to update.");
      return;
    }

    try {
      console.log(id);
      const response = await axios.put(
        `http://localhost:8000/api/company/update/${id}`,
        {
          name: compName,
          location,
          status,
          logoURL,
        }
      );

      alert(response.data.message);
      console.log("Updated company:", response.data.updated);
      navigate(`/company/${id}`);
    } catch (err: any) {
      console.error("Update failed:", err);
      alert(err.response?.data?.message || "Failed to update company.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Currently Editing:</h2>
      <div className="p-4 border rounded bg-gray-50 mb-4">
        <p>
          <strong>Name:</strong> {oldCompName}
        </p>
        <p>
          <strong>Location:</strong> {oldLocation}
        </p>
        <p>
          <strong>Status:</strong> {oldStatus}
        </p>
        <p>
          <strong>Logo:</strong>{" "}
          <a href={logoURL} target="_blank">
            {oldLogoURL}
          </a>
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-4">Edit Company</h2>
      <form onSubmit={handleEditSubmit} className="space-y-4">
        <input
          type="text"
          value={compName}
          onChange={(e) => setCompName(e.target.value)}
          className="w-full border p-2"
          placeholder={compName}
          required
        />
        <label aria-label="{oldLocation}">{location}</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-2 text-blue-500"
          placeholder={location}
          required
        />
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border p-2"
          placeholder={status}
          required
        />
        <input
          type="text"
          value={logoURL}
          onChange={(e) => setLogoURL(e.target.value)}
          className="w-full border p-2"
          placeholder={status}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditCompany;
