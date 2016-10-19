// import React, { Component } from 'react';
// import { auth } from './auth_helpers';
// const $ = require('jquery');

import React from 'react';
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';



class SignupForm extends React.Component {
// const SignUp = React.createClass({
constructor(props) {
  super(props);
  this.state = {
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: {},
    isLoading: false,
    invalid: false
  }
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  this.checkUserExists = this.checkUserExists.bind(this);
}

onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}

isValid() {
  const { errors, isValid } = validateInput(this.state);

  if (!isValid) {
    this.setState({ errors });
  }

  return isValid;
}

//   handleSubmit: function(e){
//     e.preventDefault();
//
//     const signupInfo = {
//     email: this.refs.email.value,
//     password: this.refs.password.value,
//     type: "applicant"
//     }
//
//   signUpRequest(signupInfo);
//
//   this.refs.createUserForm.reset();
// },
//
// render: function(){
//
//     return(
//
//         <div className="ui small modal applicant signup">
//           <i className="close icon"></i>
//           <div className="header">
//             Applicant Signup
//           </div>
//
//           <div id="loginForm">
//
//             <form ref="createUserForm"
//             onSubmit={this.handleSubmit}
//             className="ui form">
//               <div className="field">
//                 <label>Emaill</label>
//                 <input ref="email" type="email"/>
//               </div>
//               <div className="field">
//                 <label>Password</label>
//                 <input ref="password"/>
//               </div>
//               <button className="ui button" action="submit">Sign Up</button>
//             </form>
//
//             <br/>
//
//             <p>Aready have an account? <a id="applicant_profile_login_button">Sign In</a> </p>
//           </div>
//
//         </div>
//     )
//   }
// });
//
// function signUpRequest(signupInfo) {
//
//   const d = signupInfo
//   console.log('signup Request fired here', signupInfo)
//
//  $.post('/api/auth/signup', signupInfo)
//    .done((data) => {
//      console.log('success')
//    })
//    .error((error) => {
//      console.error(error);
//    })
//
// }
// module.exports = SignUp;
