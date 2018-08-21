import React, { Component } from "react";
import "sass/main.css";
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
          My name is Jeremy Troshynski, and I'm currently working on a digital
          version of the Dungeons & Dragons fifth edition character sheet.
          You're welcome to give it a spin or check out my code using the github
          link below.
        </p>
        {
          <Link to={`/chooseRace`}>
            <button className="button large">Start your CSheet</button>
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
