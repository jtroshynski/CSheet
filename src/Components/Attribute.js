import React, { Component } from "react";
import "sass/main.css";
import { Link } from "react-router-dom";

class Attribute extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      points: 0
    };
    this.addToAttribute = this.addToAttribute.bind(this);
    this.subtractFromAttribute = this.subtractFromAttribute.bind(this);
  }

  addToAttribute() {
    this.setState({ points: this.state.points + 1 });
  }

  subtractFromAttribute() {
    this.setState({ points: this.state.points - 1 });
  }

  render() {
    return (
      <Link to={this.props.link}>
        <div className="attribute">
          <button className="plusButton" onClick={this.addToAttribute} />
          <button
            className="minusButton"
            onClick={this.subtractFromAttribute}
          />
          <div className="points">{this.state.points} </div>
          <div className="attribute-text">{this.props.name}</div>
        </div>
      </Link>
    );
  }
}

export default Attribute;
