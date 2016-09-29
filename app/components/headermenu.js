import React, { Component } from 'react';
import { Link } from 'react-router'
import Applicant_login from 'components/user_auth/applicant_login';
import Employer_login from 'components/user_auth/employer_login';

export default class HeaderMenu extends Component {

  render(){
    return(

      <div id="headermenu">
        <div className="ui top fixed main three item menu">

          <div id="logo">
            <a href="/">
              <img className="ui centered image" src="images/img_placeholders/150x50.jpg" alt="Company Logo"/>
            </a>
          </div>
          <div className="ui text container">
            <Link to="/about_us" className="item"><i className="icon info circle"></i>About Us</Link>
            <a id="applicant_login_button" className="item"><i className="icon sign in"></i>Applicant Login</a>
            <a id="employer_login_button" className="item"><i className="icon sign in"></i>Employer Login</a>

          </div>

        </div>

        <Applicant_login/>

        <Employer_login/>

      </div>

    )
  }

}
