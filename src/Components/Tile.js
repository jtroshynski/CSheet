import React, { Component } from "react";
import "../Stylesheets/App.css";
import axios from "axios";
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
          <img src={this.props.image} alt={this.props.name} />
          <div className="tile-text">{this.props.name}</div>
        </div>
      </Link>
    );
  }
}

export default Tile;
