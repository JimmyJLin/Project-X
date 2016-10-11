import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery'; // requires jQuery for AJAX request
import { Button, Dropdown, Grid, Header } from 'semantic-ui-react'

let languageState = [];
let certificateState = [];
let locationState = [];

class Applicant_profile_form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user_id:'',
      first_name:'',
      last_name:'',
      desired_industry:'',
      desired_location:[],
      education_level:'',
      experience_level:'',
      certifications: [],
      languages_spoken:[],
      resume_pdf:'',
      profile_image:'',
      certificationsArry: [],
      languages_spokenArry:[],
      desired_locationArry:[]
    }

  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit clicked")
    const user_id = '4'
    let applicantProfileData = {
      user_id: user_id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      desired_industry: this.state.desired_industry,
      desired_location: this.state.desired_location,
      education_level: this.state.education_level,
      experience_level: this.state.experience_level,
      certifications: this.state.certifications,
      languages_spoken: this.state.languages_spoken,
      resume_pdf: this.state.resume_pdf,
      profile_image: this.state.profile_image
    }
    console.log("handleSubmit - Applicant Profile Data: ", applicantProfileData)

    //****************

    var langArr =  applicantProfileData.languages_spoken   // => ["English", "Turkish"]
    var final_languages = "{";

    langArr.forEach(function(el){
       if( el === langArr[langArr.length -1]) {
         final_languages = final_languages + "\"" + el + '\"}';
       } else {
         final_languages = final_languages + "\"" + el + '\",';
       }
       applicantProfileData.languages_spoken = final_languages;
       console.log("final_languages", final_languages)
    })

//****************
    var certArr =  applicantProfileData.certifications   // => ["English", "Turkish"]
    var final_cert = "{";

    certArr.forEach(function(el){
       if( el === certArr[certArr.length-1]) {
         final_cert = final_cert + "\"" + el + '\"}';
       } else {
         final_cert = final_cert + "\"" + el + '\",';
       }
       applicantProfileData.certifications = final_cert;
       console.log("certifications", final_cert)
    })

// ***********
  var desired_locationArr =  applicantProfileData.desired_location   // => ["English", "Turkish"]
  var final_desired_location = "{";

  desired_locationArr.forEach(function(el){
     if( el === desired_locationArr[desired_locationArr.length-1] ) {
       final_desired_location = final_desired_location + "\"" + el + '\"}';
     } else {
       final_desired_location = final_desired_location + "\"" + el + '\",';
     }
     applicantProfileData.desired_location = final_desired_location;
     console.log("locations", final_desired_location)
     console.log("handleSubmit - Applicant Profile Data: ", applicantProfileData)
  })


    postOneApplicant(applicantProfileData)

    this.setState({
      user_id:'',
      first_name:'',
      last_name:'',
      desired_industry:'',
      desired_location:[],
      education_level:'',
      experience_level:'',
      certifications:[],
      languages_spoken:[],
      resume_pdf:'',
      profile_image:'',
      testLanguage: []
    })

  }

  onFirstNameChange(first_name){
    this.setState({first_name});
  }

  onLastNameChange(last_name){
    this.setState({last_name});
  }

  onDesiredIndustryChange(desired_industry){
    this.setState({desired_industry});
  }

  onEducationLevelChange(education_level){
    this.setState({education_level});
  }

  onIndustryExpLevelChange(experience_level){
    this.setState({experience_level});
  }

  onresume_pdfChange(resume_pdf){
    this.setState({resume_pdf})
  }

  onProfileImageChange(profile_image){
    this.setState({profile_image})
  }

  onLanguageChange(languages_spokenArry){
    languageState.push(languages_spokenArry)
    this.setState({languages_spoken: languageState})
  }

  onCertificationChange(certificationsArry){
    certificateState.push(certificationsArry)
    this.setState({certifications: certificateState})
  }

  onLocationChange(desired_locationArry){
    locationState.push(desired_locationArry)
    this.setState({desired_location: locationState})
  }

  render(){
    const { currentValue, currentValues } = this.state

    return(
        <div id="applicant_profile_form">

          <h1>Tell Us About Yourself, and We'll Tell YOu Who's Looking to Hire You</h1>

          <form className="ui form applicant_profile_form" onSubmit={this.handleSubmit.bind(this)}>

            <div className="ui stacked segment">
              <h2 className="ui center aligned icon header">
                <i className="circular users icon"></i>
                NOT a member yet
                <br/>
                <p>Please signup before creating applicant profile</p>
                <a id='applicant_profile_signup_button' className="fluid ui button"> Sign up</a>
              </h2>
            </div>

            <div className="ui divider"></div>

            <div className="two fields">
              <div className="field">
                <label>First Name</label>
                <input name="first_name" type="text" value={this.state.first_name}
                onChange={e => this.onFirstNameChange(e.target.value)}/>
              </div>
              <div className="field">
                <label name="last_name">Last Name</label>
                <input type="text" value={this.state.last_name}
                onChange={e => this.onLastNameChange(e.target.value)}/>
              </div>
            </div>

            <div className="two fields">
              <div className="field">
                <label>Desired Industry</label>
                <select name="desired_industry" id="" className="ui fluid dropdown" value={this.state.desired_industry}
                onChange={e => this.onDesiredIndustryChange(e.target.value)}>
                  <option value="">Please Select</option>
                  <option value="Finance">Finance</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Health">Health</option>
                </select>
              </div>
              <div className="field">
                <label name="education_level">Education Level</label>
                <select name="education_level" id="" className="ui fluid dropdown" value={this.state.education_level}
                onChange={e => this.onEducationLevelChange(e.target.value)}>
                  <option value="">Please Select</option>
                  <option value="High School / GED">High School / GED</option>
                  <option value="Associate Degree">Associate Degree</option>
                  <option value="Bachelor Degree">Bachelor Degree</option>
                  <option value="Master Degree">Master Degree</option>
                  <option value="Phd">Phd</option>
                </select>
              </div>
            </div>

            <div className="two fields">
              <div className="field">
                <label>Interested In Working</label>
                <select multiple="true" name="desired_location" className="ui fluid normal dropdown"
                value={this.state.desired_locationArry}
                onChange={e => this.onLocationChange(e.target.value)}>
                  <option value="">Please Select</option>
                  <option value="New York">New York</option>
                  <option value="London">London</option>
                  <option value="Paris">Paris</option>
                  <option value="Berlin ">Berlin </option>
                  <option value="Tokyo">Tokyo</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Nassau County">Nassau County</option>
                  <option value="Suffolk County">Suffolk County</option>
                  <option value="Brooklyn">Brooklyn</option>
                  <option value="Queens">Queens</option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Staten Island">Staten Island</option>
                  <option value="Jersey City">Jersey City</option>
                  <option value="Rye">Rye</option>
                  <option value="Westchester">Westchester</option>
                  <option value="Albany">Albany</option>

                </select>
              </div>

              <div className="field">
                <label name="experience_level">Experience Level</label>
                <select name="experience_level" id="" className="ui fluid dropdown" value={this.state.experience_level}
                onChange={e => this.onIndustryExpLevelChange(e.target.value)}>
                  <option value="">Please Select</option>
                  <option value="Entry Level">Entry Level- 2 Years or less</option>
                  <option value="Mid Level">Mid Level- 2-5 Years</option>
                  <option value="High Level">High Level- 5-10Years</option>
                </select>
              </div>
            </div>

            <div className="two fields">
              <div className="field">
                <label>Upload resume_pdf</label>
                <input type="file" name="resume_pdf" accept="application/pdf"
                value={this.state.resume_pdf}
                onChange={ e => this.onresume_pdfChange(e.target.value)}/>
              </div>
              <div className="field">
                <label name="certifications">Relevant certifications</label>
                <select multiple="true" name="certifications" className="ui fluid normal dropdown"
                value={this.state.certificationsArry}
                onChange={e => this.onCertificationChange(e.target.value)}>
                  <option value="">Please Select</option>
                  <option value="Certified Financial Planner (CFP)">Certified Financial Planner (CFP)</option>
                  <option value="Chartered Financial Analysts (CFA)">Chartered Financial Analysts (CFA)</option>
                  <option value="Certified Fund Specialists (CFS)">Certified Fund Specialists (CFS)</option>
                  <option value="Chartered Financial Consultant (ChFC)">Chartered Financial Consultant (ChFC)</option>
                  <option value="Chartered Investment Counselor (CIC)">Chartered Investment Counselor (CIC)</option>
                  <option value="Certified Investment Management Analysts (CIMA)">Certified Investment Management Analysts (CIMA)</option>
                  <option value="Chartered Market Technician (CMT)">Chartered Market Technician (CMT)</option>
                  <option value="Personal Financial Specialist (PFS)">Personal Financial Specialist (PFS)</option>
                  <option value="Certified Public Accountant (CPA)">Certified Public Accountant (CPA)</option>
                  <option value="Certified Management Accountant (CMA)">Certified Management Accountant (CMA)</option>
                  <option value="Certified in Financial Management (CFM)">Certified in Financial Management (CFM)</option>
                  <option value="Certified Internal Auditor (CIA)">Certified Internal Auditor (CIA)</option>
                  <option value="Certification in Control Self Assessment (CCSA)">Certification in Control Self Assessment (CCSA)</option>
                  <option value="Certified Information Systems Auditor (CISA)">Certified Information Systems Auditor (CISA)</option>
                  <option value="Certified Fraud Examiner (CFE)">Certified Fraud Examiner (CFE)</option>

                </select>
              </div>
            </div>

            <div className="two fields">
              <div className="field">
                <label>Upload Profile Picture</label>

                <img className="profile-pic" src="" />
                <br/>
                <input className="file-upload" name="profile_image" type="file" accept="images/*"
                value={this.state.profile_image}
                onChange={ e => this.onProfileImageChange(e.target.value)}/>

              </div>

              <div className="field">
                <label name="languages_spoken">Languages Spoken</label>
                <select multiple="true" name="languages_spoken" className="ui fluid normal dropdown"
                value={this.state.languages_spokenArry}
                onChange={e => this.onLanguageChange(e.target.value)}>
                  <option value="">Please Select</option>
                  <option value="Spanish">Spanish</option>
                  <option value="German">German</option>
                  <option value="French">French</option>
                  <option value="Italian">Italian</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Russian">Russian</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Portuguese">Portuguese</option>
                  <option value="Japanese">Japanese</option>
                </select>

              </div>
            </div>

            <button className="ui button" type="submit">Activate Basic Profile</button>

          </form>


        </div>

    )
  }

}


function postOneApplicant(applicantProfileData){
  console.log('postOneApplicant Function data: ', applicantProfileData)
  $.post('/api/applicants/new', applicantProfileData)
    .done((data) => {
      console.log('Applicant Profile Data Posted to postOneApplicant - returned data: ', data)
    })
    .error((error) => {
      console.error('Applicant Profile Data Failed to Post to postOneApplicant - returned data: ', error);
    })
}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Applicant_profile_form);
