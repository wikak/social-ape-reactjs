import 'babel-polyfill'
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './margin_padding_helper.css';
import './index.css';

//import _ from 'underscore'


import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

render(<Root />, document.getElementById('root'))