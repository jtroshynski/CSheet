import React, { Component } from "react";
import "sass/main.css";

import HealthBar from "../Components/HealthBar";
import SkillList from "../Components/SkillList";
import AttributeTiles from "../Components/AttributeTiles";

import axios from "axios";

import { Analytics } from "aws-amplify";

class CharacterSheet extends Component {
  constructor() {
    super();

    this.state = {
      stats: [],
      count: 0,
      pointsRemaining: 27,
      currentHealth: 8,
      maxHealth: 12
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // Creates Tile components out of the attributeArray and api data

  ToggleLock() {
    // Lock or Unlock Editing page
  }

  render() {
    // Analytics.record("appRender");
    if (false) {
      return (
        <div>
          <span>Loading...</span>
        </div>
      );
    } else {
      return (
        <div class="container">
          <div class="row">
            <div className="baseDetails">
              <div className="characterName">
                <div className="roundedTile">
                  <h2 className="header">Maelor the Lost</h2>
                </div>
              </div>
              <div className="level">
                <div className="roundedTile">
                  <h2 className="largeBody">Level: 1</h2>
                </div>
              </div>
              <div className="level">
                <div className="roundedTile">
                  <h2 className="largeBody">Human</h2>
                </div>
              </div>
              <div className="level">
                <div className="roundedTile">
                  <h2 className="largeBody">Wizard</h2>
                </div>
              </div>
            </div>
          </div>
          {/* <span className="padlock" onClick={this.ToggleLock} /> */}
          <div class="container">
            <div class="row">
              <div className="col-sm">
                <div className="sectionLabel">
                  <h2 className="header">Attributes</h2>
                </div>
                <AttributeTiles />
              </div>
              <div class="col-sm">
                <div className="sectionLabel">
                  <h2 className="header">Skills</h2>
                </div>
                <SkillList />
              </div>

              <div class="col-sm">
                <div className="sectionLabel">
                  <h2 className="header">Health</h2>
                </div>
                <HealthBar />
                <div className="sectionLabel">
                  <h2 className="header">Armor</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CharacterSheet;
// export default withAuthenticator(App);
