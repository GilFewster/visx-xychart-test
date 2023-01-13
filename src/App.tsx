import React from "react";

import {
  BarSeries as Visx_BarSeries,
  BarStack,
  XYChart as Visx_XYChart,
} from "@visx/xychart";

import { dailySessions, Datum } from "./mock-data/daily-sessions";
import { XYChart } from "./components/xy-chart";
import { BarSeries } from "./components/bar-series";
import { IDatum } from "./types";

function App() {
  const data = dailySessions;
  const chartSize = { width: 450, height: 300 };

  return (
    <div className="App">
      <section>
        <Visx_XYChart
          {...chartSize}
          xScale={{ type: "band", paddingInner: 0.1 }}
          yScale={{ type: "linear" }}
        >
          <BarStack>
            <Visx_BarSeries
              dataKey="bar-1"
              data={data}
              xAccessor={(d: Datum) => d["date"]}
              yAccessor={(d: Datum) => d["specialVisits"]}
            />
            <Visx_BarSeries
              dataKey="bar-2"
              data={data}
              xAccessor={(d: Datum) => d["date"]}
              yAccessor={(d: Datum) => d["totalVisits"]}
            />
          </BarStack>
        </Visx_XYChart>
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
