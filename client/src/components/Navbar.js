import React from "react";
import "./style.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Search for new books
        </a>
        <a className="navbar-brand" href="/saved">
          View books you've saved
        </a>
      </nav>

      <div className="banner">
        <h1>
          <strong>
            <span className="google">
              <span className="blue">G</span>
              <span className="red">o</span>
              <span className="yellow">o</span>
              <span className="blue">g</span>
              <span className="green">l</span>
              <span className="red">e</span>
            </span>{" "}
            Books Search
          </strong>
        </h1>
        <p>
          Search for and Save Books of Interest
          <br />
          Created with React
        </p>
      </div>
    </div>
  );
}
export default Navbar;
