import React from 'react';
// import LoginForm from './LoginForm';
import EmploymentLoginForm from '../employer_login';
import { Link } from 'react-router'



class LoginPage_emp extends React.Component {
  render() {
    return (
      <div className="forwardlogin">
          <EmploymentLoginForm  />
          <p>Not a member yet ... <Link to="employer_signup">Sign Up</Link> </p>

    </div>
    );
  }
}

export default LoginPage_emp;
