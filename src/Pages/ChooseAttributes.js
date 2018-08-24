import React, { Component } from "react";
import "sass/main.css";
import axios from "axios";
import { Link } from "react-router-dom";
// import Attribute from "Components/Attribute";

import { Analytics } from "aws-amplify";
import Attribute from "../Components/Attribute";

class ChooseAttributes extends Component {
  constructor() {
    super();

    this.state = {
      attributes: [],
      count: 0,
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

  checkDone(props) {
    if (props.pointsRemaining > 0) {
      alert(
        "Are you sure you want to progress? You still have unallocated points!"
      );
    } else {
    }
  }

  callback = pointsSpent => {
    this.setState({ pointsRemaining: pointsSpent });
  };

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
    return <ul className="attribute-tiles">{attributeTiles}</ul>;
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
        <div>
          <span>Loading...</span>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="pageHeader">Allocate your attributes</h1>
          <h2 className="paragraphText">
            Points Remaining: {this.state.pointsRemaining}
          </h2>
          <this.AttributeTiles
            attributeArray={this.attributeArray}
            callback={this.callback}
            {...this.state}
          />
          <Link to="/characterSheet">
            <button className="button large" onClick={this.checkDone}>
              Done
            </button>
          </Link>
        </div>
      );
    }
  }
}

//api/ability-scores/{index}

export default ChooseAttributes;
// export default withAuthenticator(App);
