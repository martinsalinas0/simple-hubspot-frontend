import React, { useRef } from "react";
import * as Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";

// The integration exports only a default component that at the same time is a
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
      data: [1, 2, 3, 6, 7, 8, 23, 54, 421, 565, 65, 2, 1],
    },
  ],
};

const OverallData = (props: HighchartsReact.Props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <div className="min-h-3 min-w-4 ">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        {...props}
      />
    </div>
  );
};
// Render your App component into the #root element of the document.

export default OverallData;
