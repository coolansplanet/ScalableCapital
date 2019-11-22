import { render, cleanup } from "@testing-library/react";
import TableBody from "../table/components/TableBody";
import React from "react";

afterEach(() => {
  cleanup();
});

test("Table body fixed numbers in two decimals, and split thousands with commas", () => {
  const data = [
    { month: 1, dataGood: 4.001, dataMedian: 4.997, dataBad: 7 },
    { month: 2, dataGood: 9.019, dataMedian: 9.997, dataBad: 9 },
    {
      month: 3,
      dataGood: 12000,
      dataMedian: 14000000,
      dataBad: 12000.995
    }
  ];

  const { getByText } = render(
    <table>
      <TableBody data={data} />
    </table>
  );
  expect(getByText("4.00")).toBeTruthy();
  expect(getByText("5.00")).toBeTruthy();
  expect(getByText("7.00")).toBeTruthy();
  expect(getByText("9.02")).toBeTruthy();
  expect(getByText("10.00")).toBeTruthy();
  expect(getByText("12,000.00")).toBeTruthy();
  expect(getByText("14,000,000.00")).toBeTruthy();
  expect(getByText("12,001.00")).toBeTruthy();
});
