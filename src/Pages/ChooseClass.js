import React, { Component } from "react";
import "../Stylesheets/App.css";
import Tile from "../Components/Tile.js";
import axios from "axios";
import idiot from "../Images/idiot.png";
import biggestIdiot from "../Images/biggestIdiot.png";
import ericWilson from "../Images/ericWilson.png";

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

  async componentDidMount() {
    await axios.get("http://www.dnd5eapi.co/api/classes/").then(res => {
      const classData = res.data.results;
      const count = res.data.count;
      this.setState({ classes: classData, count: count });
    });
  }

  render() {
    Analytics.record("appRender");
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
          <ul className="tiles-section">
            <Tile
              image={idiot}
              link="/chooseAttributes"
              name={this.state.classes[0].name}
            />
            <Tile
              image={ericWilson}
              link="/chooseAttributes"
              name={this.state.classes[1].name}
            />
            <Tile
              image={idiot}
              link="/chooseAttributes"
              name={this.state.classes[2].name}
            />
            <Tile
              image={idiot}
              link="/chooseAttributes"
              name={this.state.classes[3].name}
            />
            <Tile
              image={idiot}
              link="/chooseAttributes"
              name={this.state.classes[4].name}
            />
            <Tile
              image={idiot}
              link="/chooseAttributes"
              name={this.state.classes[5].name}
            />
            <Tile
              image={idiot}
              link="/chooseAttributes"
              name={this.state.classes[6].name}
            />
            <Tile
              image={idiot}
              link="/chooseAttributes"
              name={this.state.classes[7].name}
            />
            <Tile
              image={idiot}
              link="/chooseAttributes"
              name={this.state.classes[8].name}
            />
            <Tile
              image={idiot}
              link="/chooseAttributes"
              name={this.state.classes[9].name}
            />
            <Tile
              image={idiot}
              link="/chooseAttributes"
              name={this.state.classes[10].name}
            />
            <Tile
              image={biggestIdiot}
              link="/chooseAttributes"
              name={this.state.classes[11].name}
            />
          </ul>
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
