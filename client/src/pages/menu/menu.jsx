import React from "react";
import firebase from "../../firebase";
import { Redirect, Link } from "react-router-dom";

export default function Menu(props) {
  return (
    <div>
        <Link to="/about">
      <div>
        <h2>About</h2>
      </div>
      </Link>
      <Link to="/entryList">
      <div>
        <h2>View All Entries</h2>
      </div>
      </Link>
      <Link to="/journal">
      <div>
        <h2>Add Another Entry</h2>
      </div>
      </Link>
    </div>
  );
}
