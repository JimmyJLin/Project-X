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

      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(About_us);
