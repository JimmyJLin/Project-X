import React, { Component } from 'react';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import $ from 'jquery'; // requires jQuery for AJAX request


export default class Applicant_login extends Component {

  constructor(props) {
  super(props);

    this.state = { // sets initial states
      email : '',
      password : '',
      error : '',
    }
  }

 render() {
   return (

        <div>
          <div className="ui small modal applicant login">
            <i className="close icon"></i>
            <div className="header">
              Applicant Login
            </div>

            <div id="loginForm">

              <form onSubmit={this.handleSubmit.bind(this)} className="ui form">
                <div className="field">
                  <label>Email</label>
                  <input
                    value={this.state.email}
                    onChange={event => this.onEmailChange(event.target.value)}
                    type="email"
                    placeholder="email"/>
                </div>
                <div className="field">
                  <label>Password</label>
                  <input
                  value={this.state.password}
                  onChange={event => this.onPasswordChange(event.target.value)}
                  type="password"
                  placeholder="password"/>
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

  onEmailChange(email) {
    this.setState({email}); // updates username state
  }

  onPasswordChange(password) {
  this.setState({password}); // updates password state
 }

  handleSubmit(event) {
   event.preventDefault()
   let error = 'Oops, please check your email or password';

   if (this.state.email == '' || this.state.password == '') { // checks for real email/password
     this.setState({error:error})
   }

   const userInfo = {
     email:this.state.email,
     password: this.state.password,
   }
   $.post('/api/auth/login', userInfo)
     .done((data) => {
       console.log(data)
       if (data.agent == 'error') { // if username/password doesn't match
       this.setState({error:error})
     } else {
       localStorage.token = data.token; // saves token to local storage
       browserHistory.push('/'); // redirects to home
       console.log('You are signed in')
       window.location.assign("/")

     }
     })
     .error((error) => {
       console.error('sign in action is failed', error);
     })


  //
  //  const email = this.refs.email.value
  //  const pass = this.refs.pass.value
  //
  //  console.log('handle submit is fired', email,pass)
  //
  //  auth.login(email, pass, (loggedIn) => {
  //    if (!loggedIn)
  //      return this.setState({ error: true })
  //
  //    const { location } = this.props
  //
  //    if (location.state && location.state.nextPathname) {
  //      this.context.router.replace(location.state.nextPathname)
  //    } else {
  //      this.context.router.replace('/')
  //    }
  //  })
  }


};
