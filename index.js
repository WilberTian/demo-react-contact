import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import contactApp from './redux/reducers'

var initialState = {
  contacts: [{
    name: "Wilber",
    number: "13111111111"
  } , {
    name: "Will",
    number: "13111111112"
  }]
}

var store = require('./redux/store')(initialState);

let rootElement = document.getElementById('root')

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)