import React, { Component } from "react";
import { Link } from "react-router-dom";



class Tron extends Component {
  render() {
    return (
      <body>
      <Link
      to="/dashboard"
      style={{
        fontFamily: "sans-serif",
        left: "100px",
        position: "fixed",
        top: "4px",
        zIndex: "5"
      }}
      className="btn btn-large waves-effect waves-light hoverable white2 black-text"
    >

      BACK
    </Link>

        <iframe id="magicFrame" src="./TRON/tronhtml.html" title="Tron"></iframe>
        </body>
        // <iframe id="magicFrame" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="Tron" ></iframe>
        // <iframe id="magicFrame" src="~/client/src/components/projects/tron/index.html" title="Tron" ></iframe>
    );
  }
}


export default Tron;