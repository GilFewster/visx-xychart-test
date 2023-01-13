import { createContext, useContext, useState } from "react";
import { Datum } from "./mock-data/daily-sessions";
import { Chart2DAxis, DataSource } from "./types";

// import { Chart2DAxis, DataSource, FieldType } from './types'

export type XYChartContextConfig = {
  dataSource: DataSource<any>;
  valueAxis: Chart2DAxis;
  animate?: boolean;
};

type Props = {
  children: React.ReactNode;
  config: XYChartContextConfig;
};

export type XYChartContextType<D extends Datum> = {
  dataSource: DataSource<D>;
  getFieldAxis: (fieldType: "values" | "dimensions") => Chart2DAxis;
  valueAxis: Chart2DAxis;
  dimensionAxis: Chart2DAxis;
};

const XYChartContext = createContext<XYChartContextType<any> | undefined>(
  undefined
);

const XYChartContextProvider = ({ children, config }: Props): JSX.Element => {
  const [valueAxis] = useState(config.valueAxis);
  const [dataSource] = useState<DataSource<any>>(config.dataSource);
  const [dimensionAxis] = useState<Chart2DAxis>(
    config.valueAxis === "x" ? "y" : "x"
  );
  const [animate] = useState(config.animate);

  const getFieldAxis = (fieldType: "values" | "dimensions"): Chart2DAxis =>
    fieldType === "values" ? valueAxis : dimensionAxis;

  const value = {
    valueAxis,
    dataSource,
    dimensionAxis,
    getFieldAxis,
    animate,
  };

  return (
    <XYChartContext.Provider value={value}>{children}</XYChartContext.Provider>
  );
};

const useXYChartContext = (): XYChartContextType<any> => {
  const context = useContext(XYChartContext);
  if (!context) {
    throw new Error("Must be used inside an XYChart component");
  }
  return context;
};

export { useXYChartContext, XYChartContextProvider };
