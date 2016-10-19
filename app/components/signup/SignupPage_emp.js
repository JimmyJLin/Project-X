import React from 'react';
import { connect } from 'react-redux';
import EmployerSignupForm from  '../user_auth/employer_signup';
import { employerSignupRequest, isEmployerUserExists } from '../../actions/signupActions';

import { addFlashMessage } from '../../actions/flashMessages.js';


class SignupPage_emp extends React.Component {
  render() {
    return (
      <div className="forwardlogin">
      <EmployerSignupForm
        isEmployerUserExists={isEmployerUserExists}
        employerSignupRequest={employerSignupRequest}
        addFlashMessage={addFlashMessage} />
    </div>
    );
  }
}

SignupPage_emp.propTypes = {
  employerSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isEmployerUserExists: React.PropTypes.func.isRequired
}


export default connect(null, { employerSignupRequest, addFlashMessage, isEmployerUserExists })(SignupPage_emp);
