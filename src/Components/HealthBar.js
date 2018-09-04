import React, { Component } from "react";
import "sass/main.css";
import { Link } from "react-router-dom";

class HealthBar extends Component {
  constructor() {
    super();

    this.state = {
      maxHealth: 12,
      currentHealth: 8,
      currentHealthPercent: "60%"
    };
  }

  render() {
    return (
      <div>
        <div class="progress">
          <div
            class="progress-bar bg-danger smallBody"
            role="progressbar"
            style={{ width: this.state.currentHealthPercent }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span>
              {this.state.currentHealth} / {this.state.maxHealth}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default HealthBar;
