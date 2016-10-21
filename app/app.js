import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom';
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router';

// import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';

import createRoutes from 'routes/index'
// import Immutable from 'immutable'
// import _ from 'lodash'




// let reduxState = {}
// if (window.__REDUX_STATE__) {
//   try {
//     let plain = JSON.parse(unescape(__REDUX_STATE__))
//     _.each(plain, (val, key)=> {
//       reduxState[key] = Immutable.fromJS(val)
//     })
//   } catch (e) {
//   }
// }

// const store = configureStore(reduxState)

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render((
  <Provider store={store}>
    { createRoutes(browserHistory) }
  </Provider>
), document.getElementById('root'))
