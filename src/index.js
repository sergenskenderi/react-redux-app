import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { reducer } from './store/reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer , applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

