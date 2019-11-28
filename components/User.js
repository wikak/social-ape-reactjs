import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      (
        <React.Fragment>
          <h1>Members</h1>
          <ul>
          {this.props.users.data.map((item, i) => (
              <li key={i}>{item.username}</li>
            ))}
          </ul>
        </React.Fragment>
      )
    );
  }
}

/**   **/
