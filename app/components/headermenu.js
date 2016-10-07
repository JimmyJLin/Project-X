import React, { Component } from 'react';
import { Link } from 'react-router'
import Applicant_login from 'components/user_auth/applicant_login';
import Employer_login from 'components/user_auth/employer_login';
import Applicant_signup from 'components/user_auth/applicant_signup';
import Employer_signup from 'components/user_auth/employer_signup';

export default class HeaderMenu extends Component {

  render(){
    return(

      <div id="headermenu">
        <div className="ui top fixed main three item menu">

          <div id="logo">
            <a href="/">
              <img id="logoImage" className="ui centered tiny image" src="images/company_logo/apex_logo.png" alt="Company Logo"/>
            </a>
          </div>
          <div className="ui text container">
            <a id="about_us_button" className="item"><i className="icon info circle"></i>About Us</a>
            <a id="applicant_login_button" className="item"><i className="icon sign in"></i>Applicant Login</a>
            <a id="employer_login_button" className="item"><i className="icon sign in"></i>Employer Login</a>

          </div>

        </div>

        <Applicant_login/>
        <Employer_login/>

        <Applicant_signup/>
        <Employer_signup/>

      </div>

    )
  }

}
