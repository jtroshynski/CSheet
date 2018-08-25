import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import SideBar from "Components/SideBar";
import TitleBar from "Components/TitleBar";
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
import aws_exports from "aws-exports";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faAnchor,
  faChartBar
} from "@fortawesome/free-solid-svg-icons";
// import { withAuthenticator } from "aws-amplify-react";

library.add(fab, faCheckSquare, faCoffee, faAnchor, faChartBar);
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    Analytics.record("appRender");
    return (
      <div className="App">
        <Router>
          <div className="App">
            <TitleBar />
            <SideBar />
            <div className="content">
              <Switch>
                <Route exact path="/" component={StartPage} />
                <Route path="/chooseRace" component={ChooseRace} />
                <Route path="/chooseClass" component={ChooseClass} />
                <Route path="/chooseAttributes" component={ChooseAttributes} />9
                <Route path="/parties" component={Parties} />
                <Route path="/characterSheet" component={CharacterSheet} />
                <Route path="/maps" component={Maps} />
                <Route path="/spellbook" component={Spellbook} />
                <Route path="/dmTools" component={DMTools} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
// export default withAuthenticator(App);
