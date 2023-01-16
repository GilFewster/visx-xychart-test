import React, { ComponentProps, useContext } from "react";
import { BarStack as VisxBarStack, DataContext } from "@visx/xychart";

type Props = ComponentProps<typeof VisxBarStack>;

export const BarStack = (props: Props): JSX.Element => {
  const ctx = useContext(DataContext);

  console.log(ctx);
  return <VisxBarStack {...props} />;
};
