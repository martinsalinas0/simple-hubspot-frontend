// components/DraggableCard.tsx
import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./Constants";

export interface CardProps {
  id: string;
  text: string;
}

const DraggableCard: React.FC<CardProps> = ({ id, text }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { id, text },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <tr
      ref={dragRef}
      className={`transition-opacity ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <td className="p-4 border">{text}</td>
    </tr>
  );
};

export default DraggableCard;
