import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import {browserHistory} from 'react-router';

import Applicant_loginModal from '../user_auth/applicant_loginModal';
import Applicant_signupModel from '../user_auth/applicant_signupModel';

import Employer_loginModal from '../user_auth/employer_loginModal';
import Employer_signupModal from '../user_auth/employer_signupModal';

let ApplicantOrEmployer;

class MainMenu extends Component {

  logout(e) {
    e.preventDefault();
    this.props.logout();
    browserHistory.push('/'); // redirects to homepage

  }

  componentDidMount(){
    localStorage.setItem('key', key)
    let key = "helloooooooo"

    console.log("key", key)
    if (localStorage.type == "applicant") {
      console.log("YESSSSSS")
      ApplicantOrEmployer = "/applicant_profile"
    } else {
      console.log("NOOOOOOO")
      ApplicantOrEmployer = "/employer_profile"
      console.log("ApplicantOrEmployer", ApplicantOrEmployer)
    }
  }

  render(){
      // console.log("MainMenu localstorage", localStorage.type)
      // console.log(localStorage.type)
      const { isAuthenticated } = this.props.auth;



      const userLinks = (
        <div className="ui text container">
          <Link id="profile" className="item" to={ApplicantOrEmployer}><i className="icon user"></i>Profile</Link>
          <Link id="messages" className="item"><i className="icon comment"></i>Messages</Link>
          <Link id="logout" className="item" onClick={this.logout.bind(this)}><i className="icon sign out"></i>Logout</Link>
        </div>
      );



      const guestLinks = (

      <div className="ui text container">
        <Link id="about_us_button" className="item"><i className="icon info circle"></i>About Us</Link>
        <Link id="applicant_login_button" className="item"><i className="icon sign in"></i>Applicant Login</Link>
        <Link id="employer_login_button" className="item"><i className="icon sign in"></i>Employer Login</Link>
      </div>
      );

    return(

      <div id="MainMenu">

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


MainMenu.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(MainMenu);
