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
          Are you tired of having to write down stuff on your character sheet?
          Does DnD feel overwhelming and complicated? Are you tired of using a
          PENCIL? Well look no further, for you've stumbled upon a digital
          version of the fifth edition character sheet!
        </p>
        {
          <Link to={`/chooseRace`}>
            <button className="button large">Start your cSheet</button>
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
