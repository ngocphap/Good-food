import React from "react";
import { Link, NavLink } from "react-router-dom";

function MenuContainer({ link, icon, isHome }) {
  return (
    <li className={isHome ? "active" : ""}>
      <Link to={link}>
        <span className="icon">{icon}</span>
      </Link>
    </li>
  );
}

export default MenuContainer;
