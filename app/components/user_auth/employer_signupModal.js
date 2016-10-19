import React from 'react';
import EmployerSignupForm from './employer_signup';
import { connect } from 'react-redux';
import { employerSignupRequest, isEmployerUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages.js';

class Employer_signupModel extends React.Component {
  render() {
    const { employerSignupRequest, addFlashMessage, isEmployerUserExists } = this.props;
    return (
      <div>

        <div className="ui small modal employer signup">
          <i className="close icon"></i>
          <div className="header">
            Employer Signup
          </div>

          <div id="employer_loginForm">


          <EmployerSignupForm
            isEmployerUserExists={isEmployerUserExists}
            employerSignupRequest={employerSignupRequest}
            addFlashMessage={addFlashMessage} />

            <br/>

            <p>Aready have an account? <a id="employer_profile_login_button">Sign In</a> </p>
          </div>

        </div>

      </div>
    );
  }
}

Employer_signupModel.propTypes = {
  employerSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isEmployerUserExists: React.PropTypes.func.isRequired
}


export default connect(null, { employerSignupRequest, addFlashMessage, isEmployerUserExists })(Employer_signupModel);
