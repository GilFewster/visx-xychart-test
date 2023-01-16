import React, { ComponentProps } from "react";
import { BarStack as VisxBarStack } from "@visx/xychart";

type Props = ComponentProps<typeof VisxBarStack>;

export const BarStack = (props: Props): JSX.Element => {
  return <VisxBarStack {...props} />;
};
