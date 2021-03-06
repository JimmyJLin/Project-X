import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import $ from 'jquery'; // requires jQuery for AJAX request
import auth from '../../../actions/authActions'
import {browserHistory} from 'react-router';

class Applicant_profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      applicantProfile: {},
      desired_location: [],
      certifications: [],
      school_data: [],
      work_history: [],
      languages_spoken: [],
      job_skills: [],
      job_industries: [],
      isLoading: false
    }

  }




  componentDidMount() {

    // settimeout to remove spinner after 5 seconds
    window.setTimeout(this.resetSpinner(), 5000)

    // spinner


    if(localStorage.getItem('isLoaded') == 'yes'){
      localStorage.setItem('isLoaded', 'no');
    }

   // get applicant profile data
   const user_id = localStorage.id
   const url = 'https://apex-database.herokuapp.com/api/applicants/profile/' + user_id
   $.get(url).done( (data)=>{
     console.log("applicantProfile data: ", data)

      this.state.applicantProfile = data;
      // console.log("this.state.applicantProfile", this.state.applicantProfile)
      if(data.desired_industry == null || data.desired_industry == ""){
        window.location.assign('/applicant_profile_form')
      } else {
        this.state.isLoading = true
        localStorage.setItem('isAuthen', 'yes');

        if (data.certifications == null){
          this.state.certifications = []
        } else {
          this.state.certifications = data.certifications
        }

        if (data.desired_location == null){
          this.state.desired_location = []
        } else {
          this.state.desired_location = data.desired_location
        }

        if (data.school == null){
          this.state.school_data = []
        } else {
          this.state.school_data = data.school
        }

        if (data.languages_spoken == null){
          this.state.languages_spoken = []
        } else {
          this.state.languages_spoken = data.languages_spoken
        }

        if (data.work_history == null){
          this.state.work_history = []
        } else {
          this.state.work_history = data.work_history
        }

        this.setState({
          applicantProfile: this.state.applicantProfile,
          desired_location: this.state.desired_location,
          certifications: this.state.certifications,
          search_tags: this.state.desired_industry + ',' + this.state.desired_location + ',' + this.state.education_level + ',' +  this.state.certifications,
          school_data: this.state.school_data,
          work_history: this.state.work_history,
          languages_spoken: this.state.languages_spoken,
          isLoading: true
        })
      }

    })


    // get skill data
    const skills_url = 'https://apex-database.herokuapp.com/api/applicants/new_skillslevels/' + user_id
    $.get(skills_url).done( (data)=>{
      // console.log("skill data: ", data)

       this.state.job_skills = data;
      // console.log("skills data", data)
       this.setState({
        job_skills: this.state.job_skills
      })

     })

     //  get experience data
     const industries_url = 'https://apex-database.herokuapp.com/api/applicants/new_industrylevels/' + user_id
     $.get(industries_url).done( (data)=>{
      //  console.log("industries data: ", data)
      // console.log("experience data", data)

        this.state.job_industries = data;
        this.setState({
        job_industries: this.state.job_industries
        })

      })


  }



  // functiont o reset Spinner
  resetSpinner(){
    // console.log("Running resetSpinner")

    if(this.state.isLoading == false){
      // console.log("inside conidtioning state of resetSpinner")
      this.state.isLoading = true
      this.setState({isLoading: true})
    }
  }

  render(){

    // spinner starts
    let spinner
    if (this.state.isLoading == false) {
      // console.log("this.state.isLoading", this.state.isLoading)
      spinner = <div className="ui segment">
                  <div id="spinner" className="ui active dimmer">
                    <div className="ui massive text loader"> Loading ...</div>
                  </div>
                </div>

    } else if (this.state.isLoading == true) {
      // console.log("this.state.isLoading", this.state.isLoading)
      spinner = <div></div>
    }
    // spinner starts

    // render school data
    let splittedSchoolData = [];
    this.state.school_data.map(function(school){
      let split = school.split(",")
      splittedSchoolData.push(split)
    })
    let school_data = splittedSchoolData.map(function(el){
      return <div key="school_data_1">
              <h2>{el[0]}</h2>
              <h2>{el[1]} - {el[2]}</h2>
              <br/>
            </div>
    })
    let education_data = splittedSchoolData.map(function(el){
      return <div key={el[0]+el[1]+el[2]} className="ui label details">
              <p>{el[1]} - {el[2]}</p>
              <p>{el[0]}</p>
            </div>
    })

    // render work_history
    let splittedWorkHistory = [];
    this.state.work_history.map(function(work){
      let split = work.split(",")
      splittedWorkHistory.push(split)
    })
    let work_data = splittedWorkHistory.map(function(el){
      return <div key={el[0]+el[1]+el[2]+el[3]} className="ui label details">
              <p>{el[0]} - {el[1]}</p>
              <p>{el[2]} to {el[3]}</p>
            </div>
    })

    // render locations
    const desired_location = this.state.desired_location.map(function(location){
      return <div key={location} className="ui label details">{location}</div>
    });

    // render languages_spoken
    const languages_spoken_ = this.state.languages_spoken.map(function(language){
      return <div key={language} className="ui label details">{language}</div>
    });

    // render profile image
    let profile_image;
    if(this.state.applicantProfile.profile_image == "" || this.state.applicantProfile.profile_image == null){
      // console.log("no image")
      profile_image = <img className="ui medium circular center image" src="images/img_placeholders/user_img.png" alt="Profile Picture"/>
    } else {
      // console.log("yes image")
      profile_image = <img className="ui medium circular image" src={  'https://apex-database.herokuapp.com/images/applicant_profile_img/' + this.state.applicantProfile.profile_image} alt="Profile Picture"/>
    }

    // render skills data
    const skills_state = this.state.job_skills
    // console.log("skills_state", skills_state)
    let skills = skills_state.map(function(skill){
      // console.log("skill", skill)
      return <div className="ui label details" key={skill.id}>{skill.skill_name}</div>
    })

    // render industry data
    const industries_state = this.state.job_industries
    // console.log("industries_state", industries_state)
    let industries = industries_state.map(function(industry){
      // console.log("industry", industry)
      return <div className="ui label details" key={industry.id}>{industry.industry_name}</div>
    })


    // render resume data
    let resume_pdf = this.state.applicantProfile.resume_pdf
    let resume;
    if(this.state.applicantProfile.resume_pdf == "" || this.state.applicantProfile.resume_pdf == "" ) {
      resume = <div>Please update profile with a new resume</div>
    } else {
      resume = <div className="ui center aligned basic segment download">
        <p>click below to download the most updated resume.</p>
        <a href={`https://apex-database.herokuapp.com/images/applicant_profile_resume/${resume_pdf}`} className="item ui button solid" target="_blank"><i className="icon download large blue" target="_blank"></i>Download Resume</a>
      </div>
    }

    return(
        <div id="applicant_profile">

          {/* Spinner Starts */}
            {spinner}
          {/* Spinner Ends */}

          {/* Header */}
          <div className="ui stackable grid">
            <div className="four wide column">
              <div className="ui center aligned basic segment profile">

                {profile_image}

              </div>
            </div>
            <div id="profile_title" className="eleven wide column">
              <div className="ui equal width grid">
                <div className="column">
                  <h2>{this.state.applicantProfile.name} {this.state.applicantProfile.last_name}</h2>
                  <h2></h2>
                  <h2>{school_data[1]}</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Update Profile */}
          <div className="ui two column centered grid">
            <Link to="/applicant_profile_update">
              <button className="ui button large">Udate Profile</button>
            </Link>
          </div>

          <div className="ui divider"></div>

          {/* Bio */}
          <div id="bio" className="twelve wide column">
            <h2>Summary</h2>
            <p>{this.state.applicantProfile.summary}</p>
          </div>

          <div className="ui divider"></div>

          {/* Contact Info, Inteted in Positions Education & Previous Experiences */}

          <div className="ui equal width stackable grid">

            <div className="column">
              <h4>contact info</h4>
              <br/>
              <div className="ui horizontal list centered aligned middle grid">
                <div className="content">
                  <div className="ui label details">
                    <p>Email: <a href={"mailto:" + this.state.applicantProfile.email} target="_blank">{this.state.applicantProfile.email}</a> </p>
                  </div>
                  <div className="ui label details">
                    <p>Phone: <a href={"tel:" + this.state.applicantProfile.phone_number}>{this.state.applicantProfile.phone_number}</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/*<div className="column">
              <h4>Intested in Position In</h4>
              <br/>
              <div className="ui horizontal list centered aligned middle grid">
                <div className="content">
                  <div className="ui label details">
                    <p>{this.state.applicantProfile.job_type}</p>
                  </div>
                </div>
              </div>
            </div>*/}

            <div className="column">
              <h4> Education </h4>
              <br/>
              <div className="ui horizontal list centered aligned middle grid">
                <div className="content">
                  {education_data}
                </div>
              </div>
            </div>

            <div className="column">
              <h4> Previous Positions</h4>
              <br/>
              <div className="ui horizontal list centered aligned middle grid">
                <div className="content">
                  {work_data}
                </div>
              </div>
            </div>

          </div>

          <div className="ui divider"></div>

          {/* Experience In */}

          <div className="ui equal width stackable grid">
            <div className="column">
              <h4>Experience:</h4>
              <br/>
              <div className="ui horizontal list centered aligned middle grid">
                <div className="content">
                  {industries}
                </div>
              </div>
            </div>
            <div className="column">
              <h4>Skills: </h4>
              <br/>
              <div className="ui horizontal list centered aligned middle grid">
                <div className="content">
                  {skills}
                </div>
              </div>
            </div>
          </div>

          {/* Add Experience & Skills */}
          <div className="ui two column centered grid">
            <Link to="/applicant_skill_form">
              <button className="ui button large">Add More Experience or Skills</button>
            </Link>
          </div>

          <div className="ui divider"></div>
          {/* Interested In Working In */}
          <div className="twelve wide column">
            <h4>Interested in Working in: </h4>
            <br/>
            <div className="ui horizontal list centered aligned middle grid">
              <div className="content">
                {desired_location}
              </div>
            </div>
          </div>


          <div className="ui divider"></div>
          {/* Additional Links , PDF Download, Languages */}
          <div className="ui equal width stackable grid">
            {/*<div className="column">
              <h4>Additional Links</h4>
              <br/>
              <div className="ui horizontal list centered aligned middle grid">
                <div className="content">
                  <div className="ui label details">
                    Linke 4
                  </div>
                  <div className="ui label details">
                    Linke 2
                  </div>
                </div>
              </div>
            </div>*/}
            <div className="column">
              <h4>Resume</h4>
              {resume}

            </div>
            <div className="column">
              <h4> Languages </h4>
              <br/>
              <div className="ui horizontal list centered aligned middle grid">
                <div className="content">
                  {languages_spoken_}
                </div>
              </div>
            </div>

          </div>


          {/* Match Button*/}
          <div className="ui two column centered grid">
            <Link to="/list_match">
              <button className="ui button large">Match Your Dream Job Today</button>
            </Link>
          </div>
        </div>

    )
  }

}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Applicant_profile);
