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
  constructor(props) {
    super(props);
    this.state = {
      routePath: ''
    };
  }

  logout(e) {

    e.preventDefault();
    this.props.logout();
    window.location.assign('/'); // redirects to homepage

  }

  componentDidMount(){

    // display different top menu bar depends on user type: Applicant or Employer
    localStorage.setItem('key', key)
    let key = "helloooooooo"

    let applicant_type = localStorage.type

    if (applicant_type == "applicant") {
      // console.log("applicant")
      this.setState({
        routePath: "/applicant_profile"
      })
    } else if (applicant_type == "employer") {
      // console.log("employer")
      this.setState({
        routePath: "/employer_profile"
      })
    } else {
      // console.log("/")
      this.setState({
        routePath: "/"
      })
    }

    if(localStorage.getItem('isLoaded') !== 'yes'){
      localStorage.setItem('isLoaded', 'no');
      // location.reload(true)
    }

  }

  render(){
      const { isAuthenticated } = this.props.auth;
      const logoimg = "https://apex-database.herokuapp.com/images/company_logo/atlascv_logo_rectangle_clear.png"

      // rendering logged in top menu if the user is logged authenticated
      const userLinks = (
        <div id="menu_top" className="ui top fixed main two item clear menu">
          <div id="logo">
            <Link to="/">
              <img className="ui centered tiny image" src={logoimg} alt="Company Logo"/>
            </Link>
          </div>
          <div className="ui text container">
            <Link id="profile" className="item header" to={this.state.routePath}><i className="icon user"></i>Profile</Link>
            <Link id="logout" className="item header" onClick={this.logout.bind(this)}><i className="icon sign out"></i>Logout</Link>
          </div>
        </div>

      );


      // rendering logged in top menu if the user is NOT logged authenticated

      const guestLinks = (
      <div id="menu_top" className="ui top fixed main three item clear menu">
        <div id="logo">
          <Link to="/">
            <img className="ui centered tiny image" src={logoimg} alt="Company Logo"/>
          </Link>
        </div>
        <div className="ui text container">
          <Link id="about_us_button" className="item header"><i className="icon info circle"></i>About Us</Link>
          <Link id="applicant_login_button" className="item header"><i className="icon sign in"></i>Applicant Login</Link>
          <Link id="employer_login_button" className="item header"><i className="icon sign in"></i>Employer Login</Link>
        </div>
      </div>

      );

    return(

      <div id="main_header_menu">

        { isAuthenticated ? userLinks : guestLinks }


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
