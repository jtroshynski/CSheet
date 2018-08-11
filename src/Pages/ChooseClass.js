import React, { Component } from "react";
import "../Stylesheets/App.css";
import Tile from "../Components/Tile.js";

import idiot from "../images/idiot.png";
import biggestIdiot from "../images/biggestIdiot.png";
import ericWilson from "../images/ericWilson.png";

import { Analytics } from "aws-amplify";

class ChooseClass extends Component {
  render() {
    Analytics.record("appRender");
    return (
      <div className="content">
        <h1 className="pageHeader">Pick a class</h1>
        <ul className="tiles-section">
          <Tile
            id={"1"}
            image={idiot}
            link="/chooseAttributes"
            text="Barbarian"
          />
          <Tile
            id={"2"}
            image={ericWilson}
            link="/chooseAttributes"
            text="Bard"
          />
          <Tile id={"3"} image={idiot} link="/chooseAttributes" text="Cleric" />
          <Tile id={"4"} image={idiot} link="/chooseAttributes" text="Druid" />
          <Tile
            id={"5"}
            image={idiot}
            link="/chooseAttributes"
            text="Fighter"
          />
          <Tile id={"6"} image={idiot} link="/chooseAttributes" text="Monk" />
          <Tile
            id={"7"}
            image={idiot}
            link="/chooseAttributes"
            text="Paladin"
          />
          <Tile id={"8"} image={idiot} link="/chooseAttributes" text="Ranger" />
          <Tile id={"9"} image={idiot} link="/chooseAttributes" text="Rogue" />
          <Tile
            id={"10"}
            image={idiot}
            link="/chooseAttributes"
            text="Sorcerer"
          />
          <Tile
            id={"11"}
            image={idiot}
            link="/chooseAttributes"
            text="Warlock"
          />
          <Tile
            id={"12"}
            image={biggestIdiot}
            link="/chooseAttributes"
            text="Wizard"
          />
        </ul>
      </div>
    );
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
