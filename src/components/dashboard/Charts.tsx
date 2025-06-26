import React, { useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// The wrapper exports only a default component that at the same time is a
// namespace for the related Props interface (HighchartsReact.Props) and
// RefObject interface (HighchartsReact.RefObject). All other interfaces
// like Options come from the Highcharts module itself.

const options: Highcharts.Options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      type: "line",
      data: [1, 2, 33, 43345, 6345, 23],
    },
  ],
};

// React supports function components as a simple way to write components that
// only contain a render method without any state (the App component in this
// example).

const ChartForDashboard = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
};

export default ChartForDashboard;
