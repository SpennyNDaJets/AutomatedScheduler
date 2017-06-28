import React, { Component } from "react";
import { Table } from "antd";

export default class DirectoryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedInfo: null
    };
  }

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortedInfo: sorter
    });
  };

  setFieldSort(field) {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: field
      }
    });
  }

  render() {
    // create the array of data from the passed in data
    const data = Object.values(this.props.userData).map(user => {
      return user;
    });

    let { sortedInfo } = this.state;
    sortedInfo = sortedInfo || {};
    const columns = [
      {
        title: "First Name",
        dataIndex: "firstName",
        key: "firstName",
        sorter: (a, b) => a.firstName.localeCompare(b.firstName),
        sortOrder: sortedInfo.columnKey === "firstName" && sortedInfo.order
      },
      {
        title: "Last Name",
        dataIndex: "lastName",
        key: "lastName",
        sorter: (a, b) => a.lastName.localeCompare(b.lastName),
        sortOrder: sortedInfo.columnKey === "lastName" && sortedInfo.order
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        sorter: (a, b) => a.email.localeCompare(b.email),
        sortOrder: sortedInfo.columnKey === "email" && sortedInfo.order
      },
      {
        title: "Phone Number",
        dataIndex: "phoneNumber",
        key: "phoneNumber",
        sorter: (a, b) => a.phoneNumber.localeCompare(b.phoneNumber),
        sortOrder: sortedInfo.columnKey === "phoneNumber" && sortedInfo.order
      }
    ];

    // create the info about the columns
    return (
      <Table columns={columns} dataSource={data} onChange={this.handleChange} />
    );
  }
}