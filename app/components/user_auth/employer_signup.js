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

  this.refs.createUserForm.reset();
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

            <form className="ui form">
              <div className="field">
                <label>Email</label>
                <input type="text" name="email" placeholder="email"/>
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" name="password" placeholder="password"/>
              </div>
              <button className="ui button" type="submit">Sign Up</button>
            </form>

          </div>

        </div>

      </div>
    )
  }
});

function signUpRequest(signupInfo) {

  const d = signupInfo
  console.log('signup Request fired employer', signupInfo)

 $.post('/api/auth/signup', signupInfo)
   .done((data) => {
     console.log('success')
   })
   .error((error) => {
     console.error(error);
   })

}
module.exports = SignUp;
