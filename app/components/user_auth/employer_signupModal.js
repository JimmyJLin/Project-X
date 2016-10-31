import React from 'react';
import EmployerSignupForm from './employer_signup';
import { connect } from 'react-redux';
import { employerSignupRequest, isEmployerUserExists } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages.js';
import { Link } from 'react-router'

class Employer_signupModel extends React.Component {
  render() {
    const { employerSignupRequest, addFlashMessage, isEmployerUserExists } = this.props;
    const { isAuthenticated } = this.props.auth;
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

            <p>Aready have an account? <Link id="employer_profile_login_button">Sign In</Link> </p>
          </div>

        </div>

      </div>
    );
  }
}

Employer_signupModel.propTypes = {
  auth: React.PropTypes.object.isRequired,
  employerSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isEmployerUserExists: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}


export default connect(mapStateToProps, { employerSignupRequest, addFlashMessage, isEmployerUserExists })(Employer_signupModel);
