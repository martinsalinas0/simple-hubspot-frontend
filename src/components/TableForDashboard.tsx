import { useEffect } from "react";
import { DndContext } from "@dnd-kit/core";

import type { CompanyColumn } from "../types/types";
import { useAppDispatch } from "../hooks/hooks";
import { fetchCompanies } from "../stores/slices/companySlice";
import { useSelector } from "react-redux";
import type { RootState } from "../stores/configureStore";

import { Column4DnD } from "../components/ColumnForDragAndDrop";

const COLUMNS: CompanyColumn[] = [
  { id: "initiated", title: "Initiated" },
  { id: "qualified", title: "Qualified" },
  { id: "contract sent", title: "Contract Sent" },
  { id: "negotiating", title: "Negotiating" },
  { id: "closed won", title: "Closed Won" },
  { id: "closed lost", title: "Closed Lost" },
];

export default function TableforDasboard() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  const { companies, isLoading, error } = useSelector(
    (state: RootState) => state.companies
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading companies: {error}</p>;

  return (
    <div className="p-9">
      <div className="p-3 border-4 border-neutral-950 border-opacity-25 rounded-md bg-neutral-900 bg-opacity-25">
        <div className="flex gap-8">
          <DndContext>
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
