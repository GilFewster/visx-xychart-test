import React, { ComponentProps } from "react";
import { XYChart as VisxXYChart } from "@visx/xychart";
import { DataSource, IDatum } from "../../types";

type XScaleConfig = ComponentProps<typeof VisxXYChart>["xScale"];
type YScaleConfig = ComponentProps<typeof VisxXYChart>["yScale"];

type Props<D extends IDatum> = {
  dataSource: DataSource<D>;
  width: number;
  height: number;
  xScale: XScaleConfig;
  yScale: YScaleConfig;
  children: React.ReactNode;
};

export const XYChart = <D extends IDatum>({
  dataSource,
  width,
  height,
  xScale,
  yScale,
  children,
}: Props<D>): JSX.Element => {
  return (
    <VisxXYChart width={width} height={height} xScale={xScale} yScale={yScale}>
      {children}
    </VisxXYChart>
  );
};
