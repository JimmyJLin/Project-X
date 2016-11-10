import React from 'react';
import { connect } from 'react-redux';
import EmploymentLoginForm from '../employer_login';
import { Link } from 'react-router'



class LoginPage_emp extends React.Component {
  render() {
    return (
      <div className="forwardlogin">
          <EmploymentLoginForm  />
          <br/>
          <p>Not a member yet ... <Link to="employer_signup" id="employer_profile_signup_button"><span id="signup">Sign Up</span></Link> </p>

    </div>
    );
  }
}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LoginPage_emp);
