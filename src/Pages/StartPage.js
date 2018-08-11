import React, { Component } from "react";
import "../Stylesheets/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Analytics } from "aws-amplify";

class StartPage extends Component {
  render() {
    Analytics.record("appRender");
    return (
      <div className="content">
        <h1 className="pageHeader"> Welcome </h1>
        <p className="paragraphText">
          lemme tell ya about how this app works. I'll totally explain myself in
          this paragraph.
        </p>
        {
          <Link to={`/chooseRace`}>
            <button className="button-large">Start your cSheet</button>
          </Link>
        }
        <br />
        <a href="https://github.com/jtroshynski/CSheet" title="Github">
          <FontAwesomeIcon
            className="footerIcon"
            icon={["fab", "github"]}
            size="3x"
          />
        </a>
      </div>
    );
  }
}

export default StartPage;
// export default withAuthenticator(App);
