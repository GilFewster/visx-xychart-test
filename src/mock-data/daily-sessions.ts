import { DataSource, IDatum } from "../types";

export interface Datum extends IDatum {
  date: string;
  uniqueVisitors: number;
  totalVisits: number;
  specialVisits: number;
}

export const dailySessions: DataSource<Datum> = [
  {
    date: "2022-12-01",
    uniqueVisitors: 4,
    totalVisits: 9,
    specialVisits: 2,
  },
  {
    date: "2022-12-02",
    uniqueVisitors: 32,
    totalVisits: 58,
    specialVisits: 13,
  },
  {
    date: "2022-12-03",
    uniqueVisitors: 11,
    totalVisits: 19,
    specialVisits: 6,
  },
  {
    date: "2022-12-04",
    uniqueVisitors: 10,
    totalVisits: 24,
    specialVisits: 11,
  },
  {
    date: "2022-12-05",
    uniqueVisitors: 28,
    totalVisits: 39,
    specialVisits: 4,
  },
  {
    date: "2022-12-06",
    uniqueVisitors: 8,
    totalVisits: 13,
    specialVisits: 5,
  },
  {
    date: "2022-12-07",
    uniqueVisitors: 7,
    totalVisits: 21,
    specialVisits: 6,
  },
];
