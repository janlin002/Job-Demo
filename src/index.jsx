import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { QueryClient, QueryClientProvider, useMutation, useQuery } from 'react-query'

import { Provider } from "react-redux"
// redux
import store from "./Redux/store" 
// toolkit
// import store from './store'

import 'antd/dist/antd.css'

const queryClient = new QueryClient()

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
)
