import React from "react";

const AllCompaniesDashboard: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center gap-4 text-center mt-6">
        <div className="border border-black border-dashed w-56 ">
          <ul>
            <li draggable="true">list</li>
            <li>list</li>
          </ul>
        </div>
        <div className="border border-black border-dashed w-56">right</div>
      </div>
    </div>
  );
};

export default AllCompaniesDashboard;

// ✅ create a table in Tailwind CSS
//implement the drag and drop
