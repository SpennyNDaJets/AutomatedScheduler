// Libraries
import React, { Component } from 'react';
import LandingImage from "../Images/landingPage.png";
import "../CSS/Home.css";

class Home extends Component {
  render () {
    return (
      <div className="landingContainer">
        <img className="landingImage" src={LandingImage} alt="LandingLogo" /> 
      </div>
    )
  }
}

export default Home;