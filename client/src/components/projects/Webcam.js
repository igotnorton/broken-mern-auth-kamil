import React, { Component } from "react";
import { Link } from "react-router-dom";



class Webcam extends Component {
  render() {
    return (
      <body>
      <Link
      to="/dashboard"
      style={{
        fontFamily: "sans-serif",
        left: "16px",
        position: "fixed",
        top: "0",
        zIndex: "5"
      }}
      className="btn btn-large waves-effect waves-light hoverable white2 black-text"
    >

      BACK
    </Link>

        <iframe id="magicFrame" src="./WEBCAM/webcamhtml.html" title="Webcam"></iframe>
        </body>
        // <iframe id="magicFrame" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="Portfolio" ></iframe>
    );
  }
}


export default Webcam;