import React from 'react';
import ApplicantLoginForm from './applicant_login';
import { Link } from 'react-router'

class Applicant_loginModal extends React.Component {
  render() {
    return (
    <div>
      <div className="ui small modal applicant login">
        <i className="close icon"></i>
        <div className="header">
          Applicant Login
        </div>
        <div id="loginForm">

          <ApplicantLoginForm />

          <br/>

        <p>Not a member yet ... <Link id="applicant_signup_button">Sign Up</Link>
        </p>

      </div>
    </div>
    </div>
    );
  }
}

export default Applicant_loginModal;
