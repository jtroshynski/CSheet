import React, { Component } from "react";
import "../App.css";
import Tile from "../Tile.js";
import { Column, Row } from "simple-flexbox";

import dragonborn from "../images/dragonborn.png";
import dwarf from "../images/dwarf.png";
import elf from "../images/elf.png";
import halfelf from "../images/half-elf.png";
import halfling from "../images/halfling.png";
import halforc from "../images/half-orc.png";
import human from "../images/human.png";
import tiefling from "../images/tiefling.png";

import { Analytics } from "aws-amplify";

class ChooseRace extends Component {
  render() {
    Analytics.record("appRender");
    return (
      // <div className="header">
      //   <Row horizontal="center">
      //     <h1>Pick a race</h1>
      //   </Row>
      // </div>
      <ul class="chooseRace">
        <li>
          <Tile img={dragonborn} text="Dragonborn" />
        </li>
        {/* <li class="tile">Dragonborn</li>
          <li class="tile">Dragonborn</li>
          <li class="tile">Dragonborn</li>
          <li class="tile">Dragonborn</li>
          <li class="tile">Dragonborn</li>
          <li class="tile">Dragonborn</li> */}
      </ul>
    );
  }
}

export default ChooseRace;
// export default withAuthenticator(App);
