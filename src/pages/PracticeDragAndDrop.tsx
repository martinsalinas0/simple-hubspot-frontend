import { useState } from "react";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { PracticeColumn4DnD } from "../componentsTestDnD/PracticeColumn4DnD.tsx";
import type {
  Company4DnD,
  CompanyColumn,
  CompanyStage,
} from "../types/types.ts";

const COLUMNS: CompanyColumn[] = [
  { id: "initiated", title: "Initiated" },
  { id: "qualified", title: "Qualified" },
  { id: "contract sent", title: "Contract Sent" },
  { id: "negotiating", title: "Negotiating" },
  { id: "closed won", title: "Closed Won" },
  { id: "closed lost", title: "Closed Lost" },
];

const INITIAL_COMPANIES: Company4DnD[] = [
  {
    id: "1562",
    name: "Company 1",
    location: "Austin, Texas",
    status: "initiated",
  },
  {
    id: "262562",
    name: "Company 2",
    location: "Dallas, Texas",
    status: "qualified",
  },
  {
    id: "3264562",
    name: "Company 3",
    location: "Miami, Florida",
    status: "contract sent",
  },
  {
    id: "46256",
    name: "Company 4",
    location: "New York City",
    status: "negotiating",
  },
  {
    id: "52546",
    name: "Company 5",
    location: "Texas",
    status: "closed won",
  },
  {
    id: "6526",
    name: "Company 6",
    location: "LONDON",
    status: "closed lost",
  },
  {
    id: "65426gafsd26",
    name: "Company 7",
    location: "GERMANY",
    status: "closed won",
  },
];

export default function PracticeDnD() {
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
              <PracticeColumn4DnD
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
