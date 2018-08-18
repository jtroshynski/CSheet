import React, { Component } from "react";
import "sass/main.css";
import Tile from "Components/Tile.js";

import axios from "axios";

import dragonborn from "Images/Races/dragonborn.png";
import dwarf from "Images/Races/dwarf.png";
import elf from "Images/Races/elf.png";
import halfelf from "Images/Races/half-elf.png";
import halfling from "Images/Races/halfling.png";
import halforc from "Images/Races/half-orc.png";
import human from "Images/Races/human.png";
import tiefling from "Images/Races/tiefling.png";

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

  raceArray = [
    { id: 4, image: dragonborn },
    { id: 0, image: dwarf },
    { id: 1, image: elf },
    { id: 6, image: halfelf },
    { id: 2, image: halfling },
    { id: 7, image: halforc },
    { id: 3, image: human },
    { id: 8, image: tiefling }
  ];

  // Creates Tile components out of the raceArray and api data
  RaceTiles(props) {
    const raceTiles = props.raceArray.map(race => (
      <Tile
        key={race.id}
        image={race.image}
        link="/chooseClass"
        name={props.races[race.id].name}
      />
    ));
    return <ul className="tiles-section">{raceTiles}</ul>;
  }

  // Calls D&D api to get race data when page loads
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
          <this.RaceTiles raceArray={this.raceArray} {...this.state} />
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
