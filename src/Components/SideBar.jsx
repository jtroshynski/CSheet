import React, { Component } from "react";
import { Link } from "react-router-dom";
import cSheet from "Images/CSheet Logos/CSheet Logo Green Black.svg";

import "sass/main.css";

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
          <img src={cSheet} alt="cSheet" />{" "}
        </Link>
      </div>
      <ul>
        <Link
          to="/characterSheet"
          title="Character Sheet"
          style={{ textDecoration: "none" }}
        >
          <li className="navigationIcon">
            <span className="CSheetIcon" />
            <p className="sidebarText">Character Sheet</p>
          </li>
        </Link>

        <Link to="/parties" title="Parties" style={{ textDecoration: "none" }}>
          <li className="navigationIcon">
            <span className="partyIcon" />
            <p className="sidebarText">Parties</p>
          </li>
        </Link>

        <Link to="/maps" title="Maps" style={{ textDecoration: "none" }}>
          <li className="navigationIcon">
            <span className="CSheetIcon" />
            <p className="sidebarText">Maps</p>
          </li>
        </Link>

        <Link
          to="/spellbook"
          title="Spellbook"
          style={{ textDecoration: "none" }}
        >
          <li className="navigationIcon">
            <span className="CSheetIcon" />
            <p className="sidebarText">Spellbook</p>
          </li>
        </Link>
        <Link to="/dmTools" title="DM Tools" style={{ textDecoration: "none" }}>
          <li className="navigationIcon">
            <span className="CSheetIcon" />
            <p className="sidebarText">DM Tools</p>
          </li>
        </Link>
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
