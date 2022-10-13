import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { Provider } from "react-redux"
// redux
import store from "./Redux/store" 
// toolkit
// import store from './store'

import 'antd/dist/antd.css'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
)
