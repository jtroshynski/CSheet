import React, { Component } from "react";
import "sass/main.css";
import { Link } from "react-router-dom";

class Tile extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <Link to={this.props.link}>
        <div className="tile" onClick={this.handleClick}>
          <img
            className="tile-image"
            src={this.props.image}
            alt={this.props.name}
          />
          <div className="tile-text">{this.props.name}</div>
        </div>
      </Link>
    );
  }
}

export default Tile;
