import React, { Component } from "react";
// import { Link } from "react-router-dom";


class Tron extends Component {
  render() {
    return (
        <iframe id="magicFrame" src="./tron/index.html" title="Tron"></iframe>
        // <iframe id="magicFrame" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="Tron" ></iframe>
        // <iframe id="magicFrame" src="~/client/src/components/projects/tron/index.html" title="Tron" ></iframe>
    );
  }
}


export default Tron;