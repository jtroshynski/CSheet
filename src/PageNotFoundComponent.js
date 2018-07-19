import React, { Component } from "react";
import "./App.css";
import { Analytics } from "aws-amplify";

class PageNotFoundComponent extends Component {
  render() {
    Analytics.record("appRender");
    return (
      <div className="pnf">
        <p>oooooooooooooooops</p>
      </div>
    );
  }
}

export default PageNotFoundComponent;
// export default withAuthenticator(App);
