import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import cSheet from "../images/cSheetBlk.png";

import "../Stylesheets/App.css";

class SideBar extends Component {
  render() {
    return (
      <div className="sideBar">
        {/* <div className="App-title">cSheet</div> */}
        <Link className="App-title" to="/">
          <img src={cSheet} alt="cSheet" />
        </Link>
        <div className="divider" />
        <ul>
          <li>
            <Link className="expandable" to="/chooseRace" title="Setting">
              <FontAwesomeIcon icon={["fab", "d-and-d"]} size="lg" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
