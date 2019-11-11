import React from 'react'
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import appReducer from './reducers/reducers'
import AppContainer from './containers/appContainer';

const store = createStore(appReducer)

ReactDOM.render(
    <Provider store={ store }>
        <AppContainer title="Fetch Users"/>
    </Provider>,
    
    document.getElementById('root')
    
)