import React, { Component } from 'react';
import { auth } from './auth_helpers';
const $ = require('jquery');


const SignUp = React.createClass({

  handleSubmit: function(e){
    e.preventDefault();

    const signupInfo = {
    email: this.refs.email.value,
    password: this.refs.password.value,
    type: "employer"
    }

  signUpRequest(signupInfo);

  this.refs.employersignup.reset();
},

render: function(){

    return(

      <div>

        <div className="ui small modal employer signup">
          <i className="close icon"></i>
          <div className="header">
            Employer Signup
          </div>

          <div id="loginForm">

            <form className="ui form"
            ref="employersignup"
            onSubmit={this.handleSubmit}>
              <div className="field">
                <label>Email</label>
                <input ref="email" type="email" name="em" placeholder="email"/>
              </div>
              <div className="field">
                <label>Password</label>
                <input ref="password" type="password" name="password" placeholder="password"/>
              </div>
              <button className="ui button" type="submit">Sign Up</button>
            </form>

            <br/>

            <p>Aready have an account? <a id="employer_profile_login_button">Sign In</a> </p>
          </div>

        </div>

      </div>
    )
  }
});


function signUpRequest(signupInfo) {

  const d = signupInfo
  console.log('signup Request fired employer', signupInfo)

 $.post('/api/auth/employer/signup', signupInfo)
   .done((data) => {
     console.log('success')
   })
   .error((error) => {
     console.error(error);
   })

}
module.exports = SignUp;