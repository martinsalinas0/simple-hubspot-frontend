import { useState } from "react";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { Column4DnD } from "../components/Column4DnD.tsx";
import type { Company4DnD, CompanyColumn, CompanyStage } from "../types/types";

const COLUMNS: CompanyColumn[] = [
  { id: "INITIATED", title: "Initiated" },
  { id: "QUALIFIED", title: "Qualified" },
  { id: "CONTRACT_SENT", title: "Contract Sent" },
  { id: "NEGOTIATING", title: "Negotiating" },
  { id: "CLOSED_WON", title: "Closed Won" },
  { id: "CLOSED_LOST", title: "Closed Lost" },
];

const INITIAL_COMPANIES: Company4DnD[] = [
  {
    id: "1562",
    compName: "Company 1",
    location: "Austin, Texas",
    status: "INITIATED",
  },
  {
    id: "262562",
    compName: "Company 2",
    location: "Dallas, Texas",
    status: "QUALIFIED",
  },
  {
    id: "3264562",
    compName: "Company 3",
    location: "Miami, Florida",
    status: "CONTRACT_SENT",
  },
  {
    id: "46256",
    compName: "Company 4",
    location: "New York City",
    status: "NEGOTIATING",
  },
  {
    id: "52546",
    compName: "Company 5",
    location: "Texas",
    status: "CLOSED_WON",
  },
  {
    id: "6526",
    compName: "Company 6",
    location: "LONDON",
    status: "CLOSED_LOST",
  },
  {
    id: "65426gafsd26",
    compName: "Company 7",
    location: "GERMANY",
    status: "CLOSED_WON",
  },
];

export default function DragAndDrop() {
  const [companies, setCompanies] = useState<Company4DnD[]>(INITIAL_COMPANIES);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const companyId = active.id as string;
    const newStatus = over.id as CompanyStage;

    setCompanies((prevCompanies) =>
      prevCompanies.map((company) =>
        company.id === companyId ? { ...company, status: newStatus } : company
      )
    );
  }

  return (
    <div className="p-9">
      <div className=" p-3 border-4 border-neutral-950 border-opacity-25 rounded-md bg-neutral-900 bg-opacity-25 border-spacing-56 border-">
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
