import React from 'react';
// import LoginForm from './LoginForm';
import ApplicantLoginForm from '../user_auth/applicant_login';



class LoginPage extends React.Component {
  render() {
    return (
      <div className="forwardlogin">
          <ApplicantLoginForm  />
          <p>Not a member yet ... <a href="/signup">Sign Up</a></p>
    </div>
    );
  }
}

export default LoginPage;
