import { useDraggable } from "@dnd-kit/core";
import type { Company4DnD } from "../types/types";

type CompCardProps = {
  company: Company4DnD;
};

export function PracticeCompanyCard4DnD({ company }: CompCardProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: company.id,
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
    </div>
  );
}
