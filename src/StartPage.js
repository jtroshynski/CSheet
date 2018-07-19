import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Analytics } from "aws-amplify";

class StartPage extends Component {
  render() {
    Analytics.record("appRender");
    return (
      <div>
        <p className="App-intro">yer a wizard, Harry</p>
        {
          <Link to={`/chooseRace`}>
            <button class="button-large" onClick={this.chooseRace}>
              go to hogwarts
            </button>
          </Link>
        }
        <br />
        <a className="readMore">read more stuff</a>
      </div>
    );
  }

  //   chooseRace() {
  //     return (
  //       <HashRouter>
  //         <div>
  //           <Route path="/chooseRace" component={ChooseRace} />
  //         </div>
  //       </HashRouter>
  //     );
  //   }
}

export default StartPage;
// export default withAuthenticator(App);
