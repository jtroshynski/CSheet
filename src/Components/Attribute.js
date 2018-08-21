import React, { Component } from "react";
import "sass/main.css";
import { Link } from "react-router-dom";

class Attribute extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      points: 8
    };

    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.handleButtonRelease = this.handleButtonRelease.bind(this);
    this.addToAttribute = this.addToAttribute.bind(this);
    this.subtractFromAttribute = this.subtractFromAttribute.bind(this);
  }

  pointBuyArray = [
    { score: 8, cost: 0 },
    { score: 9, cost: 1 },
    { score: 10, cost: 2 },
    { score: 11, cost: 3 },
    { score: 12, cost: 4 },
    { score: 13, cost: 5 },
    { score: 14, cost: 7 },
    { score: 15, cost: 9 }
  ];

  addToAttribute = () => {
    let currentPoints = this.state.points;
    let pointsRemaining = this.props.pointsRemaining;
    if (currentPoints < 15 && pointsRemaining > 0) {
      this.setState({ points: currentPoints + 1 });
      pointsRemaining = pointsRemaining - 1;
      this.props.callback(pointsRemaining);
    }
  };

  subtractFromAttribute = () => {
    let currentPoints = this.state.points;
    let pointsRemaining = this.props.pointsRemaining;

    if (currentPoints > 8) {
      this.setState({ points: currentPoints - 1 });
      pointsRemaining = pointsRemaining + 1;
      this.props.callback(pointsRemaining);
    }
  };

  handleButtonPress() {
    this.buttonPressTimer = setTimeout(() => this.addToAttribute(), 600);
  }

  handleButtonRelease() {
    clearTimeout(this.buttonPressTimer);
  }

  render() {
    return (
      <div className="attribute">
        <div className="attributeNumberSection">
          <div className="points">{this.state.points} </div>
          <div className="attributeButtons">
            <button
              className="plusButton"
              // onTouchStart={this.handleButtonPress}
              // onTouchEnd={this.handleButtonRelease}
              // onMouseDown={this.handleButtonPress}
              // onMouseUp={this.handleButtonRelease}
              onClick={this.addToAttribute}
            />
            <button
              className="minusButton"
              onClick={this.subtractFromAttribute}
            />
          </div>
        </div>

        {/* <div className="attributeValues"> */}

        <div className="attributeName">{this.props.name}</div>
        {/* </div> */}
      </div>
    );
  }
}

export default Attribute;
