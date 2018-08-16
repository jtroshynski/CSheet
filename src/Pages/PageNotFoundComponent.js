import React, { Component } from "react";
import "../Stylesheets/App.css";
import { Analytics } from "aws-amplify";

class PageNotFoundComponent extends Component {
  render() {
    Analytics.record("appRender");
    return (
      <div className="content">
        <h1 className="pageHeader">Oh Hello</h1>
        <p className="paragraphText">
          these are not the droids you're looking for
        </p>
      </div>
    );
  }
}

export default PageNotFoundComponent;
// export default withAuthenticator(App);
