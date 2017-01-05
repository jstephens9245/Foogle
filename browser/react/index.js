import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import {Router, Route, hashHistory} from 'react-router'
import {Provider} from 'react-redux';
import axios from 'axios';

import AppContainer from './containers/AppContainer'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={AppContainer}>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
