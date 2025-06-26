import { useEffect } from "react";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";

import type { CompanyColumn, CompanyStage } from "../types/types";
import { useAppDispatch } from "../hooks/hooks";
import { fetchCompanies, updateComp } from "../stores/slices/companySlice";
import { useSelector } from "react-redux";
import type { RootState } from "../stores/configureStore";

import { Column4DnD } from "../components/ColumnForDragAndDrop";
import { useNavigate } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";

const COLUMNS: CompanyColumn[] = [
  { id: "initiated", title: "Initiated" },
  { id: "qualified", title: "Qualified" },
  { id: "contract sent", title: "Contract Sent" },
  { id: "negotiating", title: "Negotiating" },
  { id: "closed won", title: "Closed Won" },
  { id: "closed lost", title: "Closed Lost" },
];

export default function DashboardDragAndDrop() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  const { companies, isLoading, error } = useSelector(
    (state: RootState) => state.companies
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const companyId = active.id as string;
    const newStatus = over.id as CompanyStage;

    const movedCompany = companies.find((company) => company._id === companyId);
    if (!movedCompany || movedCompany.status === newStatus) return;

    dispatch(updateComp({ id: companyId, data: { status: newStatus } }));
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading companies: {error}</p>;

  return (
    <div className="p-9">
      <div>
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
      <div className="p-3 border-4 border-neutral-950 border-opacity-25 rounded-md bg-neutral-900 bg-opacity-25">
        <div className="flex gap-8">
          <DndContext onDragEnd={handleDragEnd}>
            {COLUMNS.map((column) => (
              <Column4DnD
                key={column.id}
                column={column}
                companies={companies.filter(
                  (company) => company.status === column.id
                )}
              />
            ))}
          </DndContext>
        </div>
      </div>
    </div>
  );
}
