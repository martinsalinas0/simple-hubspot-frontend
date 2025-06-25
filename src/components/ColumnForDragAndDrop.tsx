import { useDroppable } from "@dnd-kit/core";
import type { Company, CompanyColumn } from "../types/types";
import { CompanyCard4DnD } from "./CompanyCardForDragAndDrop";

type ColumnProps = {
  column: CompanyColumn;
  companies: Company[];
};

export function Column4DnD({ column, companies }: ColumnProps) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className="flex w-80 flex-col rounded-lg bg-neutral-600  p-4">
      <h2 className="mb-4 text-xl uppercase text-center border-4 border-dotted  border-orange-200 text-neutral-100 tracking-widest ">
        {column.title}
      </h2>
      <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
        {companies.map((company) => (
          <CompanyCard4DnD key={company._id} company={company} />
        ))}
      </div>
    </div>
  );
}
