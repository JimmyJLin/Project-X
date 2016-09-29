// import React, { Component } from 'react';
// import { Link } from 'react-router'
// import HeaderMenu from './headermenu';
//
// export default class About_us extends Component {
//
//   render(){
//     return(
//
//       <div>
//         <HeaderMenu />
//
//         <h1>About us</h1>
//
//       </div>
//
//     )
//   }
//
// }




import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import HeaderMenu from '../components/headermenu';

class About_us extends Component {
  render() {
    return (
      <div className="intro">
        {/* Main Header Menu */}
        <HeaderMenu />

        <h1>About Us</h1>
        <div id="main_display_text">
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(About_us);
