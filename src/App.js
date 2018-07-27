import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import eric from "./images/idiot.png";
import "./App.css";
import ChooseRace from "./Pages/ChooseRace.js";
import StartPage from "./Pages/StartPage.js";
// import PageNotFountComponent from "./Pages/PageNotFoundComponent";
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
          <h1 className="App-title">cSheet</h1>
        </header>
        <HashRouter>
          <div>
            <Route exact path="/" component={StartPage} />
            <Route path="/chooseRace" component={ChooseRace} />
            {/* <Route path="**" component={PageNotFountComponent} /> */}
          </div>
        </HashRouter>
      </div>
    );
  }
}
export default App;
// export default withAuthenticator(App);
