import React from 'react';
// import LoginForm from './LoginForm';
import ApplicantLoginForm from '../applicant_login';
import { Link } from 'react-router'



class LoginPage extends React.Component {
  render() {
    return (
      <div className="forwardlogin">
          <ApplicantLoginForm  />
          <p>Not a member yet ... <Link to="/signup">Sign Up</Link></p>
    </div>
    );
  }
}

export default LoginPage;
