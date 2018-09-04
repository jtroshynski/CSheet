import React, { Component } from "react";
import "sass/main.css";
import { Link } from "react-router-dom";

class Weapons extends Component {
  constructor() {
    super();

    this.state = {
      name: ""
    };
  }

  armorArray = [
    { name: "Longsword", atkBonus: 4, dmgType: "Slashing" },
    { name: "Shortbow", atkBonus: 1, dmgType: "Piercing" },
    { name: "Dagger", atkBonus: 2, dmgType: "Piercing" }
  ];

  getWeapons() {
    const armorTiles = this.armorArray.map(weapon => (
      <div className="longTile short">
        <div className="roundedTile">
          <div className="longTileText">
            <h2 className="regularBody">{weapon.name}</h2>
            <h2 className="regularBody">{weapon.atkBonus}</h2>
            <h2 className="regularBody">{weapon.dmgType}</h2>
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
          <div className="col-sm-12">
            <div className="longTileSection">
              <div className="longTile long">
                <div className="roundedTile">
                  <div className="longTileText">
                    <h2 className="regularBody">Weapon</h2>
                    <h2 className="regularBody">Attack Bonus</h2>
                    <h2 className="regularBody">Damage Type</h2>
                  </div>
                </div>
              </div>
              {this.getWeapons()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Weapons;
