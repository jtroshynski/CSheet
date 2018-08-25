import React, { Component } from "react";
import "sass/main.css";
import axios from "axios";
import { Link } from "react-router-dom";

import Attribute from "../Components/Attribute";

class AttributeTiles extends Component {
  constructor() {
    super();

    this.state = {
      attributes: [],
      attributeCount: 0
    };
  }

  attributeArray = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
  ];

  // Calls D&D api to get race data when page loads
  async componentDidMount() {
    await axios.get("http://www.dnd5eapi.co/api/ability-scores/").then(res => {
      const attributeData = res.data.results;
      const count = res.data.count;
      this.setState({ attributes: attributeData, attributeCount: count });
    });
  }

  render(props) {
    if (this.state.attributeCount === 0) {
      return (
        <div>
          <span>Loading...</span>
        </div>
      );
    } else {
      const attributeTiles = this.attributeArray.map(attribute => (
        <Attribute
          key={attribute.id}
          name={this.state.attributes[attribute.id].name}
        />
      ));
      return <ul className="verticalAttributeTiles">{attributeTiles}</ul>;
    }
  }
}

export default AttributeTiles;
