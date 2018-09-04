import React, { Component } from "react";
import "sass/main.css";
import Tile from "Components/Tile.js";

import axios from "axios";

import dragonborn from "Images/CSheet Icons/CSheet Icon Blue.svg";
import dwarf from "Images/CSheet Icons/CSheet Icon Brown.svg";
import elf from "Images/CSheet Icons/CSheet Icon Dark Grey.svg";
import halfelf from "Images/CSheet Icons/CSheet Icon Green.svg";
import halfling from "Images/CSheet Icons/CSheet Icon Orange.svg";
import halforc from "Images/CSheet Icons/CSheet Icon Purple.svg";
import human from "Images/CSheet Icons/CSheet Icon Sea Green.svg";
import tiefling from "Images/CSheet Icons/CSheet Icon Yellow.svg";

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
        <div>
          <span>Loading...</span>
        </div>
      );
    } else {
      return (
        <div>
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
