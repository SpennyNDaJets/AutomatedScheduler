// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Components
import LoginButton from "./Login/LoginButton.js";
import SignUpButton from "./Login/SignUpButton.js";
// Utilities
import BoylanLogo from './Images/boylan_logo.png';
import "./CSS/Header.css";

class Header extends Component {
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
                Boylan Heights Scheduler
              </h1>
            </Link>
          </div>

          <div className="buttonContainer">
            <div className="signUpButton">
              <SignUpButton/>
            </div>
            <div className="loginButton">
              <LoginButton/>
            </div>
          </div>
        </div>
        )
    }
}

export default Header;