import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Main extends Component {


  componentDidMount(){

      if(localStorage.getItem('isLoaded') !== 'yes'){
        localStorage.setItem('isLoaded', 'yes');
        window.location.reload(true)
      }

      window.setInterval(changeLoaded, 500)

      function changeLoaded(){
        localStorage.setItem('isLoaded', 'no');
      }

      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }

    // window.location.reload(true)

  }

  render() {
    return (
      <div className="intro">
        {/* Main Header Menu */}

        <div id="main_display_image">
          <img src="images/company_logo/atlascv.png" alt="topImage"/>
        </div>

        <div id="about_us_div" className="ui equal width grid">
          <div id="about_us_text">
            <h3 id="about_us_title">Why are we Different?</h3>
            <p>What if we told you that today, you could match with as many available job positions as you qualify for, in your industry & city of choice, all by perfecting a single application? Now, what if we told you it was <span>Free…</span></p>
            <p>Have you ever found yourself using a job search site that diverted you to a different website each time you clicked a post? Did you find yourself sending résumé after résumé, email after email, and writing cover letter after cover letter? If so, you know just how tedious and inefficient the modern day job search can be.</p>
          </div>

          <div id="about_us_text">
            <h3 id="about_us_title">We are changing that process.</h3>
            <p>AtlasCV is a site designed for the convenience and efficiency of you, the applicant. We believe that in today’s global markets, job applicants should have access and exposure to a multitude of positions with which they are directly compatible, in the cities & locations that they have always dreamed of working in. We put this information directly at their fingertips, free of charge.</p>
          </div>

          <div id="about_us_text">
            <h3 id="about_us_title">“One Application, To End All Applications”</h3>
            <p>We allow you to do this by creating <span>one</span> profile to serve as your application for <span>all</span> positions, in order to algorithmically match you directly with compatible openings. We streamline your information to include all aspects of the traditional resume, as well as a personal bio sections and customizable skill sets to distinguish yourself.  Once matched, you are placed in direct contact with employers. View a list of all matches and apply at the click of a button. Be contacted directly by interested employers. No extra websites, no spam, no hassle.</p>
            <p>Initially, we are launching our service for business sectors of the Greater Tri-State Area. Create a profile today to instantly see companies that would love to have you onboard. After all, it’s free. What is there to lose?</p>
          </div>

          <div id="about_us_text">
            <h3 id="about_us_title">Atlas CV for Employers</h3>
            <p>On the recruitment side, we provide employers with Curated Applicant Matchmaking. Job postings are matched only by applicants who meet the minimum requirements of the position posted, and have expressed an interest in working in the industry & region specified. This means no under or over qualified candidates, and no budget wasted on incompatible search results. Once we generate your applicant matches, you may browse your feed of applicants and filter by over 50 skills, certifications, and experience tags. Our user friendly profiles allow you to view and sort all of the criteria of a traditional résumé, and puts you in direct contact with your compatible matches. Let us find the needle in your haystack of résumés.</p>
          </div>

          <div id="about_us_text">
            <h3 id="about_us_title">AtlasCV is initially launching free for Employers alike. Post a job today and let us find your ideal employee.</h3>
          </div>
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
