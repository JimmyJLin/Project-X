import React from 'react';
import ApplicantSignupForm from './applicant_signup';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages.js';
import { Link } from 'react-router'

class Applicant_signupModel extends React.Component {
  render() {
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="ui small modal applicant signup">
        <i className="close icon"></i>
        <div className="header">
          Applicant Signup
        </div>

        <div id="loginForm">

          <ApplicantSignupForm
            isUserExists={isUserExists}
            userSignupRequest={userSignupRequest}
            addFlashMessage={addFlashMessage} />

         <br/>
         <p>Aready have an account? <Link id="applicant_profile_login_button"><span id="signup">Sign Up</span></Link> </p>

       </div>
     </div>
    );
  }
}

Applicant_signupModel.propTypes = {
  auth: React.PropTypes.object.isRequired,
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { userSignupRequest, addFlashMessage, isUserExists })(Applicant_signupModel);
