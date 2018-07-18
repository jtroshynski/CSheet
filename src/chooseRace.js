import React, { Component } from "react";
import eric from "./images/idiot.png";
import human from "./images/human.png";
import "./App.css";
import Amplify, { Analytics } from "aws-amplify";
import aws_exports from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";

Amplify.configure(aws_exports);

class chooseRace extends Component {
  render() {
    Analytics.record("appRender");
    return (
      <div className="chooseRace">
        <header className="App-header">
          <img src={eric} className="App-logo" alt="logo" />
          <h1 className="largeHeader">CHOOSE YOUR CHARACTER</h1>
        </header>
        <p>
          <ul className="tiles races">
            <img src={human} alt="Human" />
            <img src={human} alt="Human" />
            <img src={human} alt="Human" />
            <img src={human} alt="Human" />
            <img src={human} alt="Human" />
            <img src={human} alt="Human" />
          </ul>
        </p>
      </div>
    );
  }
}

export default chooseRace;
// export default withAuthenticator(App);
