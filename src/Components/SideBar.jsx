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
      <ul class="list-group">
        <div class="list-group">
          <a
            href="/characterSheet"
            class="list-group-item list-group-item-action flex-column align-items-start active"
          >
            <div class="d-flex w-100 justify-content-between">
              <small>img</small>
              <h5 class="mb-1">Character Sheet</h5>
            </div>
          </a>
          <a
            href="/parties"
            class="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div class="d-flex w-100 justify-content-between">
              <small>img</small>
              <h5 class="mb-1">Parties</h5>
            </div>
          </a>
          <a
            href="/spellbook"
            class="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div class="d-flex w-100 justify-content-between">
              <small>img</small>
              <h5 class="mb-1">Spellbook</h5>
            </div>
          </a>
        </div>
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
