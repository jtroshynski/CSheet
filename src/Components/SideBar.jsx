import React, { Component } from "react";
import { Link } from "react-router-dom";
import cSheet from "Images/CSheet Logos/CSheet Logo Green Black.svg";

import "Stylesheets/App.css";

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      isMobile: false,
      isHidden: true
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
    const { width } = this.state;
    const isMobile = this.state.isMobile;
    const isHidden = this.state.isHidden;

    console.log(isHidden);

    return isMobile ? (
      isHidden ? (
        <this.SidebarButton />
      ) : (
        <div>
          <this.SidebarButton />
          <this.SideBar />
        </div>
      )
    ) : (
      <this.SideBar />
    );
  }

  SideBar = () => (
    <div className="sideBar">
      <div className="sideBarLogoSection">
        <Link className="cSheetLogo" to="/">
          <img src={cSheet} alt="cSheet" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/chooseRace" title="Character Sheet">
            <span className="characterSheetIcon" />
          </Link>
          <Link to="/chooseClass" title="Parties">
            <span className="partyIcon" />
          </Link>
        </li>
      </ul>
    </div>
  );

  SidebarButton = () => (
    <button className="sidebarButton" onClick={this.toggleHidden.bind(this)}>
      <span className="mobileButton" />
    </button>
  );
}

export default SideBar;
