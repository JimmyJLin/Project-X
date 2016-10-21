import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

import Applicant_loginModal from './user_auth/applicant_loginModal';
import Applicant_signupModel from './user_auth/applicant_signupModel';

import Employer_loginModal from './user_auth/employer_loginModal';
import Employer_signupModal from './user_auth/employer_signupModal';

class HeaderMenu extends Component {

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render(){

      const { isAuthenticated } = this.props.auth;



      const userLinks = (
        <div className="ui text container">
          <a className="item"><i className="icon user"></i>Profile</a>
          <a className="item"><i className="icon comment"></i>Messages</a>
          <a  className="item" onClick={this.logout.bind(this)}><i className="icon sign out"></i>Logout</a>
        </div>
      );



      const guestLinks = (

      <div className="ui text container">
        <a id="about_us_button" className="item"><i className="icon info circle"></i>About Us</a>
        <a id="applicant_login_button" className="item"><i className="icon sign in"></i>Applicant Login</a>
        <a id="employer_login_button" className="item"><i className="icon sign in"></i>Employer Login</a>
      </div>
      );

    return(

      <div id="headermenu">

        <div className="ui top fixed main three item menu">

          <div id="logo">
            <Link to="/">
              <img className="ui centered tiny image" src="images/company_logo/apex_logo.png" alt="Company Logo"/>
            </Link>
          </div>

          { isAuthenticated ? userLinks : guestLinks }

        </div>

        <Applicant_signupModel />
        <Applicant_loginModal  />
        <Employer_signupModal  />
        <Employer_loginModal   />

      </div>

    )
  }

}


HeaderMenu.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(HeaderMenu);
