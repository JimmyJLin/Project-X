import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Main extends Component {

  componentDidMount(){
    if(localStorage.getItem('isLoaded') == 'yes'){
      localStorage.setItem('isLoaded', 'no');
    }
  }

  render() {
    return (
      <div className="intro">
        {/* Main Header Menu */}

        <div id="main_display_image">
          <img src="images/company_logo/atlascv.png" alt="topImage"/>
        </div>

        <div id="about_us_div" className="ui equal width grid">
          <p id="about_us_text">At AtlasCV, we strive to put power in the hands of Job Applicants around the world. Simply by creating one <span id="italic">free</span>, centralized profile, we can match you with compatible positions in the city you ve always dreamed of working in. No longer are the days of multiple cover letters, applications, and emails. Simply create one profile, and take the hassle out of the application process by connecting directly with vacant positions. Let us put you in direct contact with Employers who are looking for you, today.</p>
        </div>

        <div id="main_display_links" className="ui stackable grid">
          <div className="eight wide column">
            <h3>Applying</h3>
            <Link to="/applicant_profile_form">
              <button id="mainButton" className="ui button large">Begin Your Free Profile Today</button>
            </Link>
          </div>
          <div className="eight wide column">
            <h3>Posting</h3>
            <Link to="/employer_profile_form">
              <button id="mainButton" className="ui button large">Register & Post Today</button>
            </Link>

          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Main);
