import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import SideBar from "Components/SideBar";
import ChooseRace from "Pages/ChooseRace";
import ChooseClass from "Pages/ChooseClass";
import StartPage from "Pages/StartPage";
import ChooseAttributes from "Pages/ChooseAttributes";

import PageNotFountComponent from "Pages/PageNotFound";
import "Stylesheets/App.css";

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
      <div className="CSheet">
        <Router>
          <div className="body">
            <SideBar />
            <Switch>
              <Route exact path="/" component={StartPage} />
              <Route path="/chooseRace" component={ChooseRace} />
              <Route path="/chooseClass" component={ChooseClass} />
              <Route path="/chooseAttributes" component={ChooseAttributes} />
              <Route component={PageNotFountComponent} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
// export default withAuthenticator(App);
