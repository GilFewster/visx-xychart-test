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
      <header>
        <h3>Simple Bar Series</h3>
        <h3>Stacked Bar Series</h3>
      </header>
      <section>
        <h2>Visx XyChart</h2>
        <VisxXYChart
          {...chartSize}
          xScale={{ type: "band", paddingInner: 0.1 }}
          yScale={{ type: "linear" }}
        >
          <VisxBarSeries
            dataKey="bar-1"
            data={data}
            xAccessor={(d: Datum) => d["date"]}
            yAccessor={(d: Datum) => d["totalVisits"]}
          />
        </VisxXYChart>
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
        <h2>Wrapped component</h2>
        <XYChart
          dataSource={data}
          {...chartSize}
          xScale={{ type: "band", paddingInner: 0.1 }}
          yScale={{ type: "linear" }}
        >
          <BarSeries
            data={data}
            dataKey="bar-2-2"
            accessors={{
              value: (d: Datum) => d["totalVisits"],
              dimension: (d: Datum) => d["date"],
            }}
          />
        </XYChart>
        <XYChart
          dataSource={data}
          {...chartSize}
          xScale={{ type: "band", paddingInner: 0.1 }}
          yScale={{ type: "linear" }}
        >
          <BarStack>
            <BarSeries
              data={data}
              dataKey="bar-2-1"
              accessors={{
                dimension: (d: Datum) => d["date"],
                value: (d: Datum) => d["specialVisits"],
              }}
            />
            <BarSeries
              data={data}
              dataKey="bar-2-2"
              accessors={{
                dimension: (d: Datum) => d["date"],
                value: (d: Datum) => d["totalVisits"],
              }}
            />
          </BarStack>
        </XYChart>
      </section>
    </div>
  );
}

export default App;
