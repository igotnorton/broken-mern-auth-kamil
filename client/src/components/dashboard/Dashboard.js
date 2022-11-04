import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Welcome,</b> {user.name.split(" ")[0]}
              <p className="black-text">
                You have been successfully logged in to the{" "}</p>
                <span style={{ fontWeight: "bold" }}>Steam</span>

            </h4>
            <Link
                to="/tron"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginBottom: "1rem",
                  marginRight: "1rem"
                }}
                className="btn btn-large waves-effect waves-light hoverable white2 black-text"
              >
                TRON
              </Link>
            <Link
                to="/portfolio"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginBottom: "1rem",
                  marginRight: "1rem"
                }}
                className="btn btn-large waves-effect waves-light hoverable white2 black-text"
              >
                PORTFOLIO
              </Link>
            <Link
                to="/webcam"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginBottom: "1rem",
                  marginRight: "1rem"
                }}
                className="btn btn-large waves-effect waves-light hoverable white2 black-text"
              >
                WEBCAM
              </Link>
            <Link
                to="/aibot"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginBottom: "1rem",
                  marginRight: "1rem"
                }}
                className="btn btn-large waves-effect waves-light hoverable white2 black-text"
              >
                AIBOT
              </Link>

            <button
              style={{
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginBottom: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
              </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
