import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to={"/"}>
          <h1>logo</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
