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
      count: 0,
      attributes: [],
      pointsRemaining: 27
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
  }

  callback = pointsSpent => {
    this.setState({ pointsRemaining: pointsSpent });
  };

  render() {
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
          <h1 className="pageHeader">Your Character Sheet</h1>
          <span className="padlock" onClick={this.ToggleLock}></span>
          <this.AttributeTiles
            attributeArray={this.attributeArray}
            callback={this.callback}
            {...this.state}
          />
        </div>
      );
    }
  }
}

export default CharacterSheet;
// export default withAuthenticator(App);
