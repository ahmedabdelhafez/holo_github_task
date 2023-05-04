import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="main-navbar">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <ul className="navbar-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/todos" className="nav-link">
            Todos
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
