import React, { Component } from "react";
import "Stylesheets/App.css";
import { Analytics } from "aws-amplify";

class PageNotFound extends Component {
  render() {
    Analytics.record("appRender");
    return (
      <div className="content">
        <h1 className="pageHeader">Hello There</h1>
        <p className="paragraphText">{"General Kenobi!"}</p>
      </div>
    );
  }
}

export default PageNotFound;
// export default withAuthenticator(App);
