import React from "react";
import { BarSeries as Visx_BarSeries } from "@visx/xychart";
import { useXYChartContext } from "../../xy-chart-context";
import { DataSource, DatumKey, DatumValue, IDatum } from "../../types";

type Props<D extends IDatum> = {
  data: DataSource<D>;
  dataKey: string;
  accessors: {
    value: (d: D) => DatumValue;
    dimension: (d: D) => DatumValue;
  };
};

export const BarSeries = <D extends IDatum>({
  accessors,
  ...props
}: Props<D>): JSX.Element => {
  const xAccessor = accessors.dimension;
  const yAccessor = accessors.value;

  return (
    <Visx_BarSeries xAccessor={xAccessor} yAccessor={yAccessor} {...props} />
  );
};
