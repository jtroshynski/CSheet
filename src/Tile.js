import React, { Component } from "react";
import "./App.css";

class Tile extends Component {
  constructor(img, txt) {
    super(img, txt);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      image: img,
      text: txt
    };
  }

  handleChange(img, txt) {
    this.setState({
      image: img,
      text: txt
    });
  }

  render() {
    return (
      <div className="tile">
        <img src={this.image} alt={this.text} />
        <div class="tile-text">{this.text}</div>
      </div>
    );
  }
}

export default Tile;
