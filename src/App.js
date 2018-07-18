import React, { Component } from 'react';
import eric from './images/idiot.png';
import './App.css';
import  Amplify, { Analytics }  from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';


Amplify.configure(aws_exports);

class App extends Component {
  
  render() {
    Analytics.record('appRender');
    return (
      <div className="App">
        <header className="App-header">
          <img src={eric} className="App-logo" alt="logo" />
          <h1 className="App-title">only idiots make accounts</h1>
        </header>
        <p className="App-intro">
          git gud
        </p>
      </div>
    );
  }
}

export default withAuthenticator(App);
