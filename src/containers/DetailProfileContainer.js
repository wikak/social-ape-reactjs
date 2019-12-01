import React, { Component } from "react";
//import { connect } from "react-redux";
import DetailsProfil from "../components/DetailProfil";
//import { displayInfo } from "../actions/actions";


class DetailProfileContainer extends Component {
  render() {
    return <div>
       <React.Fragment>
        <DetailsProfil  />
      </React.Fragment>
    </div>;
  }
}
export default DetailProfileContainer;
