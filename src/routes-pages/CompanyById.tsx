import CompanyCard from "../components/CompanyCard";
import { fetchCompanies } from "../stores/slices/companiesSclice.ts";

const CompByID: React.FC = () => {
  const { companies, isLoading, error } = useSelector(
    (state: RootState) => state.companies
  );

  return (
    <div className="container mx-auto px-4 py-8 overflow-visible">
      <CompanyCard
        name={company.name}
        location="Austin, Texas"
        _id="35215325mjlk31j5hlk"
        status="contract pending"
      />
    </div>
  );
};

export default CompByID;
