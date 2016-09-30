import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Applicant_signup extends Component {

  render(){
    return(

        <div className="ui small modal applicant signup">
          <i className="close icon"></i>
          <div className="header">
            Applicant Signup
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

    )
  }

}
