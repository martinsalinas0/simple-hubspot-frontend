import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface Company {
  name: string;
  dealAmount: number;
}

interface DateCreatedChartProps {
  companies: Company[];
}

const DateCreatedChart: React.FC<DateCreatedChartProps> = ({ companies }) => {
  const chartOptions: Highcharts.Options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Company Deal Amounts",
    },
    xAxis: {
      categories: companies.map((company) => company.name),
      title: { text: "Companies" },
    },
    yAxis: {
      title: {
        text: "Deal Amount (USD)",
      },
    },
    series: [
      {
        name: "Deal Amount",
        type: "line",
        data: companies.map((company) => company.createdAt),
        color: "green",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default DateCreatedChart;
