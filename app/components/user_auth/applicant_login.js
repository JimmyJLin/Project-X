import React, { Component } from 'react';
import { Link } from 'react-router';
const auth = require('./auth_helpers');


const Applicant_login = React.createClass({

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      type: '',
      isLoggedIn:'',

    }

  }

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      error: false
    }
  },

  handleSubmit: function(event) {
   event.preventDefault()

   const email = this.refs.email.value
   const pass = this.refs.pass.value

   console.log('handle submit is fired', email,pass)

   auth.login(email, pass, (loggedIn) => {
     if (!loggedIn)
       return this.setState({ error: true })

     const { location } = this.props

     if (location.state && location.state.nextPathname) {
       this.context.router.replace(location.state.nextPathname)
     } else {
       this.context.router.replace('/')
     }
   })
 },



 render: function() {
   return (

        <div>
          <div className="ui small modal applicant login">
            <i className="close icon"></i>
            <div className="header">
              Applicant Login
            </div>

            <div id="loginForm">

              <form onSubmit={this.handleSubmit} className="ui form">
                <div className="field">
                  <label>Email</label>
                  <input ref="email" type="text" name="email" placeholder="email"/>
                </div>
                <div className="field">
                  <label>Password</label>
                  <input ref="pass" type="password" name="password" placeholder="password"/>
                </div>

                <a href="/applicant_profile">
                  <button className="ui button" type="submit">Sign In</button>
                </a>

              </form>

              <br/>

              <p>Not a member yet ... <a id="applicant_signup_button">Sign Up</a> </p>

            </div>
          </div>

        </div>

    )
  }
});

module.exports = Applicant_login;
