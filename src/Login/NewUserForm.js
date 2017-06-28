import React, { Component } from "react";
import { Input, Button, Modal } from "antd";
import '../CSS/NewUserForm.css';

class NewUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstThreeDigits: "",
      secondThreeDigits: "",
      lastFourDigits: ""
    }
  }

  updatePhoneNumber = (field, value) => {
    this.setState({
      ...this.state,
      [field]: value
      },
      function createPhoneNumber() {
        let newTelephoneNumber = "(" + this.state.firstThreeDigits + ")" + this.state.secondThreeDigits +
          "-" + this.state.lastFourDigits;
        this.props.onChange("phoneNumber", newTelephoneNumber);
    });
  }

  render() {
    return (
      <div className="newUserContainer">
        <div className="newUserInputField">
          <div className="newUserLabel">
            <h3>First Name: </h3>
          </div>
          <div className="newUserInput">
          <Input
            style={{ width: 200 }}
            onChange={e => this.props.onChange("firstName", e.target.value)}
            value={this.props.newUser["firstName"]}
          />
          </div>
        </div>
        <div className="newUserInputField">
          <div className="newUserLabel">
            <h3>Last Name: </h3>
          </div>
          <div className="newUserInput">
          <Input
            style={{ width: 200 }}
            onChange={e => this.props.onChange("lastName", e.target.value)}
            value={this.props.newUser["lastName"]}
          />
          </div>
        </div>
        <div className="newUserInputField">
          <div className="newUserLabel">
            <h3>Contact Email: </h3>
          </div>
          <div className="newUserInput">
            <Input
              style={{ width: 200 }}
              onChange={e => this.props.onChange("email", e.target.value)}
              value={this.props.newUser["email"]}
            />
          </div>
        </div>
        <div className="newUserInputField">
          <div className="newUserLabel">
            <h3>Phone Number (XXX XXX XXXX) </h3>
          </div>
          <div className="phoneNumberContainer">
            <div className="threeNumberInput">
              <Input
                style={{ width: 40 }}
                onChange={e => this.updatePhoneNumber("firstThreeDigits", e.target.value)}
                value={this.state.firstThreeDigits}
              />
            </div>
            <div className="phoneNumberInput">
              <Input
                style={{ width: 40 }}
                onChange={e => this.updatePhoneNumber("secondThreeDigits", e.target.value)}
                value={this.state.secondThreeDigits}
              />
            </div>
            <div className="phoneNumberInput">
              <Input
                style={{ width: 60 }}
                onChange={e => this.updatePhoneNumber("lastFourDigits", e.target.value)}
                value={this.state.lastFourDigits}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewUserForm;