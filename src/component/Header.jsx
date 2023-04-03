import React, { useState, useRef, useLayoutEffect } from "react";

import { Link } from "react-router-dom";
import logo from "../images/headerLogo.svg";
import "./humburger.css";
let someValidPath = "#";
function Header() {
  // for hamburger icon js
  const [isActive, setActive] = useState("false");
  function handleToggle(event) {
    setActive(!isActive);
  }

  function handleFixed(event) {
    document.body.classList.toggle("bodyFix");
  }

  // for fixed header js
  const stickyHeader = useRef();
  useLayoutEffect(() => {
    const mainHeader = document.getElementById("mainHeader");
    let fixedTop = stickyHeader.current.offsetTop;
    const fixedHeader = () => {
      if (window.pageYOffset > fixedTop) {
        mainHeader.classList.add("fixed-header");
      } else {
        mainHeader.classList.remove("fixed-header");
      }
    };
    window.addEventListener("scroll", fixedHeader);
  }, []);

  return (
    <>
      {/* Hello world */}

      <header className="header" id="mainHeader" ref={stickyHeader}>
        <nav className="navbar navbar-expand-lg storke p-0">
          <div className="container">
            <a className="navbar-brand p-0" href="/">
              <img src={logo} alt="logo" className="img-fluid header-logo" />
            </a>
            <div className="humburger-box d-flex align-items-center">
              <a
                className="nav-link btn btn-main d-inline-flex d-lg-none"
                href={someValidPath}
              >
                Contact us
              </a>
              <button
                onClick={handleToggle}
                className={`navbar-toggler hamburger hamburger--collapse ${
                  isActive ? "not-active" : "is-active"
                }`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="hamburger-box" onClick={handleFixed}>
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="blogs">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="product">
                    Product
                  </Link>
                </li>
                <li className="nav-item d-lg-inline-flex d-none">
                  <Link className="nav-link btn btn-main" to="contact">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
