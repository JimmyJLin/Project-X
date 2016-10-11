import React, { Component } from 'react';
import { auth } from './auth_helpers';
const $ = require('jquery');


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

render: function(){

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

            <br/>

            <p>Aready have an account? <a id="applicant_profile_login_button">Sign In</a> </p>
          </div>

        </div>
    )
  }
});

function signUpRequest(signupInfo) {

  const d = signupInfo
  console.log('signup Request fired here', signupInfo)

 $.post('/api/auth/employer/signup', signupInfo)
   .done((data) => {
     console.log('success')
   })
   .error((error) => {
     console.error(error);
   })

}
module.exports = SignUp;
