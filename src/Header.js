// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
// Components
import { boylan, database } from "./firebase_config.js";
import LoginButton from "./Login/LoginButton.js";
import SignUpButton from "./Login/SignUpButton.js";
// Utilities
import BoylanLogo from './Images/boylan_logo.png';
import "./CSS/Header.css";

let provider = new firebase.auth.GoogleAuthProvider();

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      employees: [],
      unauthenticated: [],
      users: {},
      newUserKey: ""
    }
  }

  componentWillMount() {
    database.ref().on("value", snapshot => {
      //make sure database is not empty
      if (snapshot.val() != null) {

        // check for employees or unauthenticated employees
        let employeeList = [];
        let unauthenticatedList = [];

        if (snapshot.val().user != null) {
          employeeList = Object.values(snapshot.val().user).filter( user => {
            return user.employeeStatus;
          });
          unauthenticatedList = Object.values(snapshot.val().user).filter( user => {
            return !user.employeeStatus;
          });
        }

        //check if user is logged in 
        if (!((localStorage.getItem("user") == {}) || (localStorage.getItem("user") == null))) {
          this.setState({
            ...this.state,
            loggedIn: true,
            employees: employeeList,
            unauthenticated: unauthenticatedList,
            users: snapshot.val().user || {}
          });
        }
        else {
          this.setState({
            ...this.state,
            employees: employeeList,
            unauthenticated: unauthenticatedList,
            users: snapshot.val().user || {}
          });
        }
      }
    });
  }

  handleLogIn = () => {
    //sign employee out
    if (this.state.loggedIn) {
      firebase.auth().signOut().then(() => {
        localStorage.setItem("user", {});
        this.setState({
          ...this.state,
          loggedIn: false
        });
        window.location.href = "./";
      })
      .catch(function(error) {});
    }
    // check log in
    else {
      firebase.auth().signInWithPopup(provider).then(result => {
        const employee = this.state.employees.filter( employee => {
          return employee.key == result.user.uid;
        })
        const unauthenticated = this.state.unauthenticated.filter( employee => {
          return employee.key == result.user.uid;
        })

        // log employee in
        if (employee.length > 0) {
          localStorage.setItem("user", JSON.stringify(this.state.employees[result.user.uid]));
          this.setState({
              ...this.state,
              loggedIn: true,
            });
            window.location.href = "/dashboard";
        }
        // user is not authenticated
        else if (unauthenticated.length > 0) {
          console.log("Unauthenticated")
          localStorage.setItem("user", {});
          this.setState({
            ...this.state,
            loggedIn: false,
            showModal: "unauthenticated"
            });
        }
        // user never signed up
        else {
          console.log("New User")
          localStorage.setItem("user", {});
          this.setState({
            ...this.state,
            loggedIn: false,
            showModal: "new"
            });
        }
      })
      .catch(function(error) {});
    }
  }

  signUp = () => {
    firebase.auth().signInWithPopup(provider).then(result => {
      if (this.state.users[result.user.uid] !== undefined) {
        this.setState({
          ...this.state,
          showModal: "currentEmployee"
        })
      }
      else {
        let newEmployee = this.state.newUser;
        this.setState({
          ...this.state,
          newUserKey: result.user.uid,
          showModal: "signUp"
        })
      }
    })
    .catch(function(error) {});
  }

  submitNewEmployee = (newUser) => {
    let submittedNewEmployee = newUser;
    submittedNewEmployee["key"] = this.state.newUserKey;

    database.ref("user" + "/" + submittedNewEmployee.key)
          .set(submittedNewEmployee);

    //update all users
    let updateUsers = this.state.users;
    updateUsers[submittedNewEmployee.key] = submittedNewEmployee;

    //update unauthenticaed
    let updateUnauthenticated = this.state.unauthenticated;
    updateUnauthenticated.push(submittedNewEmployee);

    //update state
    this.setState({
      ...this.state,
      showModal: "",
      users: updateUsers,
      unauthenticated: updateUnauthenticated
    })
  }

  closeModal = () => {
    this.setState({
      ...this.state,
      showModal: ""
    })
  }

  render() {
      return (
        <div className="headerContainer">
          <div className="boylanLogoContainer">
            <Link to="/dashboard">
              <img className="boylanLogo"
                src={BoylanLogo}
                alt="Boylan_Logo"
              />
            </Link>
          </div>

          <div className="titleContainer">
            <Link to="/">
              <h1 className="title">
                Boylan Heights RoboBree
              </h1>
            </Link>
          </div>

          <div className="buttonContainer">
            <div className="signUpButton">
              <SignUpButton
              loggedIn={this.state.loggedIn}
              onClick={this.signUp}
              showModal={this.state.showModal}
              onSubmit={this.submitNewEmployee}
              users={this.state.users}
              closeModal={this.closeModal}
              />
            </div>
            <div className="loginButton">
              <LoginButton
              loggedIn={this.state.loggedIn}
              onClick={this.handleLogIn}
              showModal={this.state.showModal}
              unauthenticated={this.state.unauthenticated}
              employees={this.state.employees}
              closeModal={this.closeModal}
              />
            </div>
          </div>
        </div>
        )
    }
}

export default Header;