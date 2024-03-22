import React, { Fragment } from "react";
import { useState } from "react";

import "./Navbar.css";
import a from "../20.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <div class="container"> */}
  <div class="loader2">
      <span>S</span>
      <span>A</span>
      <span>L</span>
      <span>I</span>
      <span>M</span>
      {/* <span>N</span>
      <span>G</span> */}
    </div>
{/* </div> */}

        {/* <img src={a} alt="" id="logo" /> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto me-0 mb-lg-0">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              {" "}
              <li class="nav-item">Home</li>
            </Link>
            <Link to={"/Service"} style={{ textDecoration: "none" }}>
              {" "}
              <li class="nav-item">Service</li>
            </Link>

            <Link to={"/contact"} style={{ textDecoration: "none" }}>
              {" "}
              <li class="nav-item">Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};
export default Navbar;
