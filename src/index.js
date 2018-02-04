import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './redux/reducer';
import App from './App';

import localStorage from './redux/middlewares/localStorage.middleware';

const store = createStore(reducer, applyMiddleware(logger, thunk, localStorage));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
