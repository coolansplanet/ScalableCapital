import React from "react";
import CustomSelector from "./CustomSelector";
import { selectors } from "../constants";
import "./Selectors.scss";

export default props => {
  const { appState, onChange } = props;

  return (
    <div className="core__selectors">
      {selectors.map(oneSelector => {
        const { id, label, min, max, increment } = oneSelector;
        return (
          <CustomSelector
            id={id}
            key={id}
            label={label}
            value={appState[id]}
            onChange={onChange}
            min={min}
            max={max}
            increment={increment}
          />
        );
      })}
    </div>
  );
};
