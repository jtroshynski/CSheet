import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import eric from "./images/idiot.png";
import "./App.css";
import ChooseRace from "./ChooseRace.js";
import StartPage from "./StartPage.js";
import Amplify, { Analytics } from "aws-amplify";
import aws_exports from "./aws-exports";
// import { withAuthenticator } from "aws-amplify-react";

Amplify.configure(aws_exports);

class App extends Component {
  // appRoutes = [
  //   {
  //     path: "/",
  //     component: StartPage
  //   },
  //   {
  //     path: "chooseRace",
  //     component: ChooseRace
  //   },
  //   {
  //     path: "**",
  //     component: PageNotFoundComponent
  //   }
  // ];

  render() {
    Analytics.record("appRender");
    return (
      <div className="App">
        <header className="App-header">
          <img src={eric} className="App-logo" alt="logo" />
          <h1 className="App-title">CSheet</h1>
        </header>
        <HashRouter>
          <div>
            <Route exact path="/" component={StartPage} />
            <Route path="/chooseRace" component={ChooseRace} />
          </div>
        </HashRouter>
      </div>
    );
  }
}
export default App;
// export default withAuthenticator(App);
