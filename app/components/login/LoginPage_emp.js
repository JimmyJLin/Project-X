import React from 'react';
// import LoginForm from './LoginForm';
import EmploymentLoginForm from '../user_auth/employer_login';



class LoginPage_emp extends React.Component {
  render() {
    return (
      <div className="forwardlogin">
          <EmploymentLoginForm  />
          <p>Not a member yet ... <a href="employer_signup">Sign Up</a> </p>

    </div>
    );
  }
}

export default LoginPage_emp;
