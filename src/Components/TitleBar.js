import React, { Component } from "react";
import { Link } from "react-router-dom";
import cSheet from "Images/CSheet Logos/CSheet Logo Green Black.svg";

import "sass/main.css";

class TitleBar extends Component {
  constructor() {
    super();
    this.state = {
      isMobile: false
    };
    this.handleWindowSizeChange;
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    var isHidden;
    var isMobile;

    window.innerWidth <= 768
      ? ((isHidden = true), (isMobile = true))
      : ((isHidden = false), (isMobile = false));

    this.setState({
      isHidden: isHidden,
      isMobile: isMobile
    });
  };

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light smallBody">
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#Stats">
                Stats <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Characteristics">
                Characteristics
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Spells">
                Spells
              </a>
            </li>
          </ul>
          <span class="navbar-text">Jeremy Troshynski</span>
        </div>
      </nav>
    );
  }
}

export default TitleBar;
