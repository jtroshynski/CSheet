import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import TitleBar from "Components/TitleBar";
import Sidebar from "react-sidebar";

import ChooseRace from "Pages/ChooseRace";
import ChooseClass from "Pages/ChooseClass";
import StartPage from "Pages/StartPage";
import ChooseAttributes from "Pages/ChooseAttributes";
import Parties from "Pages/Parties";
import Maps from "Pages/Maps";
import Spellbook from "Pages/Spellbook";
import DMTools from "Pages/DMTools";
import CharacterSheet from "Pages/CharacterSheet";

import PageNotFound from "Pages/PageNotFound";
import "sass/main.css";

import Amplify, { Analytics } from "aws-amplify";
import aws_exports from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";

import cSheetLogo from "Images/CSheet Logos/CSheet Logo Green Black.svg";

import cSheetIconYellow from "Images/CSheet Icons/CSheet Icon Yellow.svg";
import cSheetIconSeaGreen from "Images/CSheet Icons/CSheet Icon Sea Green.svg";
import cSheetIconBrown from "Images/CSheet Icons/CSheet Icon Brown.svg";
import cSheetIconBlue from "Images/CSheet Icons/CSheet Icon Blue.svg";
import cSheetIconOrange from "Images/CSheet Icons/CSheet Icon Orange.svg";

Amplify.configure(aws_exports);

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    Analytics.record("appRender");
    return (
      <div className="App">
        <Router>
          <Sidebar
            sidebar={
              <div className="sideBar">
                <div className="sideBarLogoSection">
                  <Link to="/">
                    <img src={cSheetLogo} alt="CSheet" />
                  </Link>
                </div>
                <div className="list-group">
                  <a
                    href="/characterSheet"
                    className="list-group-item list-group-item-info sidebarItem"
                  >
                    <img
                      className="sidebarIcon"
                      src={cSheetIconYellow}
                      align="left"
                    />
                    <p className="sidebarText">Character Sheet</p>
                  </a>
                  <a
                    href="/parties"
                    className="list-group-item list-group-item-info sidebarItem"
                  >
                    <img
                      className="sidebarIcon"
                      src={cSheetIconSeaGreen}
                      align="left"
                    />
                    <p className="sidebarText">Parties</p>
                  </a>
                  <a
                    href="/spellbook"
                    className="list-group-item list-group-item-info sidebarItem"
                  >
                    <img
                      className="sidebarIcon"
                      src={cSheetIconBrown}
                      align="left"
                    />
                    <p className="sidebarText">Spellbook</p>
                  </a>
                  <a
                    href="/maps"
                    class="list-group-item list-group-item-info sidebarItem"
                  >
                    <img
                      className="sidebarIcon"
                      src={cSheetIconBlue}
                      align="left"
                    />
                    <p className="sidebarText">Maps</p>
                  </a>
                  <a
                    href="/dmTools"
                    className="list-group-item list-group-item-info sidebarItem"
                  >
                    <img
                      className="sidebarIcon"
                      src={cSheetIconOrange}
                      align="left"
                    />
                    <p className="sidebarText">DM Tools</p>
                  </a>
                </div>
              </div>
            }
            open={this.state.sidebarOpen}
            docked={this.state.sidebarDocked}
            onSetOpen={this.onSetSidebarOpen}
          >
            <TitleBar />
            <div className="content">
              <Switch>
                <Route exact path="/" component={StartPage} />
                <Route path="/chooseRace" component={ChooseRace} />
                <Route path="/chooseClass" component={ChooseClass} />
                <Route path="/chooseAttributes" component={ChooseAttributes} />
                <Route path="/parties" component={Parties} />
                <Route path="/characterSheet" component={CharacterSheet} />
                <Route path="/maps" component={Maps} />
                <Route path="/spellbook" component={Spellbook} />
                <Route path="/dmTools" component={DMTools} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </Sidebar>
        </Router>
      </div>
    );
  }
}
// export default App;
export default withAuthenticator(App);
