import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.scss"
import {Provider} from "react-redux";
import store from "./model/store";

ReactDOM.render(
    <Provider store={store}>
      <Router>
          <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();
