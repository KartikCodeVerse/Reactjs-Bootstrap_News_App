import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand badge bg-light text-dark fs-4" href="#">
            NewsDay
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("general")}
                  style={{ cursor: "pointer" }}
                >
                  General
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("business")}
                  style={{ cursor: "pointer" }}
                >
                  Business
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("entertainment")}
                  style={{ cursor: "pointer" }}
                >
                  Entertainment
                </div>
              </li>

              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("health")}
                  style={{ cursor: "pointer" }}
                >
                  Health
                </div>
              </li>
              <li className="nav-item  cursor-pointer">
                <div
                  className="nav-link"
                  onClick={() => setCategory("science")}
                  style={{ cursor: "pointer" }}
                >
                  Science
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("sports")}
                  style={{ cursor: "pointer" }}
                >
                  Sports
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  onClick={() => setCategory("technology")}
                  style={{ cursor: "pointer" }}
                >
                  Technology
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
