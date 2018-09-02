import React, { Component } from "react";
import "sass/main.css";
import { Analytics } from "aws-amplify";

class DMTools extends Component {
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

export default DMTools;
// export default withAuthenticator(App);
