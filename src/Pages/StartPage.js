import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Analytics } from "aws-amplify";

class StartPage extends Component {
  render() {
    Analytics.record("appRender");
    return (
      <div>
        <p className="App-intro">
          lemme tell ya about how this app works. I'll totally explain myself in
          this paragraph.
        </p>
        {
          <Link to={`/chooseRace`}>
            <button class="button-large">Start your cSheet</button>
          </Link>
        }
        <br />
        <a className="readMore">read more stuff about cSheet</a>
      </div>
    );
  }
}

export default StartPage;
// export default withAuthenticator(App);
