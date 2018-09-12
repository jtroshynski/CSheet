import React, { Component } from "react";
import "sass/main.css";

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
        <div className="progress">
          <div
            className="progress-bar bg-danger smallBody"
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
