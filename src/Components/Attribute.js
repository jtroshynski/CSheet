import React, { Component } from "react";
import "sass/main.css";
import { Link } from "react-router-dom";

class Attribute extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      count: 0
    };
    this.addToAttribute = this.addToAttribute.bind(this);
    this.subtractFromAttribute = this.subtractFromAttribute.bind(this);
  }

  addToAttribute() {
    this.setState({ count: this.state.count + 1 });
  }

  subtractFromAttribute() {
    this.setState({ count: this.state.count - 1 });
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
          <img src={this.props.image} alt={this.props.text} />
          <div className="attribute-text">{this.props.text}</div>
        </div>
      </Link>
    );
  }
}

export default Attribute;
