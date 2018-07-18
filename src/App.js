import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import eric from "./images/idiot.png";
import "./App.css";
import chooseRace from "./chooseRace.js";
import Amplify, { Analytics } from "aws-amplify";
import aws_exports from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";

Amplify.configure(aws_exports);

class App extends Component {
  render() {
    Analytics.record("appRender");
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/race" component={chooseRace} />
          <header className="App-header">
            <img src={eric} className="App-logo" alt="logo" />
            <h1 className="App-title">CSheet</h1>
          </header>
          <p className="App-intro">yer a wizard, Harry</p>
          <Link to="/race">
            <button className="button-large">go to hogwarts</button>
          </Link>
          <br />
          <a className="readMore">read more stuff</a>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
// export default withAuthenticator(App);
