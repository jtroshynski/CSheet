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

class ChooseAttributes extends Component {
  render() {
    Analytics.record("appRender");
    return (
      <div className="content">
        <h1 className="pageHeader">Pick attribute scores</h1>
        <ul className="tiles-section">
          <Tile
            id={"5"}
            image={dragonborn}
            link="/chooseClass"
            text="Strength"
          />
        </ul>
      </div>
    );
  }
}

// API Race Order:
// Dwarf
// Elf
// Halfling
// Human
// Dragonborn
// Gnome
// Half-Elf
// Half-Orc
// Tiefling

export default ChooseAttributes;
// export default withAuthenticator(App);
