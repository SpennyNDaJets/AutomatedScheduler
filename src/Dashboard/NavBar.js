import React, { Component } from "react";
import { Menu } from "antd";
import { Redirect } from "react-router-dom";
import "../CSS/NavBar.css";

/* PROPS:
    className: string; MUST be either "horizontal" or "vertical" to display properly
    tabs: [{
      name: string; name of the tab to be displayed,
      url: string; path of the url for Route Router to follow when clicked
    }]
    currentURL: string; the current URL to check against the URL we'd redirect to
*/

/* STATE:
    shouldRedirect: boolean; determines whether to redirect to a new page
    redirectURL: string; if shouldRedirect is true, redirect to this url
*/

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      redirectUrl: "/"
    };
  }

  // takes in array of tab objects (i.e. this.props.tabs) and returns array of <MenuItem> objects
  // to be displayed
  createTabsList(tabs) {
    const listTabs = tabs.map(tab => {
      return (
        // note we're assiging the url as the key to access later in the handleClick method
        <Menu.Item key={tab.url}>
          {tab.name}
        </Menu.Item>
      );
    });
    return listTabs;
  }

  // gets called when a tab is clicked on
  changeRoute(e) {
    // if the new URL is not the current URL, set state to redirect upon re-rendering
    const newURL = e.key;
    if (!(newURL === this.props.currentURL)) {
      this.setState({
        shouldRedirect: true,
        redirectUrl: newURL
      });
    }
  }

  render() {
    // redirects to new URL if necessary
    if (this.state.shouldRedirect) {
      return <Redirect push to={this.state.redirectUrl} />;
    }

    // else render the navigation bar itself
    const listTabs = this.createTabsList(this.props.tabs);
    let narrow = false;
    if (this.props.className === "verticle") {
      narrow = true;
    }
    return (
      <div>
        <div className="navBar">
          <Menu
              mode="horizontal"
              className="side"
              theme="dark"
              size="large"
              onClick={e => this.changeRoute(e)}
            >
              {listTabs}
          </Menu>
        </div>
      </div>
    );
  }
}

export default NavBar;