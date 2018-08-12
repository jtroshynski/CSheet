import React, { Component } from "react";
import "../Stylesheets/App.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Attribute extends Component {
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
      .get("http://www.dnd5eapi.co/api/races/" + this.props.id)
      .then(response => console.log(response.data));
  }

  render() {
    return (
      <Link to={this.props.link}>
        <div className="tile" onClick={this.handleClick}>
          <img src={this.props.image} alt={this.props.text} />
          <div className="tile-text">{this.props.text}</div>
        </div>
      </Link>
    );
  }
}

export default Attribute;
