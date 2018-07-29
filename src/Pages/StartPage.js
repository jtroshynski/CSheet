import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Analytics } from "aws-amplify";

class StartPage extends Component {
  render() {
    Analytics.record("appRender");
    return (
      <div>
        <h1 className="pageHeader"> Welcome </h1>
        <p className="App-intro">
          lemme tell ya about how this app works. I'll totally explain myself in
          this paragraph.
        </p>
        {
          <Link to={`/chooseRace`}>
            <button className="button-large">Start your cSheet</button>
          </Link>
        }
        <br />
        <Link className="readMore" to={`/PageNotFound`}>
          read more stuff about cSheet
        </Link>
      </div>
    );
  }
}

export default StartPage;
// export default withAuthenticator(App);
