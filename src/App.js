// Libraries
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
// Pages
import Home from './Pages/Home.js';
import Dashboard from './Pages/Dashboard.js'
// Components
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="RouterContainer">
            <div className="App-header">
              <Header/>
            </div>
            <div className="Routes">
              <Route exact path="/" component={Home}/>
              <Route exact path="/dashboard" component={Dashboard}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
