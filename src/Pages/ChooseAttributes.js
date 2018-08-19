import React, { Component } from "react";
import "sass/main.css";
import axios from "axios";
import idiot from "Images/People/idiot.png";
import biggestIdiot from "Images/People/biggestIdiot.png";
import ericWilson from "Images/People/ericWilson.png";
// import Attribute from "Components/Attribute";

import { Analytics } from "aws-amplify";
import Attribute from "../Components/Attribute";

class ChooseAttributes extends Component {
  constructor() {
    super();

    this.state = {
      attributes: [],
      count: 0,
      points: 0
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

  // Creates Tile components out of the raceArray and api data
  AttributeTiles(props) {
    const attributeTiles = props.attributeArray.map(attribute => (
      <Attribute
        key={attribute.id}
        link="/characterSheet"
        name={props.attributes[attribute.id].name}
      />
    ));
    return <ul className="tiles-section">{attributeTiles}</ul>;
  }

  async componentDidMount() {
    await axios.get("http://www.dnd5eapi.co/api/ability-scores/").then(res => {
      const attributeData = res.data.results;
      const count = res.data.count;
      this.setState({ attributes: attributeData, count: count });
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
          <h1 className="pageHeader">Allocate your attributes</h1>
          <h2 className="points">{this.state.points}</h2>
          <this.AttributeTiles
            attributeArray={this.attributeArray}
            {...this.state}
          />
        </div>
      );
    }
  }
}

//api/ability-scores/{index}

export default ChooseAttributes;
// export default withAuthenticator(App);
