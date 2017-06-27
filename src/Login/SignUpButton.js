// Libraries
import React, { Component } from 'react';
import { Button } from 'antd';
// CSS
import '../CSS/Header.css';

class SignUpButton extends Component {
  render() {
    return (
      <Button key="submit" type="Default" size="large">
        Sign Up 
      </Button>
    )
  }
}

export default SignUpButton;