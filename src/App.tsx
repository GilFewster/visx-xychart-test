import React from "react";

import {
  BarSeries as VisxBarSeries,
  BarStack,
  XYChart as VisxXYChart,
} from "@visx/xychart";

import { dailySessions, Datum } from "./mock-data/daily-sessions";
import { XYChart } from "./components/xy-chart";
import { BarSeries } from "./components/bar-series";

function App() {
  const data = dailySessions;
  const chartSize = { width: 450, height: 300 };

  return (
    <div className="App">
      <section>
        <VisxXYChart
          {...chartSize}
          xScale={{ type: "band", paddingInner: 0.1 }}
          yScale={{ type: "linear" }}
        >
          <BarStack>
            <VisxBarSeries
              dataKey="bar-1"
              data={data}
              xAccessor={(d: Datum) => d["date"]}
              yAccessor={(d: Datum) => d["specialVisits"]}
            />
            <VisxBarSeries
              dataKey="bar-2"
              data={data}
              xAccessor={(d: Datum) => d["date"]}
              yAccessor={(d: Datum) => d["totalVisits"]}
            />
          </BarStack>
        </VisxXYChart>
      </section>
      <section>
        <XYChart
          dataSource={data}
          {...chartSize}
          xScale={{ type: "band", paddingInner: 0.1 }}
          yScale={{ type: "linear" }}
        >
          <BarSeries
            data={data}
            dataKey="bar-2-1"
            accessors={{
              value: (d: Datum) => d["totalVisits"],
              dimension: (d: Datum) => d["date"],
            }}
          />
        </XYChart>
      </section>
    </div>
  );
}

export default App;
