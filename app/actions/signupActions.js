import axios from 'axios';

// APPLICANT USERS
export function userSignupRequest(userData) {
  return dispatch => {
    console.log('this is the data sended to signup route from the sign up action', userData);

    return axios.post('/api/auth/applicant/signup', userData);
  }
}

export function isUserExists(identifier) {
  return dispatch => {
    return axios.get(`/api/auth/applicant/${identifier}`);
  }
}

// EMPLOYER USERS
export function employerSignupRequest(userData) {
  return dispatch => {
    console.log('Employer Sign up Request sent data', userData);

    return axios.post('/api/auth/employer/signup', userData);
  }
}

export function isEmployerUserExists(identifier) {
  return dispatch => {
    return axios.get(`/api/auth/employer/${identifier}`);
  }
}
