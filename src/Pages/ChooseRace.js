import React, { Component } from "react";
import "../Stylesheets/App.css";
import Tile from "../Components/Tile.js";

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
      <div>
        <h1 className="pageHeader">Pick a race</h1>
        <ul className="tiles-section">
          <Tile image={dragonborn} text="Dragonborn" />
          <Tile image={dwarf} text="Dwarf" />
          <Tile image={elf} text="Elf" />
          <Tile image={halfelf} text="Half-Elf" />
          <Tile image={halfling} text="Halfling" />
          <Tile image={halforc} text="Halforc" />
          <Tile image={human} text="Human" />
          <Tile image={tiefling} text="Tiefling" />
        </ul>
      </div>
    );
  }
}

export default ChooseRace;
// export default withAuthenticator(App);
