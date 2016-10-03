import React, { Component } from 'react';
// import { Link } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class Signup extends Component {

  renderAlert() {
   if (this.props.errorMessage) {
     return (
       <div className="alert alert-danger">
         <strong>Oops!</strong> {this.props.errorMessage}
       </div>
     );
   }
 }

 handleFormSubmit(formProps){

  //  const signupInfo = {
  //       email: this.refs.email.value,
  //       password: this.refs.password.value,
  //     }
  // Call action creator to sign up the user
  this.props.signupUser(formProps);

}

  render(){
    const { fields: { email, password }, handleSubmit } = this.props;

    return(

        <div className="ui small modal applicant signup">
          <i className="close icon"></i>
          <div className="header">
            Applicant Signup
          </div>

          <div id="loginForm">

            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="ui form">

              <div className="field">
                <label>Email</label>
                <input type="email"  {...email} />
                {email.touched}
              </div>
              <div className="field">
                <label>Password</label>
                <input type="text" {...password}/>
                {password.touched}
              </div>

              <button className="ui button" action="submit">Sign Up</button>

            </form>

          </div>

        </div>

    )
  }

}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);
