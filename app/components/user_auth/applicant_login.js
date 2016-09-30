import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Applicant_login extends Component {

  render(){
    return(
        <div>
          <div className="ui small modal applicant login">
            <i className="close icon"></i>
            <div className="header">
              Applicant Login
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

                <button className="ui button" type="submit">Sign In</button>
              </form>

              <br/>

              <p>Not a member yet ... <a id="applicant_signup_button">Sign Up</a> </p>

            </div>
          </div>

        </div>

    )
  }

}
