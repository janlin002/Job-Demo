import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Provider } from "react-redux";

// redux 配置
import store from "./Redux/store"; 

// toolkit 配置
// import store from './store'

import 'antd/dist/antd.css';

const queryClient = new QueryClient();

ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
