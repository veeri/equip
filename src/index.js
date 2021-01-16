import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';
import App from './App'

import {BrowserRouter as Router} from 'react-router-dom';

import { Provider } from 'react-redux';

import {store} from "./Redux/store"

ReactDOM.render(
    <Provider store={store}>
      <Router>
        {/* <PersistGate persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      </Router>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



