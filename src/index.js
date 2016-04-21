import React from 'react'
import ReactDOM from 'react-dom';
import { Root } from './containers/Root'
import { configureStore } from './redux/configureStore';

import './styles/main.css';

var initialState = {
  contacts: [{
    name: "Wilber",
    number: "13111111191"
  } , {
    name: "Will",
    number: "13111191112"
  }]
}

var store = configureStore(initialState);

ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('root')
);