import React from "react";
import { Link } from "react-router-dom";
import "./menu.scss";

export default function Menu(props) {
  return (
    <div className="menu">
      <Link className="menu__entry--container" to="/journal">
        <h2 className="menu__title">Add Journal Entry</h2>
      </Link>
      <Link className="menu__entry--container" to="/entryList">
        <h2 className="menu__title">View All Entries</h2>
      </Link>
      <Link className="menu__entry--container" to="/about">
        <h2 className="menu__title">About</h2>
      </Link>
    </div>
  );
}
