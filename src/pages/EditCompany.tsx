import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import type { AppDispatch } from "../stores/configureStore";
import { getCompById, updateComp } from "../stores/slices/companySlice";

const EditCompany = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  //get single comp
  useEffect(() => {
    if (id) {
      dispatch(getCompById(id));
    }
  }, [dispatch, id]);

  const [compName, setCompName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [logoURL, setLogoURL] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [pointOfContact, setPointOfContact] = useState<string>("");
  const [customerEmail, setCustomerEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [dealAmount, setDealAmount] = useState<number>(0);

  const [oldCompName, setOldCompName] = useState<string>("");
  const [oldLocation, setOldLocation] = useState<string>("");
  const [oldLogoURL, setOldLogoURL] = useState<string>("");
  const [oldStatus, setOldStatus] = useState<string>("");
  const [oldPointOfContact, setOldPointOfContact] = useState<string>("");
  const [oldCustomerEmail, setOldCustomerEmail] = useState<string>("");
  const [oldPhoneNumber, setOldPhoneNumber] = useState<string>("");
  const [oldDealAmount, setOldDealAmount] = useState<number>(0);

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
        setPointOfContact(data.pointOfContact);
        setCustomerEmail(data.email);
        setPhoneNumber(data.phoneNumber);
        setDealAmount(data.dealAmount);

        setOldCompName(data.name);
        setOldLocation(data.location);
        setOldLogoURL(data.logoURL);
        setOldStatus(data.status);
        setOldPointOfContact(data.pointOfContact);
        setOldCustomerEmail(data.email);
        setOldPhoneNumber(data.phoneNumber);
        setOldDealAmount(data.dealAmount);
      } catch (err) {
        console.error("Failed to fetch company:", err);
      }
    };

    if (id) fetchCompany();
  }, [id]);

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!id) {
      alert("Missing company ID.");
      return;
    }

    if (!compName && !location && !status && !logoURL) {
      alert("Nothing to update.");
      return;
    }

    try {
      await dispatch(
        updateComp({
          id,
          data: {
            name: compName,
            location,
            status,
            logoURL,
            pointOfContact,
            phoneNumber,
            email: customerEmail,
            dealAmount: dealAmount,
          },
        })
      ).unwrap();

      alert("Company updated successfully.");
      navigate(`/company/${id}`);
    } catch (err) {
      alert("Failed to update company.");
      console.error(err);
    }
  };

  const handleDelete = async () => {
    if (!id) return;

    if (!window.confirm("Are you sure you want to delete this company?"))
      return;

    try {
      await axios.delete(`http://localhost:8000/api/company/delete/${id}`);
      alert("Company deleted successfully.");
      navigate("/companies");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete company.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded  bg-orange-400 bg-opacity-80 shadow">
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
          <strong>POC:</strong> {oldPointOfContact}
        </p>
        <p>
          <strong>Email:</strong> {oldCustomerEmail}
        </p>
        <p>
          <strong>Phone Number:</strong> {oldPhoneNumber}
        </p>
        <p>
          <strong>Deal Amount: </strong> {oldDealAmount}
        </p>
        <p>
          <strong>Logo:</strong>{" "}
          <a href={logoURL} target="_blank">
            {oldLogoURL}
          </a>
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-4">Edit Company</h2>
      <form onSubmit={handleEditSubmit} className="space-y-4 ">
        <label>
          Company Name:
          <input
            type="text"
            value={compName}
            onChange={(e) => setCompName(e.target.value)}
            className="w-full border p-2"
            placeholder={compName}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border p-2 "
            placeholder={location}
            required
          />
        </label>
        <label>
          POC:
          <input
            type="text"
            value={pointOfContact}
            onChange={(e) => setPointOfContact(e.target.value)}
            className="w-full border p-2 "
            placeholder={pointOfContact}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            className="w-full border p-2 "
            placeholder={customerEmail}
            required
          />{" "}
        </label>
        <label>
          Phone Number
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full border p-2"
            placeholder={phoneNumber}
            required
          />
        </label>
        {/* <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border p-2"
          placeholder={status}
          required
        /> */}
        <label>
          {" "}
          Logo URL:
          <input
            type="text"
            value={logoURL}
            onChange={(e) => setLogoURL(e.target.value)}
            className="w-full border p-2"
            placeholder="if no URL, leave blank"
          />
        </label>
        <label>
          Deal Amount $(USD)
          <input
            type="number"
            value={dealAmount}
            onChange={(e) => setDealAmount(parseFloat(e.target.value))}
            className="w-full border p-2"
            placeholder={String(dealAmount)}
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2  m-3 rounded hover:bg-blue-800"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={() => navigate(`/company/${id}`)}
          className="bg-neutral-500 text-white px-4 py-2  m-3 rounded hover:bg-neutral-800"
        >
          cancel
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2  m-3 rounded hover:bg-red-900"
        >
          DELETE
        </button>
      </form>
    </div>
  );
};

export default EditCompany;
