const $ = require('jquery');


// APPLICANT USERS
export function userSignupRequest(userData) {
  return dispatch => {
    console.log('this is the data sended to signup route from the sign up action', userData);

    return $.post('https://apex-database.herokuapp.com/api/users/applicants/signup', userData).done(() => {
      console.log('applicantUser added')
    })
  }
}

export function isUserExists(identifier) {
  return dispatch => {
    return $.get(`https://apex-database.herokuapp.com/api/users/applicant/${identifier}`);
  }
}

// EMPLOYER USERS
export function employerSignupRequest(userData) {
  return dispatch => {
    console.log('Employer Sign up Request sent data', userData);

    return $.post('https://apex-database.herokuapp.com/api/users/employers/signup', userData).done(()=>{
      console.log('employerUser is added')
    });
  }
}

export function isEmployerUserExists(identifier) {
  return dispatch => {
    return $.get(`https://apex-database.herokuapp.com/api/users/employer/${identifier}`);
  }
}
