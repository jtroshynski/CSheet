import React, { Component } from "react";
import "sass/main.css";
import { Link } from "react-router-dom";

class HealthBar extends Component {
  constructor() {
    super();

    this.state = {
      maxHealth: 0,
      currentHealth: 0
    };
  }

  render() {
    return (
      <div>
        <div className="sectionLabel">
          <h2 className="sheetText">Health</h2>
        </div>
        <div class="progress">
          <div
            class="progress-bar bg-danger"
            role="progressbar"
            style={{ width: "70%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span>8/12</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HealthBar;
