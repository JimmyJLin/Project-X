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
          <p>Not a member yet ... <Link to="/signup">Sign Up</Link></p>
    </div>
    );
  }
}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LoginPage);
