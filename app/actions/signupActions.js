const $ = require('jquery');


// APPLICANT USERS
export function userSignupRequest(userData) {
  return dispatch => {
    console.log('this is the data sended to signup route from the sign up action', userData);

    return $.post('http://localhost:8080/api/users/applicants/signup', userData);
  }
}

export function isUserExists(identifier) {
  return dispatch => {
    return $.get(`http://localhost:8080/api/users/applicant/${identifier}`);
  }
}

// EMPLOYER USERS
export function employerSignupRequest(userData) {
  return dispatch => {
    console.log('Employer Sign up Request sent data', userData);

    return $.post('http://localhost:8080/api/users/employers/signup', userData).done(()=>{
      console.log('employerUser is added')
    });
  }
}

export function isEmployerUserExists(identifier) {
  return dispatch => {
    return $.get(`http://localhost:8080/api/users/employer/${identifier}`);
  }
}
