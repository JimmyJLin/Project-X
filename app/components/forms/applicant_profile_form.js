import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import HeaderMenu from '../headermenu';
import Footer from '../footer';
import $ from 'jquery'; // requires jQuery for AJAX request


class Applicant_profile_form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user_id:'',
      first_name:'',
      last_name:'',
      desired_industry:[],
      desired_location:[],
      skills:[],
      education_level:'',
      experience_level:'',
      certifications:'',
      languages_spoken:[],
      resume_pdf_pdf:'',
      profile_image:''
    }

  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit clicked")

    let employerProfileData = {
      user_id:localStorage.id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      desired_industry: this.state.desired_industry,
      desired_location: this.state.desired_location,
      skills:this.state.skills,
      education_level: this.state.education_level,
      experience_level: this.state.experience_level,
      certifications: this.state.certifications,
      languages_spoken: this.state.languages_spoken,
      resume_pdf_pdf: this.state.resume_pdf,
      profile_image: this.state.profile_image
    }
    console.log(employerProfileData)
    postApplicant(employerProfileData)

    this.setState({
      user_id:'',
      first_name:'',
      last_name:'',
      desired_industry:[],
      desired_location:[],
      skills:[],
      education_level:'',
      experience_level:'',
      certifications:'',
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

  onLanguageChange(lang){
    this.state.languages_spoken.push(lang)
    this.setState({languages_spoken: this.state.languages_spoken})
  }
  onSkillsChange(sk){
    this.state.skills.push(sk)
    this.setState({skills:this.state.skills})
  }

  render(){
    return(
        <div id="applicant_profile_form">

          <h1>Tell Us About Yourself, and We'll Tell YOu Who's Looking to Hire You</h1>

          <form className="ui form applicant_profile_form" onSubmit={this.handleSubmit.bind(this)}>

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
                  <option value="Bachelor Degree">Bachelor Degree</option>
                  <option value="Phd">Phd</option>
                </select>
              </div>
            </div>

            <div className="two fields">
              <div className="field">
                <label>Interested In Working</label>

                <input name="desired_location" type="text" value={this.state.desired_location}
                onChange={e => this.onInterestedWorkingChange(e.target.value)}/>
              </div>
              <div className="field">
                <label name="experience_level">Experience Level</label>
                <select name="experience_level" id="" className="ui fluid dropdown" value={this.state.experience_level}
                onChange={e => this.onIndustryExpLevelChange(e.target.value)}>
                  <option value="">Please Select</option>
                  <option value="Entry Level">Entry Level</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="High Level">High Level</option>
                </select>
              </div>
            </div>

            <div className="two fields">
              <div className="field">
                <label>Upload resume_pdf</label>
                <input type="file" name="resume_pdf" accept="images/resume_pdf/*"
                value={this.state.resume_pdf}
                onChange={ e => this.onresume_pdfChange(e.target.value)}/>
              </div>
              <div className="field">
                <label name="certifications">Relevant certificationss</label>
                <select multiple="true" name="certifications" id="" className="ui fluid dropdown" value={this.state.certifications}
                onChange={e => this.oncertificationsChange(e.target.value)}>
                  <option value="">Please Select</option>
                  <option value="Series 7">Series 7</option>
                  <option value="CPA Certified">CPA Certified</option>
                  <option value="FMA">FMA</option>
                </select>
              </div>
            </div>

            <div className="two fields">
              <div className="field">
                <label>Upload Profile Picture</label>
                <input type="file" name="profile_image" accept="images/profile_images/*"
                value={this.state.profile_image}
                onChange={ e => this.onProfileImageChange(e.target.value)}/>
              </div>

              <div className="field">

                <label name="skills">Skills</label>
                <select multiple="true" id="skills" name="skills" className="ui fluid normal dropdown"
                value={this.state.skills}
                onChange={e => this.onSkillsChange(e.target.value)}>
                <option value="">Skills</option>
                <option value="angular">Angular</option>
                <option value="css">CSS</option>
                <option value="design">Graphic Design</option>
                <option value="ember">Ember</option>
                <option value="html">HTML</option>
                <option value="ia">Information Architecture</option>
                <option value="javascript">Javascript</option>
                <option value="mech">Mechanical Engineering</option>
                <option value="meteor">Meteor</option>
                <option value="node">NodeJS</option>
                <option value="plumbing">Plumbing</option>
                <option value="python">Python</option>
                <option value="rails">Rails</option>
                <option value="react">React</option>
                <option value="repair">Kitchen Repair</option>
                <option value="ruby">Ruby</option>
                <option value="ui">UI Design</option>
                <option value="ux">User Experience</option>
                </select>

                <label name="languages_spoken">Languages Spoken</label>
                <select multiple="true" name="languages_spoken" id="multi-select" className="ui fluid normal dropdown"
                value={this.state.languages_spoken}
                onChange={e => this.onLanguageChange(e.target.value)}>
                  <option value="">Languages</option>
                  <option value="English">English</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Spanish">Spanish</option>
                </select>
              </div>
            </div>

            <button className="ui button" type="submit">Activate Basic Profile</button>

          </form>

        </div>

    )
  }

}


function postApplicant(employerProfileData){
  console.log('post job data is fired with data', employerProfileData)
  $.post('/api/applicants/:id', employerProfileData)
    .done((data) => {
      console.log('success', data)
    })
    .error((error) => {
      console.error('Posting is failed', error);
    })
}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Applicant_profile_form);
