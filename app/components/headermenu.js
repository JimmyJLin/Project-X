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

    window.location.assign('/');
  }

  render(){

      const { isAuthenticated } = this.props.auth;

      const userLinks_Old = (
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
        </ul>
      );

      const userLinks = (
        <div className="ui text container">
          <Link  className="item" to="/employer_profile"><i className="icon info circle"></i>Profile</Link>
          <a className="item"><i className="icon comment"></i>Messages</a>
          <a className="item" onClick={this.logout.bind(this)}><i className="icon sign out"></i>Logout</a>
        </div>
      );

      const guestLinks_Old = (
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/signup">Sign up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
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
            <a href="/">
              <img className="ui centered tiny image" src="images/company_logo/apex_logo.png" alt="Company Logo"/>
            </a>
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




// import React, { Component } from 'react';
// import { Link } from 'react-router'
// import Applicant_login from 'components/user_auth/applicant_login';
// import Employer_login from 'components/user_auth/employer_login';
// import Applicant_signup from 'components/user_auth/applicant_signup';
// import Employer_signup from 'components/user_auth/employer_signup';
//
// export default class HeaderMenu extends Component {
//
//   render(){
//     return(
//
//       <div id="headermenu">
//         <div className="ui top fixed main three item menu">
//
//           <div id="logo">
//             <a href="/">
//               <img className="ui centered tiny image" src="images/company_logo/apex_logo.png" alt="Company Logo"/>
//             </a>
//           </div>
//           <div className="ui text container">
//             <a id="about_us_button" className="item"><i className="icon info circle"></i>About Us</a>
//             <a id="applicant_login_button" className="item"><i className="icon sign in"></i>Applicant Login</a>
//             <a id="employer_login_button" className="item"><i className="icon sign in"></i>Employer Login</a>
//
//           </div>
//
//         </div>
//
//         <Applicant_login/>
//         <Employer_login/>
//
//         <Applicant_signup/>
//         <Employer_signup/>
//
//       </div>
//
//     )
//   }
//
// }
