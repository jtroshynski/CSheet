import React, { Component } from "react";
import "../Stylesheets/App.css";
import Tile from "../Components/Tile.js";
import Attribute from "../Components/Attribute";

import dragonborn from "../Images/dragonborn.png";

import { Analytics } from "aws-amplify";

class ChooseAttributes extends Component {
  render() {
    Analytics.record("appRender");
    return (
      <div className="content">
        <h1 className="pageHeader">Pick attribute scores</h1>

        <div> Your points, sucka </div>
        <p> points = </p>

        {/* <ul className="tiles-section"> */}
        {/* <Attribute
            id={"5"}
            image={dragonborn}
            link="/chooseClass"
            text="Strength"
          />
        </ul> */}
      </div>
    );
  }
}

//api/ability-scores/{index}

export default ChooseAttributes;
// export default withAuthenticator(App);
