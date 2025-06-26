import { useDraggable } from "@dnd-kit/core";
import type { Company } from "../types/types";

type CompCardProps = {
  company: Company;
};

export function CompanyCard4DnD({ company }: CompCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: company._id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md"
      style={style}
    >
      <h3 className="font-medium text-neutral-100">{company.name}</h3>
      <p className="mt-2 text-sm text-neutral-400">{company.location}</p>
      <p>{company.dealAmount}</p>
      <p>
        {company.createdAt
          ? new Date(company.createdAt).toLocaleString()
          : "n/a"}
      </p>
      <p>Close Date</p>
    </div>
  );
}
