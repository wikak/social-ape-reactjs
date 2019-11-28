import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchApi } from "../actions/actions";
//import PropTypes from "prop-types";
//import { bindActionCreators } from 'redux';

//import { getDataFromApi } from "../actions/actions";

import User from "../components/User";


class userContainer extends Component {

  componentDidMount() {
    //console.log("componentDidMount");
    this.props.dispatch(fetchApi());
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <User users={users} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
   users: state
});

export default connect(mapStateToProps)(userContainer);
