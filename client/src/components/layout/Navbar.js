import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper">
            <Link
              to="/"
              style={{
                fontFamily: "sans-serif"
              }}
              className="row s5 brand-logo center black-text"
            >
              <i className="material-icons"><img src="./images/Steam_icon_logo.svg" alt="steam-ico" height="32px"/></i>
              Steam Halloween Sale 2022
            </Link>

          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;