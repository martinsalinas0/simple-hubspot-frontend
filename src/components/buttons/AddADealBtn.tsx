import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AddADealBtn = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <button
        type="button"
        onClick={() => navigate("/add-company")}
        className=" text-white text-2xl bg-green-500 px-4 py-2 m-3 tracking-wider flex items-center gap-2 rounded hover:bg-green-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Add a new deal"
      >
        <IoIosAddCircleOutline aria-hidden="true" />
        <span>Add a Deal</span>
      </button>
    </div>
  );
};

export default AddADealBtn;
