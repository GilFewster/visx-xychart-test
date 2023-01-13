import React, { ComponentProps } from "react";
import { XYChart as Visx_XYChart } from "@visx/xychart";
import { DataSource, IDatum } from "../../types";

type XScaleConfig = ComponentProps<typeof Visx_XYChart>["xScale"];
type YScaleConfig = ComponentProps<typeof Visx_XYChart>["yScale"];

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
    <Visx_XYChart width={width} height={height} xScale={xScale} yScale={yScale}>
      {children}
    </Visx_XYChart>
  );
};
