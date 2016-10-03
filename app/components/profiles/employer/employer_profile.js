import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import HeaderMenu from '../headermenu';
import Footer from '../footer';


class Employer_profile extends Component {

  render(){
    return(
        <div id="employer_profile">

        <HeaderMenu />

        <div>
          <h1>Employer Profile</h1>
        </div>

        <Footer />

        </div>

    )
  }

}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Employer_profile);
