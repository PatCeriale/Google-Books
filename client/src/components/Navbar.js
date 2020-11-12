import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Search for new books
      </a>
      <a className="navbar-brand" href="/saved">
        View books you've saved
      </a>
    </nav>
  );
}
export default Navbar;
