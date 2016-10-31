import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery'; // requires jQuery for AJAX request
import { Button, Dropdown, Grid, Header } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {browserHistory} from 'react-router';

let languageState = [];
let certificateState = [];
let locationState = [];
let schoolData = []
let companyData = []

class Applicant_profile_form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user_id:'',
      profile_files: [],
      desired_locationArry:[],
      desired_industry:'',
      zipcode: '',
      phone_number: '',
      job_type: '',
      experience_level:'',
      companyArry:[],
      certifications: [],
      languages_spokenArry:[],
      education_level:'',
      schools: [],
      school_name:'',
      year: '',
      company_name: '',
      job_title: '',
      start_from: '',
      to:'',
      resume_pdf:'',
      desired_location:[],
      languages_spoken:[],
      profile_image:'',
      certificationsArry: [],
      educationArry: [],
      work_historyArry: []
    }

  }


  handleSubmit(e) {
    e.preventDefault();
    console.log("submit clicked")

    let applicantProfileData = {
      user_id: this.props.auth.user.id,
      profile_image: this.state.profile_image,
      desired_industry: this.state.desired_industry,
      zipcode: this.state.zipcode,
      phone_number: this.state.phone_number,
      job_type: this.state.job_type,
      experience_level: this.state.experience_level,
      certifications: this.state.certifications,
      resume_pdf: this.state.resume_pdf,
      desired_location: this.state.desired_location,
      languages_spoken: this.state.languages_spoken,
      educationArry: this.state.educationArry,
      companyArry: this.state.companyArry,
      work_historyArry: this.state.work_historyArry
    }

    let ApplicantProfileImages = {
      profile_files: this.state.profile_files

    }
    console.log("handleSubmit - Applicant Profile Data: ", applicantProfileData, ApplicantProfileImages)


    //****************

    var work_historyArr =  applicantProfileData.work_historyArry   // => ["English", "Turkish"]
    // console.log("work_historyArry", work_historyArry)
    var final_work_histories = "{";

    work_historyArr.forEach(function(el){
       if( el === work_historyArr[work_historyArr.length -1]) {
         final_work_histories = final_work_histories + "\"" + el + '\"}';
       } else {
         final_work_histories = final_work_histories + "\"" + el + '\",';
       }
       applicantProfileData.work_historyArry = final_work_histories;
       console.log("line 92 final_work_histories", final_work_histories)
       console.log("line 93 applicantProfileData.work_historyArr", applicantProfileData.work_historyArry)

    })

    //****************


    //****************

    var educationArr =  applicantProfileData.educationArry   // => ["English", "Turkish"]
    console.log("educationArr", educationArr)
    var final_educations = "{";

    educationArr.forEach(function(el){
       if( el === educationArr[educationArr.length -1]) {
         final_educations = final_educations + "\"" + el + '\"}';
       } else {
         final_educations = final_educations + "\"" + el + '\",';
       }
       applicantProfileData.educationArry = final_educations;
       console.log("line 113 final_educations", final_educations)
       console.log("line 114 applicantProfileData.educationArry", applicantProfileData.educationArry)

    })

    //****************

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

    //****************

    var expArr =  applicantProfileData.companyArry   // => ["comp.", "cpmp"]
    var final_expArr = "{";

    expArr.forEach(function(el){
       if( el === expArr[langArr.length -1]) {
         final_expArr = final_expArr + "\"" + el + '\"}';
       } else {
         final_expArr = final_expArr + "\"" + el + '\",';
       }
       applicantProfileData.companyArry = final_expArr;
       console.log("final_expArr", final_expArr)
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
      })

    console.log("Line 105 - applicantProfileData", applicantProfileData)
    console.log("Line 105 - applicantProfileData", ApplicantProfileImages)


    postOneApplicant(applicantProfileData , ApplicantProfileImages);

    // this.setState({
    //   user_id:'',
    //   profile_files: [],
    //   desired_locationArry:[],
    //   desired_industry:'',
    //   zipcode: '',
    //   phone_number: '',
    //   job_type: '',
    //   experience_level:'',
    //   certifications: [],
    //   languages_spokenArry:[],
    //   education_level:'',
    //   school: '',
    //   year: '',
    //   company_name: '',
    //   job_title: '',
    //   start_from: '',
    //   resume_pdf:'',
    //   desired_location:[],
    //   languages_spoken:[],
    //   profile_image:'',
    //   certificationsArry: [],
    //   educationArry: [],
    //   companyArry: []
    // })
    // browserHistory.push('/Applicant_skill_form')
    window.location.assign('/Applicant_skill_form')

  }

  handleAddEducation(e){
    e.preventDefault();
    console.log("Add Additional Education clicked")

    let educationData = [
      this.state.education_level,
      this.state.school_name,
      this.state.year
    ]
    schoolData.push(educationData)
    console.log("schoolData", schoolData)

    this.setState({
      educationArry: schoolData
    });


  }

  handleAddJobExperience(e){
    e.preventDefault();
    console.log("Add Additional Job Experiences clicked")

    let jobData = [
      this.state.company_name,
      this.state.job_title,
      this.state.start_from,
      this.state.to
    ]

    companyData.push(jobData)
    console.log("companyData", companyData)

    this.setState({
      work_historyArry: companyData
    });

    // console.log("work_historyArry", work_historyArry)
  }

  onProfileImageChange(profile_image){
    this.setState({profile_image})
  }

  onLocationChange(desired_locationArry){
    locationState.push(desired_locationArry)
    this.setState({desired_location: locationState})
  }

  onDesiredIndustryChange(desired_industry){
    this.setState({desired_industry});
  }

  onZipcodeChange(zipcode){
    this.setState({zipcode});
  }

  onPhoneNumberChange(phone_number){
    this.setState({phone_number});
  }

  onJobTypeChange(job_type){
    this.setState({job_type});
  }

  onIndustryExpLevelChange(experience_level){
    this.setState({experience_level});
  }

  onCertificationChange(certificationsArry){
    certificateState.push(certificationsArry)
    this.setState({certifications: certificateState})
  }

  onLanguageChange(languages_spokenArry){
    languageState.push(languages_spokenArry)
    this.setState({languages_spoken: languageState})
  }

  onEducationLevelChange(education_level){
    this.setState({education_level});
  }

  onSchoolChange(school_name){
    this.setState({school_name});
  }

  onSchoolYearChange(year){
    this.setState({year});
  }

  onCompanyNameChange(company_name){
    this.setState({company_name});
  }

  onJobTitleChange(job_title){
    this.setState({job_title});
  }

  onStartFromChange(start_from){
    this.setState({start_from});
  }

  onToChange(to){
    this.setState({to});
  }

  onresume_pdfChange(resume_pdf){
    this.setState({resume_pdf})
  }





  onDrop(acceptedFiles){
    // console.log("acceptedFiles", acceptedFiles)

    this.setState({
      profile_files: acceptedFiles , profile_image:acceptedFiles[0].id
    });

    // console.log("onDrop this.state.profile_files", this.state.profile_files)
    $('#eventDropZone').hide()
  }

  render(){
    const { currentValue, currentValues } = this.state;

    const { isAuthenticated } = this.props.auth;

    const applicantForm = (
        <div id="applicant_profile_form">

          <h1> Tell Us About Yourself, and We'll Tell YOu Who's Looking to Hire You</h1>

          <form className="ui form applicant_profile_form" onSubmit={this.handleSubmit.bind(this)}>

            <div className="three fields">
              <div className="field">
              <div>
                <Dropzone className="ui segment" onDrop={this.onDrop.bind(this)} id="eventDropZone">
                  <h2 className="ui header">Dropping your image here, <br/> or <br/> click to select image to upload.</h2>
                </Dropzone>
                {this.state.profile_files.length > 0 ? <div>{this.state.profile_files.map((file) => <img className="ui small circular image" key ={file.lastModified} src={file.preview} /> )}</div> : null}
              </div>
              </div>
              <div className="field"></div>
              <div className="field"></div>
            </div>

            <div className="ui divider"></div>

            <div className="two fields">
              {/* Left Field */}
              <div className="field">
                {/* Interested in Jobs in */}
                <div>
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

                <br/>

                {/* Desired Location */}
                <div>
                  <label>Desired Industry</label>
                  <select name="desired_industry" id="" className="ui fluid dropdown" value={this.state.desired_industry}
                  onChange={e => this.onDesiredIndustryChange(e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="Finance">Finance</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Health">Health</option>
                  </select>
                </div>

                <br/>

                {/* Current Zip Code */}
                <div>
                  <label>Current Zip Code</label>
                  <input name="zipcode" value={this.state.zipcode} type="text" placeholder="zipcode" onChange={e => this.onZipcodeChange(e.target.value)}/>
                </div>

                <br/>

                {/* Phone Number */}
                <div>
                  <label>Phone Number</label>
                  <input name="phone_number" value={this.state.phone_number} type="text" placeholder="phone number" onChange={e => this.onPhoneNumberChange(e.target.value)}/>
                </div>

                <br/>

                {/* Job Type */}
                <div>
                  <label name="job_type">Job Type</label>
                  <select name="job_type" id="" className="ui fluid dropdown" value={this.state.job_type} onChange={e => this.onJobTypeChange(e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="Intern">Intern</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Temporary Contract">Temporary Contract</option>
                  </select>
                </div>

                <br/>

                {/* Industry Work Experience */}
                <div>
                  <label name="experience_level">Industry Work Experience (Full Employment)</label>
                  <select name="experience_level" id="" className="ui fluid dropdown" value={this.state.experience_level}
                  onChange={e => this.onIndustryExpLevelChange(e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="Entry Level"> 0-2 Years (Entry Level)</option>
                    <option value="Mid Level">2-5 Years (Mid-Level)</option>
                    <option value="High Level">5+ Years (High-Level)</option>
                  </select>
                </div>

                <br/>

                {/* Certification Held */}
                <div>
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

                <br/>

                {/* Additional Language Spoken */}
                <div>
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

              {/* Right Field */}
              <div className="field">

                {/* Education Level */}
                <div className="ui segment">
                  <label name="education_level">Education Level</label>
                  <select name="education_level" id="" className="ui fluid dropdown" value={this.state.education_level}
                  onChange={e => this.onEducationLevelChange(e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="Current Student">Current Student</option>
                    <option value="High School/GED">High School/GED</option>
                    <option value="Associate Degree">Associate Degree</option>
                    <option value="Bachelors Degree">Bachelors Degree</option>
                    <option value="JD Degree">JD Degree</option>
                    <option value="Masters Degree">Masters Degree</option>
                    <option value="MBA Degree">MBA Degree</option>
                    <option value="MSF">MSF</option>
                    <option value="Ph.D/Doctorate">Ph.D/Doctorate</option>
                  </select>

                  <br/>
                  {/* School & Year */}
                  <div className="two fields">
                    <div className="field">
                      <label name="school_name">School</label>
                      <input name="school_name" value={this.state.school_name} type="text" placeholder="school" onChange={e => this.onSchoolChange(e.target.value)}/>
                    </div>
                    <div className="field">
                      <label name="Year">Graduation Year</label>
                      <input name="year" value={this.state.year} type="text" placeholder="year"onChange={e => this.onSchoolYearChange(e.target.value)}/>
                    </div>
                  </div>
                  <div>
                    <p onClick={ this.handleAddEducation.bind(this)}><i className="icon plus"></i>Add Additional</p>
                  </div>

                </div>

                <br/>

                {/* Previous Positions Held */}
                <div className="ui segment">
                  <div className="two fields">
                    <div className="field">
                      <label name="Company Name">Company Name</label>
                      <input name="Company_name" value={this.state.company_name} type="text" placeholder="Company Name" onChange={e => this.onCompanyNameChange(e.target.value)}/>
                      <br/>
                    </div>
                    <div className="field">
                      <label name="job_title">Job Title</label>
                      <input name="job_title" value={this.state.job_title} type="text" placeholder="school"onChange={e => this.onJobTitleChange(e.target.value)}/>
                    </div>
                  </div>
                    <div className="two fields">
                    <div className="field">
                      <label name="start_from">From</label>
                      <input name="start_from" value={this.state.start_from} type="date" placeholder="From"onChange={e => this.onStartFromChange(e.target.value)}/>
                    </div>
                    <div className="field">
                      <label name="to">To</label>
                      <input name="to" value={this.state.to} type="date" placeholder="From"onChange={e => this.onToChange(e.target.value)}/>
                    </div>

                  </div>
                  <div>
                    <p onClick={ this.handleAddJobExperience.bind(this)}><i className="icon plus"></i>Add Additional</p>
                  </div>
                </div>
                <br/>

                {/* Upload Resume (PDF) */}
                <div>
                  <label>Upload resume_pdf</label>
                  <input type="file" name="resume_pdf" accept="application/pdf"
                  value={this.state.resume_pdf}
                  onChange={ e => this.onresume_pdfChange(e.target.value)}/>
                </div>

              </div>

            </div>

            <button className="ui right floated blue button" type="submit">Add Skills & Experience!</button>

          </form>


        </div>
      )

      const error = (
        <div className="field">
        <br/><br/><br/><br/><br/>
        Please sign in as an Applicant to reach this page.
        </div>
      )
      return (
            <div>
              { isAuthenticated && this.props.auth.user.type =='applicant' ? applicantForm : error }
            </div>
        )}
}

function postOneApplicant(applicantProfileData, ApplicantProfileImages){

  console.log('postOneApplicant Function data: ', applicantProfileData)

  $.post('https://apex-database.herokuapp.com/api/applicants/new', applicantProfileData)
    .done((data) => {
      console.log('Applicant Profile Data Posted to postOneApplicant - returned data: ', data)

      PostImage( data.id, ApplicantProfileImages  );

      // browserHistory.push('/applicant_profile'); // redirects to applicant_profile

    })
    .error((error) => {
      // console.error('Applicant Profile Data Failed to Post to postOneApplicant - returned data: ', error);
    })

}

function PostImage(id, imgObj){
  console.log('PostImagefired')
  $.post('https://apex-database.herokuapp.com/api/applicants/'+ id, {processData: false}, imgObj)

  let req = request.post('https://apex-database.herokuapp.com/api/applicants/upload_image');
  imgObj.profile_files.forEach((file) => {
    // console.log(req)
    console.log("hello from inside forEach()", file)
    req.attach(file.name, file);
    req.field('id', id)
    req.end(function(err, res){
      if (err || !res.ok) {
        console.log('Oh no! error')
      } else {
        console.log('yay got ' + JSON.stringify(res.body))
      }
    })
  })
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Applicant_profile_form);
