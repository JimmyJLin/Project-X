import React from 'react';
import { connect } from 'react-redux';
import ApplicantLoginForm from '../applicant_login';
import { Link } from 'react-router'



class LoginPage extends React.Component {
  render() {
    return (
      <div className="forwardlogin">
          <ApplicantLoginForm  />
          <br/>
          <p>Not a member yet ... <Link to="/signup" id="applicant_signup_button"><span id="signup">Sign Up</span></Link></p>
    </div>
    );
  }
}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LoginPage);
