// Libraries
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
// Pages
import Home from './Pages/Home.js';
import Dashboard from './Pages/Dashboard.js';
import RequestOff from './Pages/RequestOff.js';
import Profile from './Pages/Profile.js';
import ManageEmployee from './Pages/ManageEmployee.js';
import ManageRequest from './Pages/ManageRequest.js';
import CreateSchedule from './Pages/CreateSchedule.js';
import Directory from './Pages/Directory.js';
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
              <Route path="/dashboard/requestoff" component={RequestOff}/>
              <Route path="/dashboard/profile" component={Profile}/>
              <Route path="/dashboard/directory" component={Directory}/>
              <Route path="/dashboard/manage/employee" component={ManageEmployee}/>
              <Route path="/dashboard/manage/request" component={ManageRequest}/>
              <Route path="/dashboard/createschedule" component={CreateSchedule}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
