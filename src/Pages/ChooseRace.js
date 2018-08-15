import React, { Component } from "react";
import "../Stylesheets/App.css";
import Tile from "../Components/Tile.js";

import axios from "axios";

import dragonborn from "../Images/dragonborn.png";
import dwarf from "../Images/dwarf.png";
import elf from "../Images/elf.png";
import halfelf from "../Images/half-elf.png";
import halfling from "../Images/halfling.png";
import halforc from "../Images/half-orc.png";
import human from "../Images/human.png";
import tiefling from "../Images/tiefling.png";

import { Analytics } from "aws-amplify";

class ChooseRace extends Component {
  constructor() {
    super();

    this.state = {
      races: [],
      count: 0
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    await axios.get("http://www.dnd5eapi.co/api/races/").then(res => {
      const raceData = res.data.results;
      const numRaces = res.data.count;
      this.setState({ races: raceData, count: numRaces });
    });
  }

  render() {
    // Analytics.record("appRender");
    if (this.state.count === 0) {
      return (
        <div className="content">
          <span>Loading...</span>
        </div>
      );
    } else {
      return (
        <div className="content">
          <h1 className="pageHeader">Pick a race</h1>
          <ul className="tiles-section">
            <Tile
              image={dragonborn}
              link="/chooseClass"
              name={this.state.races[4].name}
            />
            <Tile
              link="/chooseClass"
              image={dwarf}
              name={this.state.races[0].name}
            />
            <Tile
              id={"2"}
              image={elf}
              link="/chooseClass"
              name={this.state.races[1].name}
            />
            <Tile
              id={"7"}
              image={halfelf}
              link="/chooseClass"
              name={this.state.races[6].name}
            />
            <Tile
              id={"3"}
              image={halfling}
              link="/chooseClass"
              name={this.state.races[2].name}
            />
            <Tile
              id={"8"}
              image={halforc}
              link="/chooseClass"
              name={this.state.races[7].name}
            />
            <Tile
              id={"4"}
              image={human}
              link="/chooseClass"
              name={this.state.races[3].name}
            />
            <Tile
              id={"9"}
              image={tiefling}
              link="/chooseClass"
              name={this.state.races[8].name}
            />
          </ul>
        </div>
      );
    }
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

export default ChooseRace;
// export default withAuthenticator(App);
