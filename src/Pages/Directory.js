// Libraries
import React, { Component } from 'react';
//Components
import NavBar from "../Dashboard/NavBar.js";
import DirectoryTable from "../Dashboard/DirectoryTable.js";
import { boylan, database } from "../firebase_config.js";

class CreateSchedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allUsers: []
    }
  }

  componentWillMount() {
    database.ref().once("value", snapshot => {
      if (snapshot.val() != null) {
        let employees = Object.values(snapshot.val().user).filter(user => {
          return user.employeeStatus;
        })

        this.setState({
          ...this.state,
          allUsers: employees || {}
        });
      }
    });
  }

  render () {
    const conditionalTabs = [
      { name: "Dashboard", url: "/dashboard" },
      { name: "Requests Off", url: "/dashboard/requestoff" },
      { name: "Directory", url: "/dashboard/directory" },
      { name: "Profile", url: "/dashboard/profile" },
      { name: "Manage Requests", url:"/dashboard/manage/request"},
      { name: "Manage Employee", url:"/dashboard/manage/employee"},
      { name: "Create Schedule", url:"/dashboard/createschedule"}
    ];
    return (
      <div>
        <NavBar
          tabs={conditionalTabs}
          currentURL="/dashboard/directory"/>
        <DirectoryTable userData={this.state.allUsers} />
      </div>
    )
  }
}

export default CreateSchedule;