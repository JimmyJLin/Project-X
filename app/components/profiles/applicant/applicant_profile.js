import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import HeaderMenu from '../../headermenu';
import Footer from '../../footer';
import $ from 'jquery'; // requires jQuery for AJAX request


class Applicant_profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      applicantProfile: {},
      desired_location: [],
      certifications: []
    }
  }

  componentDidMount() {
   // this is where you'll get the data from the 'db'
   $.get('/api/auth/2').done( (data)=>{
     console.log("applicantProfile data: ", data)
      this.state.applicantProfile=data;
      this.state.desired_location=data.desired_location;
      this.state.certifications=data.certifications;

      this.setState({
        applicantProfile: this.state.applicantProfile,
        desired_location: this.state.desired_location,
        certifications: this.state.certifications

      })
      console.log(this.state.applicantProfile)
    })
  }


  render(){
    const desired_location = this.state.desired_location.map(function(location){
      return <div key={location} className="ui label details">{location}</div>
    });

    const certifications = this.state.certifications.map(function(certification){
      return <div key={certification} className="ui label">{certification}</div>
    });
    console.log("certifications", certifications)


    return(
        <div id="applicant_profile">

        {/* Profile Header */}
        <div className="ui grid">
          <div className="four wide column">
            <img className="ui small circular image" src={this.state.applicantProfile.profile_image} alt="Profile Picture"/>
          </div>
          <div className="twelve wide column">
            <div className="twelve wide column">
              <h2>{this.state.applicantProfile.first_name} {this.state.applicantProfile.last_name}: {this.state.certifications[0]}</h2>
            </div>

            <div className="ui divider"></div>

            <div className="twelve wide column">
              <div className="ui four middle aligned cards">
                {certifications}
              </div>
            </div>
          </div>
        </div>

        <div className="ui divider"></div>

        {/*Profile Details*/}
        <div className="twelve wide column">
          <div className="ui equal width grid">
            <div className="column">
              <h2>Interested in Position in</h2>
              <div className="ui left aligned divided list">
                <div className="content">
                  {desired_location}
                </div>
              </div>
            </div>

            <div className="column">
              <h2>Educations</h2>
              <div className="ui left aligned divided list">
                <div className="content">
                  <div className="ui label details">
                    {this.state.applicantProfile.school}
                  </div>
                  <div className="ui label details">
                    {this.state.applicantProfile.education_level}
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <h2>Previous Position</h2>
              <div className="ui left aligned divided list">
                <div className="content">
                  <div className="ui label details">
                    Auditor
                  </div>
                  <div className="ui label details">
                    Deloitte
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Applicant Key Search Tags */}
        <div className="twelve wide column">
          <h2>Key Search Tags</h2>
          <div className="ui equal width grid">
            <div className="column">
              <div className="ui label details">
                Accounting
              </div>
              <div className="ui label details">
                Series 7
              </div>
              <div className="ui label details">
                CPA
              </div>
            </div>
            <div className="column">
              <div className="ui label details">
                Bachelors Degree
              </div>
              <div className="ui label details">
                Mid level
              </div>
              <div className="ui label details">
                NYC, Boston, London
              </div>
            </div>

          </div>
        </div>

        {/* Match Button*/}
        <div className="ui two column centered grid">
          <button className="massive ui button">Match Your Dream Job Today</button>
        </div>


        </div>

    )
  }

}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Applicant_profile);
