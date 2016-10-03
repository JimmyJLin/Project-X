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

              {/*<a href="/employer_profile">
                <button className="ui button" type="submit">Sign In</button>
              </a>*/}
            </form>

            <br/>
            <a href="/employer_profile">
              <button className="ui button" type="submit">Sign In</button>
            </a>

            <br/>

            <p>Not a member yet ... <a id="employer_signup_button">Sign Up</a> </p>

          </div>

        </div>


      </div>

    )
  }

}
