import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery'; // requires jQuery for AJAX request
import { Button, Dropdown, Grid, Header } from 'semantic-ui-react'

const LanguageOptions = [
  { text: 'Spanish', value: 'Spanish' },
  { text: 'German', value: 'German' },
  { text: 'French', value: 'French' },
  { text: 'Italian', value: 'Italian' },
  { text: 'Chinese', value: 'Chinese' },
  { text: 'Arabic', value: 'Arabic' },
  { text: 'Russian', value: 'Russian' },
  { text: 'Hindi', value: 'Hindi' },
  { text: 'Portuguese', value: 'Portuguese' },
  { text: 'Japanese', value: 'Japanese' }
]

const DesiredLocations = [
  { text: 'New York', value: 'New York' },
  { text: 'London', value: 'London' },
  { text: 'Paris', value: 'Paris' },
]

const Certifications = [
  { text: 'Certified Financial Planner (CFP)', value: 'Certified Financial Planner (CFP)' },
  { text: 'Chartered Financial Analysts (CFA)', value: 'Chartered Financial Analysts (CFA)' },
  { text: 'Certified Fund Specialists (CFS)', value: 'Certified Fund Specialists (CFS)' },
  { text: 'Chartered Financial Consultant (ChFC)', value: 'Chartered Financial Consultant (ChFC)' },
  { text: 'Chartered Investment Counselor (CIC)', value: 'Chartered Investment Counselor (CIC)' },
  { text: 'Certified Investment Management Analysts (CIMA)', value: 'Certified Investment Management Analysts (CIMA)' },
  { text: 'Chartered Market Technician (CMT)', value: 'Chartered Market Technician (CMT)' },
  { text: 'Personal Financial Specialist (PFS)', value: 'Personal Financial Specialist (PFS)' },
  { text: 'Certified Public Accountant (CPA)', value: 'Certified Public Accountant (CPA)' },
  { text: 'Certified Management Accountant (CMA)', value: 'Certified Management Accountant (CMA)' },
  { text: 'Certified in Financial Management (CFM)', value: 'Certified in Financial Management (CFM)' },
  { text: 'Certified Internal Auditor (CIA)', value: 'Certified Internal Auditor (CIA)' },
  { text: 'Certification in Control Self Assessment (CCSA)', value: 'Certification in Control Self Assessment (CCSA)' },
  { text: 'Certified Information Systems Auditor (CISA)', value: 'Certified Information Systems Auditor (CISA)' },
  { text: 'Certified Fraud Examiner (CFE)', value: 'Certified Fraud Examiner (CFE)' }
]

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
      LanguageMultiple: LanguageOptions,
      DesiredLocationsMultiple: DesiredLocations,
      CertificationsMultiple: Certifications
    }

  }

  handleLanguageMultiple = (e, { value }) => {
    this.setState({
      LanguageMultiple: [{ text: value, value }, ...this.state.LanguageMultiple],
    })
  }
  handleChangeLanguageMultiple = (e, { value }) => this.setState({ languages_spoken: value })

  handleCertificationsMultiple = (e, { value }) => {
    this.setState({
      CertificationsMultiple: [{ text: value, value }, ...this.state.CertificationsMultiple],
    })
  }
  handleChangeCertificationsMultiple = (e, { value }) => this.setState({ certifications: value })


  handleDesiredLocationsMultiple = (e, { value }) => {
    this.setState({
      DesiredLocationsMultiple: [{ text: value, value }, ...this.state.DesiredLocationsMultiple],
    })
  }
  handleChangeDesiredLocationsMultiple = (e, { value }) => this.setState({ desired_location: value })

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
      profile_image:''
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

  onInterestedWorkingChange(desired_location){
    this.setState({desired_location});
  }

  onIndustryExpLevelChange(experience_level){
    this.setState({experience_level});
  }

  onresume_pdfChange(resume_pdf){
    this.setState({resume_pdf})
  }

  oncertificationsChange(certifications){
    this.state.certifications.push(certifications)
    this.setState({certifications: this.state.certifications})
  }

  onProfileImageChange(profile_image){
    this.setState({profile_image})
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
                <Dropdown
                  options={this.state.DesiredLocationsMultiple}
                  placeholder='Choose Desired Location'
                  search
                  selection
                  fluid
                  multiple
                  allowAdditions
                  additionPosition='top'
                  additionLabel=''
                  onAddItem={this.handleDesiredLocationsMultiple}
                  onChange={this.handleChangeDesiredLocationsMultiple}
                />
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
                <Dropdown
                  options={this.state.CertificationsMultiple}
                  placeholder='Choose Certifications'
                  search
                  selection
                  fluid
                  multiple
                  allowAdditions
                  additionPosition='top'
                  additionLabel=''
                  onAddItem={this.handleCertificationsMultiple}
                  onChange={this.handleChangeCertificationsMultiple}
                />
              </div>
            </div>

            <div className="two fields">
              <div className="field">
                <label>Upload Profile Picture</label>
                <input type="file" name="profile_image" accept="image/gif, image/jpeg"
                value={this.state.profile_image}
                onChange={ e => this.onProfileImageChange(e.target.value)}/>
              </div>
              <div className="field">
              <label name="languages_spoken">Languages Spoken</label>
                <Dropdown
                  options={this.state.LanguageMultiple}
                  placeholder='Choose Languages'
                  selection
                  multiple
                  additionPosition='bottom'
                  onAddItem={this.handleLanguageMultiple}
                  onChange={this.handleChangeLanguageMultiple}
                />

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
