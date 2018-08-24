import React, { Component } from "react";
import "sass/main.css";

import Attribute from "../Components/Attribute";

import axios from "axios";

import { Analytics } from "aws-amplify";

class CharacterSheet extends Component {
  constructor() {
    super();

    this.state = {
      stats: [],
      skills: [],
      count: 0,
      attributes: [],
      pointsRemaining: 27,
      skillCount: 0,
      currentHealth: 8,
      maxHealth: 12
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  attributeArray = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
  ];

  skillsArray = [
    { id: 0, bonus: 1 },
    { id: 1, bonus: 2 },
    { id: 2, bonus: 3 },
    { id: 3, bonus: 4 },
    { id: 4, bonus: 3 },
    { id: 5, bonus: 2 },
    { id: 6, bonus: 1 },
    { id: 7, bonus: 1 },
    { id: 8, bonus: 2 },
    { id: 9, bonus: 3 },
    { id: 10, bonus: 4 },
    { id: 11, bonus: 3 },
    { id: 12, bonus: 2 },
    { id: 13, bonus: 1 },
    { id: 14, bonus: 1 },
    { id: 15, bonus: 2 },
    { id: 16, bonus: 3 },
    { id: 17, bonus: 4 }
  ];

  // Creates Tile components out of the attributeArray and api data
  AttributeTiles(props) {
    const attributeTiles = props.attributeArray.map(attribute => (
      <Attribute
        key={attribute.id}
        name={props.attributes[attribute.id].name}
        pointsRemaining={props.pointsRemaining}
        callback={props.callback}
      />
    ));
    return <ul className="verticalAttributeTiles">{attributeTiles}</ul>;
  }

  // Creates Tile components out of the attributeArray and api data
  SkillTiles(props) {
    const skillTiles = props.skillsArray.map(skill => (
      <div className="skillTile">
        <div className="roundedTile">
          <div className="skillText">
            <h2 className="sheetTextSmall">{props.skills[skill.id].name}</h2>
            <h2 className="sheetTextSmall">{skill.bonus}</h2>
          </div>
        </div>
      </div>
    ));
    return <div className="skills">{skillTiles}</div>;
  }

  ProgressBar(props) {
    return (
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          // style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    );
  }

  ToggleLock() {
    // Lock or Unlock Editing page
  }

  // Calls D&D api to get race data when page loads
  async componentDidMount() {
    await axios.get("http://www.dnd5eapi.co/api/ability-scores/").then(res => {
      const attributeData = res.data.results;
      const count = res.data.count;
      this.setState({ attributes: attributeData, count: count });
    });
    await axios.get("http://www.dnd5eapi.co/api/skills/").then(res => {
      const skillData = res.data.results;
      const skillCount = res.data.count;
      this.setState({ skills: skillData, skillCount: skillCount });
    });
  }

  callback = pointsSpent => {
    this.setState({ pointsRemaining: pointsSpent });
  };

  render() {
    // Analytics.record("appRender");
    if (this.state.count === 0 || this.state.skillCount === 0) {
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
                  <h2 className="sheetText">Maelor the Lost</h2>
                </div>
              </div>
              <div className="level">
                <div className="roundedTile">
                  <h2 className="sheetTextSmall">Level: 1</h2>
                </div>
              </div>
              <div className="level">
                <div className="roundedTile">
                  <h2 className="sheetTextSmall">Human</h2>
                </div>
              </div>
              <div className="level">
                <div className="roundedTile">
                  <h2 className="sheetTextSmall">Wizard</h2>
                </div>
              </div>
            </div>
          </div>
          {/* <span className="padlock" onClick={this.ToggleLock} /> */}
          <div class="container">
            <div class="row">
              <div className="col-sm">
                <div className="sectionLabel">
                  <h2 className="sheetText">Attributes</h2>
                </div>
                <this.AttributeTiles
                  attributeArray={this.attributeArray}
                  callback={this.callback}
                  {...this.state}
                />
              </div>
              <div class="col-sm">
                <div className="sectionLabel">
                  <h2 className="sheetText">Skills</h2>
                </div>
                <this.SkillTiles
                  skillsArray={this.skillsArray}
                  {...this.state}
                />
              </div>

              <div class="col-sm">
                <div className="sectionLabel">
                  <h2 className="sheetText">Health</h2>
                </div>
                <this.ProgressBar />
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
