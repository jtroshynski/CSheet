import React, { Component } from "react";
import "../Stylesheets/App.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Tile extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      speed: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios
      .get("http://www.dnd5eapi.co/api/races/")
      .then(response => console.log(response.data));
  }

  render() {
    return (
      // <Link to={`/PageNotFound`}>
      <div className="tile" onClick={this.handleClick}>
        <img src={this.props.image} alt={this.props.text} />
        <div className="tile-text">{this.props.text}</div>
      </div>
      
      // </Link>
    );
  }
}

export default Tile;
