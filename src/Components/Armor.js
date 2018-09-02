import React, { Component } from "react";
import "sass/main.css";
import { Link } from "react-router-dom";

class Armor extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      points: 17
    };
  }

  armorArray = [
    { name: "Base", ac: 10 },
    { name: "Dexterity", ac: 1 },
    { name: "Leather Armor", ac: 4 },
    { name: "Shield", ac: 2 }
  ];

  getArmor() {
    const armorTiles = this.armorArray.map(armor => (
      <div className="longTile short">
        <div className="roundedTile">
          <div className="longTileText">
            <h2 className="regularBody">{armor.name}</h2>
            <h2 className="regularBody">{armor.ac}</h2>
          </div>
        </div>
      </div>
    ));
    return <div className="longTileSection">{armorTiles}</div>;
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div className="col-sm-3">
            <div className="attribute">
              <div className="attributeNumberSection">
                <div className="largeNumber">{this.state.points} </div>
              </div>
              <div className="attributeName">AC</div>
            </div>
          </div>
          <div className="col-sm-9">{this.getArmor()}</div>
        </div>
      </div>
    );
  }
}

export default Armor;
