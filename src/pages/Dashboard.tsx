import { useSelector } from "react-redux";
import ChartForDashboard from "../components/dashboard/DealAmountChart";
import TableforDasboard from "../components/TableForDashboard";
import type { RootState } from "../stores/configureStore";

const Dashboard = () => {
  const { companies, count } = useSelector(
    (state: RootState) => state.companies
  );
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-gray-600">
            Monitor your sales activity and performance
          </p>
          <div>
            <h3>Key Data</h3>
            <p>Total Deals: {count}</p>
            <p>
              Total Amount: $
              {companies.reduce((sum, company) => {
                return sum + company.dealAmount;
              }, 0)}
            </p>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-">
          <TableforDasboard />
          <div className="bg-blue-50 border border-blue-400  rounded">
            <p className="text-sm text-blue-700 font-medium p-2">
              <span className="font-semibold">Note:</span> This table is
              read-only
            </p>
          </div>
        </div>
        <ChartForDashboard companies={companies} />
      </div>
    </div>
  );
};

export default Dashboard;
