import React, { Component } from "react";
import "sass/main.css";
import axios from "axios";
import Tile from "Components/Tile.js";
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
    { id: 0, attribute: idiot },
    { id: 1, attribute: ericWilson },
    { id: 2, attribute: idiot },
    { id: 3, attribute: idiot },
    { id: 4, attribute: idiot },
    { id: 5, attribute: biggestIdiot }
  ];

  async componentDidMount() {
    await axios.get("http://www.dnd5eapi.co/api/ability-scores/").then(res => {
      const attributeData = res.data.results;
      const count = res.data.count;
      this.setState({ attributes: attributeData, count: count });
    });
  }

  // Creates Tile components out of the raceArray and api data
  AttributeTiles(props) {
    const attributeTiles = props.attributeArray.map(attribute => (
      <Attribute
        key={attribute.id}
        image={attribute.image}
        link="/chooseAttributes"
        name={props.attributes[attribute.id].name}
      />
    ));
    return <ul className="tiles-section">{attributeTiles}</ul>;
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
          <h1 className="pageHeader">Pick a attribute</h1>
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
