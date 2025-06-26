import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface Company {
  name: string;
  createdAt: string;
}

interface DateCreatedChartProps {
  companies: Company[];
}

const DateCreatedChart: React.FC<DateCreatedChartProps> = ({ companies }) => {
  const countsByMonth: Record<string, number> = {};

  companies.forEach(({ createdAt }) => {
    const date = new Date(createdAt);
    const monthYear = date.toLocaleString("default", {
      month: "short",
      year: "numeric",
    });
    countsByMonth[monthYear] = (countsByMonth[monthYear] ?? 0) + 1;
  });

  const sortedMonths = Object.keys(countsByMonth).sort((a, b) => {
    return new Date(a).getTime() - new Date(b).getTime();
  });

  const data = sortedMonths.map((month) => countsByMonth[month]);

  const chartOptions: Highcharts.Options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Companies Created Per Month",
    },
    xAxis: {
      categories: sortedMonths,
      title: { text: "Month" },
    },
    yAxis: {
      title: {
        text: "Number of Companies",
      },
      allowDecimals: false,
    },
    series: [
      {
        name: "Companies Created",
        type: "column",
        data,
        color: "blue",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default DateCreatedChart;
