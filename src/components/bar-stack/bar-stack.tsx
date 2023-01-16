import React, { ComponentProps, useContext } from "react";
import {
  BarSeries,
  BarStack as VisxBarStack,
  DataContext,
} from "@visx/xychart";
import { DataSource, DatumValue, IDatum } from "../../types";
import { Datum } from "../../mock-data/daily-sessions";

type Props = ComponentProps<typeof VisxBarStack>;

export const BarStack = (props: Props): JSX.Element => {
  const ctx = useContext(DataContext);

  console.log(ctx);
  return <VisxBarStack {...props} />;
};
