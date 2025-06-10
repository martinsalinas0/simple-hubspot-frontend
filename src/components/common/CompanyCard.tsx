import type React from "react";

const CompanyCard: React.FC = () => {
  return (
    <body className="flex w-full justify-center py-11">
      <div className="rounded-2xl w-auto overflow-hidden">
        <img src="./assets/react.svg" alt="" />
        <h1>Company Name</h1>
      </div>
    </body>
  );
};

export default CompanyCard;
