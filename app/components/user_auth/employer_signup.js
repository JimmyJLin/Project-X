import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Employer_Signup extends Component {

  render(){
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

}
