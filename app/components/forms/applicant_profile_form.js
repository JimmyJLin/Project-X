import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import HeaderMenu from '../headermenu';
import Footer from '../footer';


class Applicant_profile_form extends Component {

  render(){
    return(
        <div id="applicant_profile_form">

        <HeaderMenu />

        <div>
          <h1>Applicant Profile Form</h1>
        </div>

        <Footer />

        </div>

    )
  }

}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Applicant_profile_form);
