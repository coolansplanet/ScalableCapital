import React from "react";
import { NavLink } from "react-router-dom";
import { menu } from "../constants";
import { bemNamesFactory } from "bem-names";
import "./Menu.scss";

export default props => {
  const bem = bemNamesFactory("core__menu");

  return (
    <nav className={bem()}>
      {menu.map(oneLink => {
        const { name, to } = oneLink;
        return (
          <NavLink to={to} key={to} className={bem("item")}>
            {name}
          </NavLink>
        );
      })}
    </nav>
  );
};
