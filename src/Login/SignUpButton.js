// Libraries
import React, { Component } from 'react';
import { Button, Modal } from 'antd';
import NewUserForm from "./NewUserForm.js";
// CSS
import '../CSS/Header.css';


class SignUpButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        employeeStatus: false,
        adminStatus: false,
        skill: 0,
        key: ""
      }
    };
  }

  updateNewUserInfo = (field, value) => {
    let updateNewUser = this.state.newUser;
    updateNewUser[field] = value;

    this.setState({
      newUser: updateNewUser
    })
  }

  render() {
    return (
      <div>
        {!this.props.loggedIn &&
          <Button key="submit" type="Primary" size="large"
          onClick={() => this.props.onClick()}>
            Sign Up 
          </Button>}

        {this.props.showModal == "currentEmployee" &&
          <Modal
            title="Current Employee"
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
            You have already signed up. 
          </Modal>}

          {this.props.showModal == "signUp" &&
            <Modal
              title="Welcome"
              visible={true}
              onOk={this.props.onSubmit}
              onCancel={this.props.closeModal}
              wrapClassName="vertical-center-modal"
              width="500px"
              footer={[
                <Button key="submit" type="Primary" size="large" onClick={() => this.props.onSubmit(this.state.newUser)}>
                  Submit
                </Button>,
                <Button key="back" type="Default" size="large" onClick={this.props.closeModal}>
                  Close
                </Button>
              ]}
            >
              <NewUserForm
              onChange={this.updateNewUserInfo}
              newUser={this.state.newUser}/>
            </Modal>}
      </div>
    )
  }
}

export default SignUpButton;