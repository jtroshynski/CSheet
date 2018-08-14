import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import cSheet from "../Images/cSheetBlk.png";

import "../Stylesheets/App.css";

class SideBar extends Component {
  render() {
    return (
      <div className="sideBar">
        <Link className="cSheetLogo" to="/">
          <img src={cSheet} alt="cSheet" />
        </Link>
        <div className="divider" />
        <ul>
          <li>
            <Link to="/chooseRace" title="Character Sheet">
              <span className="characterSheetIcon" />
            </Link>
          </li>
        </ul>
        <button className="sidebarButton">
          <span className="mobileButton" />
        </button>
      </div>
    );
  }
}

export default SideBar;
