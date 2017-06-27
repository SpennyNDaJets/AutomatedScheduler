// Libraries
import React, { Component } from 'react';
//Components
import NavBar from "../Dashboard/NavBar.js";

class Profile extends Component {
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
          currentURL="/dashboard/profile"/>
        <h1>
          Welcome to your Profile
        </h1>
      </div>
    )
  }
}

export default Profile;