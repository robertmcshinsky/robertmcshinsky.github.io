import React from "react";
import logo from "../../utils/rsm-logo.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
        <ul className="navbar-nav ml-auto text-center">
          <li className="nav-item active">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/resume">
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="mx-auto my-2 order-0 order-md-1 position-relative">
        <a className="mx-auto" href="/">
          <img src={logo} className="rounded-circle" alt="home logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".dual-collapse2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
        <ul className="navbar-nav mr-auto text-center">
          <li className="nav-item active">
            <a className="nav-link" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
