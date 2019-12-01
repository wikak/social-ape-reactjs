import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "../configureStore";
import UserContainer from "./UserContainer";
import Banner from "../components/banner";
import DetailProfileContainer from "../containers/DetailProfileContainer";

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Banner />
        <div className="container">
          <div className="columns">
            <div className="column is-four-fifths">
              <UserContainer />
            </div>
            <div className="column"><DetailProfileContainer /> </div>
          </div>
        </div>
      </Provider>
    );
  }
}
