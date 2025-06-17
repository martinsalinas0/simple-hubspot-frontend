import CompanyCard from "../components/CompanyCard";

const SingleCompany: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 overflow-visible">
      <CompanyCard
        name="Example Company"
        location="Austin, Texas"
        _id="35215325mjlk31j5hlk"
        status="contract pending"
      />
    </div>
  );
};

export default SingleCompany;
