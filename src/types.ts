import { PickD3Scale } from "@visx/scale";

export type DatumValue = string | number | boolean;
export interface IDatum {
  [key: string]: DatumValue;
}

export type DataSource<D extends IDatum> = D[];
export type DatumKey<D extends IDatum> = keyof D;

const getValueAt = <D extends IDatum>(
  s: DataSource<D>,
  i: number,
  key: DatumKey<D>
) => s[i][key];
const getValue = <D extends IDatum>(datum: D, key: DatumKey<D>) => datum[key];

export enum ScaleTypes {
  linear = "linear",
  band = "band",
}

export type ScaleBand = PickD3Scale<"band", string>;
export type ScaleLinear = PickD3Scale<"linear", number, number>;
export type Chart2DAxis = "x" | "y";
