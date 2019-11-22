import React from "react";
import PropTypes from "prop-types";
import { bemNamesFactory } from "bem-names";
import "./CustomSelector.scss";

const CustomSelector = props => {
  const bem = bemNamesFactory("core__custom-selector");
  const { id, min, max, value, label, onChange, increment } = props;
  const options = [];
  const handleChange = event => {
    onChange(id, parseInt(event.target.value));
  };

  for (let k = min; k <= max; k += increment) {
    options.push(
      <option key={k} value={k} className={bem("option")}>
        {k}
      </option>
    );
  }
  return (
    <div className={bem()}>
      <label className={bem("label")} htmlFor={bem("selector")}>
        {label}:
      </label>
      <select
        className={bem("selector")}
        id={bem("selector")}
        onChange={e => {
          handleChange(e);
        }}
        value={value}
      >
        {options}
      </select>
    </div>
  );
};

CustomSelector.propTypes = {
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  increment: PropTypes.number,
  onChange: PropTypes.func
};

export default CustomSelector;
