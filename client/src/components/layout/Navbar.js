import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "sans-serif"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons"><img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" alt="steam-ico" height="32px"/></i>
              Steam Halloween Sale 2022
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
