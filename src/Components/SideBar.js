import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "../App.css";

class SideBar extends Component {
  render() {
    return (
      <div className="sideBar">
        {/* <div className="App-title">cSheet</div> */}
        <Link className="App-title" to="/">
          cSheet
        </Link>
        <ul>
          <li>
            <Link className="expandable" to="/chooseRace" title="Setting">
              <FontAwesomeIcon icon={["fab", "d-and-d"]} size="fa-5x" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
