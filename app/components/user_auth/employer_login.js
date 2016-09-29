import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Employer_login extends Component {

  render(){
    return(

      <div>

      <div className="ui small modal employer login">
        <i className="close icon"></i>
        <div className="header">
          Employer Login
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

            <p>Forget password <a id="reset_password_button" href="/#">Reset</a> </p>

            <button className="ui button" type="submit">Sign In</button>
          </form>

          <br/>

          <p>Not a member yet ... <a id="signup_button" href="/#">Sign Up</a> </p>

        </div>

      </div>


      </div>

    )
  }

}
