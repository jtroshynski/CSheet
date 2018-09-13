import React, { Component } from "react";

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light smallBody">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#Stats">
                Stats <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Characteristics">
                Characteristics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Spells">
                Spells
              </a>
            </li>
          </ul>
          <span className="navbar-text">Jeremy Troshynski</span>
        </div>
      </nav>
    );
  }
}

export default TitleBar;
