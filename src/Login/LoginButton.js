// Libraries
import React, { Component } from 'react';
import { Button } from "antd";
// CSS
import '../CSS/Header.css';

class LoginButton extends Component {
  render() {
    return (
      <Button key="submit" type="Default" size="large">
        Log In
      </Button>
    )
  }
}

export default LoginButton;