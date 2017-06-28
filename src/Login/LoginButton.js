// Libraries
import React, { Component } from 'react';
import { Button, Modal } from "antd";
// CSS
import '../CSS/Header.css';

class LoginButton extends Component {

  render() {
    return (
      <div>
        <Button key="submit" type="Primary" size="large"
        onClick={() => this.props.onClick()}>
          {this.props.loggedIn &&
            <div>Log Out</div>}
          {!this.props.loggedIn &&
            <div>Log In</div>}
        </Button>

        {this.props.showModal == "unauthenticated" &&
          <Modal
            title="Unauthenticated Employee"
            visible={true}
            onOk={this.props.closeModal}
            onCancel={this.props.closeModal}
            wrapClassName="vertical-center-modal"
            width="600px"
            footer={[
              <Button key="back" type="Default" size="large" onClick={this.props.closeModal}>
                Close
              </Button>,
            ]}
          >
            Sorry, you have not been verified by the Service Manager yet.
          </Modal>}

          {this.props.showModal == "new" &&
          <Modal
            title="New Employee"
            visible={true}
            onOk={this.props.closeModal}
            onCancel={this.props.closeModal}
            wrapClassName="vertical-center-modal"
            width="600px"
            footer={[
              <Button key="back" type="Default" size="large" onClick={this.props.closeModal}>
                Close
              </Button>,
            ]}
          >
            Sorry, Your email was not found in our records. Please feel free to sign up with the Sign Up button. 
          </Modal>}
      </div>
    )
  }
}

export default LoginButton;