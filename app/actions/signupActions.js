const $ = require('jquery');


// APPLICANT USERS
export function userSignupRequest(userData) {
  return dispatch => {
    console.log('this is the data sended to signup route from the sign up action', userData);

    return $.post('/api/auth/applicant/signup', userData);
  }
}

export function isUserExists(identifier) {
  return dispatch => {
    return $.get(`/api/auth/applicant/${identifier}`);
  }
}

// EMPLOYER USERS
export function employerSignupRequest(userData) {
  return dispatch => {
    console.log('Employer Sign up Request sent data', userData);

    return $.post('/api/auth/employer/signup', userData).done(()=>{
      console.log('employerUser is added')
    });
  }
}

export function isEmployerUserExists(identifier) {
  return dispatch => {
    return $.get(`/api/auth/employer/${identifier}`);
  }
}
