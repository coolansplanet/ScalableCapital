import { render, cleanup } from "@testing-library/react";
import TableBody from "../table/components/TableBody";
import React from "react";

afterEach(() => {
  cleanup();
});

test("Table body shows only (and ALWAYS) two decimals, and rounds them accurately", () => {
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

  const { getByText, queryByTagName } = render(
    <table>
      <TableBody data={data} />
    </table>
  );
  //queryByTagName("tr").toHaveLength(3);
  expect(getByText("4.00")).toBeTruthy();
  expect(getByText("5.00")).toBeTruthy();
  expect(getByText("7.00")).toBeTruthy();
  expect(getByText("9.02")).toBeTruthy();
  expect(getByText("10.00")).toBeTruthy();
  //checking thousands with commas:
  expect(getByText("12,000.00")).toBeTruthy();
  expect(getByText("14,000,000.00")).toBeTruthy();
  expect(getByText("12,001.00")).toBeTruthy();
});
