import React, { Component } from "react";
import "sass/main.css";

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

class CharacterSheet extends Component {
  constructor() {
    super();

    this.state = {
      stats: [],
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

  // Calls D&D api to get race data when page loads
  async componentDidMount() {
    // await axios.get("http://www.dnd5eapi.co/api/races/").then(res => {
    //   const raceData = res.data.results;
    //   const numRaces = res.data.count;
    //   this.setState({ races: raceData, count: numRaces });
    // });
  }

  render() {
    // Analytics.record("appRender"); else {
    return (
      <div className="content">
        <h1 className="pageHeader">Your CSheet</h1>
        <p className="paragraphText">Check back later!</p>
        {/* <this.CharacterSheet characterStats={this.stats} {...this.state} /> */}
      </div>
    );
  }
}

export default CharacterSheet;
// export default withAuthenticator(App);
