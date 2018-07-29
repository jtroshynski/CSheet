import React, { Component } from "react";
import "../App.css";
import { Analytics } from "aws-amplify";
import StartPage from "./StartPage";

class PageNotFoundComponent extends Component {
  render() {
    Analytics.record("appRender");
    return (
      <div className="pnf">
        <h1 className="pageHeader">Oh Hello </h1>
        <p>there is nothing to read here. move along.</p>
      </div>
    );
  }
}

export default PageNotFoundComponent;
// export default withAuthenticator(App);
