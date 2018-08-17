import React, { Component } from "react";
import "Stylesheets/App.css";
import Tile from "Components/Tile.js";
import axios from "axios";
import idiot from "Images/People/idiot.png";
import biggestIdiot from "Images/People/biggestIdiot.png";
import ericWilson from "Images/People/ericWilson.png";

import { Analytics } from "aws-amplify";

class ChooseClass extends Component {
  constructor() {
    super();

    this.state = {
      classes: [],
      count: 0
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  classArray = [
    { id: 0, image: idiot },
    { id: 1, image: ericWilson },
    { id: 2, image: idiot },
    { id: 3, image: idiot },
    { id: 4, image: idiot },
    { id: 5, image: idiot },
    { id: 6, image: idiot },
    { id: 7, image: idiot },
    { id: 8, image: idiot },
    { id: 9, image: idiot },
    { id: 10, image: idiot },
    { id: 11, image: biggestIdiot }
  ];

  // Creates Tile components out of the raceArray and api data
  ClassTiles(props) {
    const classTiles = props.classArray.map(classs => (
      <Tile
        key={classs.id}
        image={classs.image}
        link="/chooseAttributes"
        name={props.classes[classs.id].name}
      />
    ));
    return <ul className="tiles-section">{classTiles}</ul>;
  }

  async componentDidMount() {
    await axios.get("http://www.dnd5eapi.co/api/classes/").then(res => {
      const classData = res.data.results;
      const count = res.data.count;
      this.setState({ classes: classData, count: count });
    });
  }

  render() {
    Analytics.record("appRender");
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
          <h1 className="pageHeader">Pick a class</h1>
          <this.ClassTiles classArray={this.classArray} {...this.state} />
        </div>
      );
    }
  }
}

// API Class Order:
// Barbarian
// Bard
// Cleric
// Druid
// Fighter
// Monk
// Paladin
// Ranger
// Rogue
// Sorcerer
// Warlock
// Wizard

export default ChooseClass;
// export default withAuthenticator(App);
