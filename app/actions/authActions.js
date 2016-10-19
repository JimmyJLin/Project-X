import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';
const $ = require('jquery');

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('id');
    localStorage.removeItem('type');
    localStorage.removeItem('fullname');
    localStorage.removeItem('first_name');
    localStorage.removeItem('last_name');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return $.post('/api/auth/applicant/login', data)
      .done( (data)=> {
        console.log('agent data', data.agent)
      let token = data.token;
      let user = data.agent;
      let id = user.id;
      let type = user.type || '';
      let fullname = user.name + ' ' + user.last_name
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('id', id);
      localStorage.setItem('type', type);
      localStorage.setItem('fullname', fullname);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}


export function login_employer(data) {
  return dispatch => {
    return $.post('/api/auth/employer/login', data)
    .done( (data)=> {
    console.log('agent data', data.agent)
      let token = data.token;
      let user = data.agent;
        let id = user.id;
        let first_name = user.first_name || '';
        let last_name = user.last_name || ''
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('id', id);
      localStorage.setItem('first_name', first_name);
      localStorage.setItem('last_name', last_name);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}