import React from "react";
import { bemNamesFactory } from "bem-names";
import "./TableHeader.scss";

export default props => {
  const bem = bemNamesFactory("table__header");
  return (
    <thead className={bem()}>
      <tr>
        <th className={bem("cell", ["month"])}>Month</th>
        <th className={bem("cell", ["good"])}>Good</th>
        <th className={bem("cell", ["median"])}>Median</th>
        <th className={bem("cell", ["bad"])}>Bad</th>
      </tr>
    </thead>
  );
};
