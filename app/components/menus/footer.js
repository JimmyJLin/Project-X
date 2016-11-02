import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Footer extends Component {

  render(){
    return(

      <div id="footer">
        <img className="ui centered rounded small image" src="images/company_logo/apex_logo.png" alt="Company Logo"/>

        <div className="ui equal width grid">
          <div className="column"></div>
          <div className="column">
            <Link to="/#"><span>Contact Us</span></Link>
          </div>
          <div className="column">
            <Link to="/terms_and_conditions#main_content"><span>Terms and Conditions</span></Link>
          </div>
          <div className="column">
            <Link to="/#"><span>Privacy</span></Link>
          </div>
          <div className="column"></div>
        </div>

        <div id="copyrights">
          <p>&copy; 2016 AtlasCV.  All rights reserved</p>
        </div>

      </div>

    )
  }

}
