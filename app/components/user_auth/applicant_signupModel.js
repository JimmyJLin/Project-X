import React from 'react';
import ApplicantSignupForm from './applicant_signup';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages.js';

class Applicant_signupModel extends React.Component {
  render() {
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
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
         <p>Aready have an account? <a id="applicant_profile_login_button">Sign In</a> </p>

       </div>
     </div>
    );
  }
}

Applicant_signupModel.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}


export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(Applicant_signupModel);
