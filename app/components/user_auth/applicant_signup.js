import React, { Component } from 'react';
import { auth } from './auth_helpers';
const $ = require('jquery');


// // import { Link } from 'react-router';
// import { reduxForm } from 'redux-form';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';
//
//
const SignUp = React.createClass({

  handleSubmit: function(e){
    e.preventDefault();

    const signupInfo = {
    email: this.refs.email.value,
    password: this.refs.password.value,
    type: "applicant"
    }

  signUpRequest(signupInfo);

  this.refs.createUserForm.reset();
},

//    //  const signupInfo = {
//    //       email: this.refs.email.value,
//    //       password: this.refs.password.value,
//    //     }
//    // Call action creator to sign up the user
//    this.props.signupUser(formProps);
//  }
//
//   renderAlert() {
//    if (this.props.errorMessage) {
//      return (
//        <div className="alert alert-danger">
//          <strong>Oops!</strong> {this.props.errorMessage}
//        </div>
//      );
//    }
//  }
//
render: function(){
//     const {
//       handleSubmit,
//       fields: { email, password }
//     } = this.props;
//     console.log('this.props', this.props)
    return(

        <div className="ui small modal applicant signup">
          <i className="close icon"></i>
          <div className="header">
            Applicant Signup
          </div>

          <div id="loginForm">

            <form ref="createUserForm"
            onSubmit={this.handleSubmit}
            className="ui form">
              <div className="field">
                <label>Emaill</label>
                <input ref="email" type="email"/>
              </div>
              <div className="field">
                <label>Password</label>
                <input ref="password"/>
              </div>
              <button className="ui button" action="submit">Sign Up</button>
            </form>

          </div>

        </div>
    )
  }
});

function signUpRequest(signupInfo) {
// signupInfo = {
//   email: this.refs.email.value,
//   password: this.refs.password.value,
//   type: "applicant"
// }

  const d = signupInfo
  console.log('signup Request fired', signupInfo)

 $.post('/api/auth/signup', signupInfo)
   .done((data) => {
     console.log('success')
   })
   .error((error) => {
     console.error(error);
   })
}

// function mapStateToProps(state) {
//   return {};
// }
//
// export default connect(mapStateToProps)(Signup);
module.exports = SignUp;
