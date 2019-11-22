import Table from "../table";
import Chart from "../chart";

export const routes = [
  { exact: true, path: "/", component: Table },
  {
    exact: false,
    path: "/table",
    component: Table
  },
  {
    exact: false,
    path: "/chart",
    component: Chart
  }
];

export const menu = [
  { name: "Table", to: "/table" },
  { name: "Chart", to: "/chart" }
];

export const selectors = [
  {
    id: "riskLevel",
    label: "Risk level",
    min: 3,
    max: 25,
    increment: 1
  },
  {
    id: "years",
    label: "Years",
    min: 1,
    max: 50,
    increment: 1
  },
  {
    id: "initialSum",
    label: "Initial Sum",
    min: 10000,
    max: 50000,
    increment: 10000
  },
  {
    id: "monthlySum",
    label: "Monthly Sum",
    min: 100,
    max: 2000,
    increment: 100
  }
];
