import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import UserContainer from './UserContainer'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <UserContainer />
      </Provider>
    )
  }
}