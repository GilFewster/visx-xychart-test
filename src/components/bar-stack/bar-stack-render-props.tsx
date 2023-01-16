import React, { Component, ComponentProps, JSXElementConstructor } from "react";
import { BarSeries, BarStack as VisxBarStack } from "@visx/xychart";
import { DataSource, DatumValue, IDatum } from "../../types";
import { Datum } from "../../mock-data/daily-sessions";

type Props = {
  // config: {
  //   data: DataSource<Datum>;
  //   dataKey: string;
  //   accessors: {
  //     dimension: (d: Datum) => DatumValue;
  //     value: (d: Datum) => DatumValue;
  //   };
  // }[];
  bars: any;
};

export const BarStackRenderProps = ({ bars, ...props }: Props): JSX.Element => {
  // console.log("BarStack children", children);
  console.log("bars", bars);
  return <VisxBarStack>{bars}</VisxBarStack>;
};
