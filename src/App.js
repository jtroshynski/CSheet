import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import SideBar from "./Components/SideBar.js";
import ChooseRace from "./Pages/ChooseRace.js";
import StartPage from "./Pages/StartPage.js";
import PageNotFountComponent from "./Pages/PageNotFoundComponent";
import "./Stylesheets/App.css";

import Amplify, { Analytics } from "aws-amplify";
import aws_exports from "./aws-exports";

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
      <body className="CSheet">
        <Router>
          <div className="body">
            <SideBar />
            <Switch>
              <Route exact path="/" component={StartPage} />
              <Route path="/chooseRace" component={ChooseRace} />
              <Route path="*" exact={true} component={PageNotFountComponent} />
            </Switch>
          </div>
        </Router>
      </body>
    );
  }
}
export default App;
// export default withAuthenticator(App);
