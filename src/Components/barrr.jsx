import React, { Component } from "react";
import { Link } from "react-router-dom";
import cSheet from "Images/CSheet Logos/CSheet Logo Green Black.svg";

import "sass/main.css";

class barrr extends Component {
  render() {
    return (
      <div className="sideBar">
        <div className="sideBarLogoSection">
          <Link className="cSheetLogo" to="/">
            <img src={cSheet} alt="cSheet" />
          </Link>
        </div>
      </div>
    );
  }
}

export default barrr;
