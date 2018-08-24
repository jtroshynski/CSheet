import React, { Component } from "react";
import "sass/main.css";
import Tile from "Components/Tile.js";
import axios from "axios";
import barbarian from "DnDMaterials/Classes/DnD5E_ClassSymb_Barbarian.svg";
import bard from "DnDMaterials/Classes/DnD5E_ClassSymb_Bard.svg";
import cleric from "DnDMaterials/Classes/DnD5E_ClassSymb_Cleric.svg";
import druid from "DnDMaterials/Classes/DnD5E_ClassSymb_Druid.svg";
import fighter from "DnDMaterials/Classes/DnD5E_ClassSymb_Fighter.svg";
import monk from "DnDMaterials/Classes/DnD5E_ClassSymb_Monk.svg";
import paladin from "DnDMaterials/Classes/DnD5E_ClassSymb_Paladin.svg";
import ranger from "DnDMaterials/Classes/DnD5E_ClassSymb_Ranger.svg";
import rogue from "DnDMaterials/Classes/DnD5E_ClassSymb_Rogue.svg";
import sorcerer from "DnDMaterials/Classes/DnD5E_ClassSymb_Sorcerer.svg";
import warlock from "DnDMaterials/Classes/DnD5E_ClassSymb_Warlock.svg";
import wizard from "DnDMaterials/Classes/DnD5E_ClassSymb_Wizard.svg";

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
    { id: 0, image: barbarian },
    { id: 1, image: bard },
    { id: 2, image: cleric },
    { id: 3, image: druid },
    { id: 4, image: fighter },
    { id: 5, image: monk },
    { id: 6, image: paladin },
    { id: 7, image: ranger },
    { id: 8, image: rogue },
    { id: 9, image: sorcerer },
    { id: 10, image: warlock },
    { id: 11, image: wizard }
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
    await axios.get("http://www.dnd5Eapi.co/api/classes/").then(res => {
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
        <div>
          <span>Loading...</span>
        </div>
      );
    } else {
      return (
        <div>
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
