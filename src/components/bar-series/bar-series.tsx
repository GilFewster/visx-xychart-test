import React, { useContext } from "react";
import { BarSeries as VisxBarSeries } from "@visx/xychart";
import { DataSource, DatumValue, IDatum } from "../../types";

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
    <VisxBarSeries xAccessor={xAccessor} yAccessor={yAccessor} {...props} />
  );
};
