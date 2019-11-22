import React from "react";
import numbro from "numbro";
import { bemNamesFactory } from "bem-names";
import "./TableBody.scss";

export default props => {
  const { data } = props;
  const bem = bemNamesFactory("table__body");
  const formatNumber = oneNumber => {
    return numbro(oneNumber).format({
      thousandSeparated: true,
      mantissa: 2
    });
  };
  return (
    <tbody className={bem()}>
      {data.map(oneRow => {
        const { month, dataGood, dataMedian, dataBad } = oneRow;
        return (
          <tr key={month} className={bem("row")}>
            <td className={bem("cell", ["month"])}>{month}</td>
            <td className={bem("cell", ["good"])}>{formatNumber(dataGood)}</td>
            <td className={bem("cell", ["median"])}>
              {formatNumber(dataMedian)}
            </td>
            <td className={bem("cell", ["bad"])}>{formatNumber(dataBad)}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
