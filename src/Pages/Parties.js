import React, { Component } from "react";
import "sass/main.css";
import { Analytics } from "aws-amplify";

class PageNotFound extends Component {
  render() {
    // Analytics.record("appRender");
    return (
      <div>
        <h1 className="header">Under Construction</h1>
        <p className="regularBody">{"Check back later!"}</p>
      </div>
    );
  }
}

export default PageNotFound;
// export default withAuthenticator(App);
