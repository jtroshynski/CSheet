import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";

class Tile extends Component {
  render() {
    return (
      <Link to={`/PageNotFound`}>
        <div className="tile">
          <img src={this.props.image} alt={this.props.text} />
          <div class="tile-text">{this.props.text}</div>
        </div>
      </Link>
    );
  }
}

export default Tile;
