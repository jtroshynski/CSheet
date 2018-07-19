import React, { Component } from "react";
import "../App.css";
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
      <div className="chooseRace">
        {/* <h2 className="App-intro">CHOOSE YOUR CHARACTER</h2> */}
        <Row horizontal="center">
          <h1>CHOOSE YOUR CHARACTER</h1>
        </Row>
        <Row horozontal="center">
          <div className="tile">
            <img src={dragonborn} alt="Dragonborn" />
          </div>
          <div className="tile">
            <img src={dwarf} alt="Dwarf" />
          </div>
          <div className="tile">
            <img src={halfling} alt="Halfling" />
          </div>
          <div className="tile">
            <img src={halforc} alt="Half-Orc" />
          </div>
        </Row>
        <Row horozontal="center">
          <div className="tile">
            <img src={elf} alt="Elf" />
          </div>
          <div className="tile">
            <img src={halfelf} alt="Half-Elf" />
          </div>
          <div className="tile">
            <img src={human} alt="Human" />
          </div>
          <div className="tile">
            <img src={tiefling} alt="Tiefling" />
          </div>
        </Row>
      </div>
    );
  }
}

export default ChooseRace;
// export default withAuthenticator(App);
