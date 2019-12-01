import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchApi } from "../actions/actions";
//import { getUserProfile } from "../actions/actions";

import User from "../components/userList";

class userContainer extends Component {
  componentDidMount() {
    //console.log("componentDidMount");
    this.props.dispatch(fetchApi());
  }

  render() {
    const { users } = this.props;
    return (
      <React.Fragment>
        <User users={users} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userReducer
});

export default connect(mapStateToProps)(userContainer);
