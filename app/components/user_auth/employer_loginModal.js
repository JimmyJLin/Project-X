import React from 'react';
import EmploymentLoginForm from './employer_login';

class Employment_loginModal extends React.Component {
  render() {
    return (
    <div>
      <div className="ui small modal employer login">
        <i className="close icon"></i>
        <div className="header">
          Employer Login
        </div>

        <div id="loginForm">

          <EmploymentLoginForm />

          <br/>

          <p>Not a member yet ... <a id="employer_profile_signup_button">Sign Up</a> </p>

        </div>

      </div>

    </div>
    );
  }
}

export default Employment_loginModal;
