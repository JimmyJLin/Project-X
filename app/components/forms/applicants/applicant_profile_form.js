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
      resume_files: [],
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
      resume_pdf:[],
      desired_location:[],
      languages_spoken:[],
      profile_image:'',
      resume_image: "",
      certificationsArry: [],
      educationArry: [],
      work_historyArry: [],
      summary: '',
      isLoading: true

    }

  }

  componentDidMount(){
    localStorage.setItem('key', "key");

    if(localStorage.getItem('isLoaded') !== 'yes'){
      localStorage.setItem('isLoaded', 'yes');
      window.location.reload(true)
    }

  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit clicked")


    let applicantProfileData = {
      user_id: this.props.auth.user.id,
      desired_industry: this.state.desired_industry,
      zipcode: this.state.zipcode,
      phone_number: this.state.phone_number,
      job_type: this.state.job_type,
      experience_level: this.state.experience_level,
      certifications: this.state.certifications,
      desired_location: this.state.desired_location,
      languages_spoken: this.state.languages_spoken,
      educationArry: this.state.educationArry,
      companyArry: this.state.companyArry,
      work_historyArry: this.state.work_historyArry,
      summary: this.state.summary
    }

    let ApplicantProfileImages = {
      profile_files: this.state.profile_files

    }

    let ApplicantProfilePdf = {
      resume_files: this.state.resume_files
    }

    console.log("handleSubmit - Applicant Profile Data: ", applicantProfileData, ApplicantProfileImages, ApplicantProfilePdf)


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
    console.log("Line 105 - ApplicantProfileImages", ApplicantProfileImages)
    console.log("Line 105 - ApplicantProfilePdf", ApplicantProfilePdf)

    if(applicantProfileData.work_historyArry.length == 0 || applicantProfileData.educationArry.length == 0){
      console.log("no history provided")
      alert("Either no Education History or Work History Information Providded, Please add additional information")
    } else {
      console.log("YESSSSSSSSSSSSSS")
      postOneApplicant(applicantProfileData , ApplicantProfileImages, ApplicantProfilePdf);
    }

    // window.location.assign('/Applicant_skill_form')


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
      educationArry: schoolData,
      education_level: '',
      school_name: '',
      year: ''
    });

  }

  handleDeleteSchool(e){
    e.preventDefault();
    console.log("delete school icon clicked")
    let schoolId = e.target.value

    let newSchoolData = schoolData

    console.log("schoolId selected for splice", schoolId)

    console.log("schoolData before splice", newSchoolData)

    newSchoolData.splice(schoolId, 1)
    console.log("schoolData", schoolData)

    this.setState({
      educationArry: newSchoolData
    })
    console.log("schoolData after splice", newSchoolData)

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
      work_historyArry: companyData,
      company_name: '',
      job_title: '',
      start_from: '',
      to: ''
    });

    // console.log("work_historyArry", work_historyArry)
  }

  handleDeleteWork(e){
    e.preventDefault();
    console.log("delete work icon clicked")
    let workId = e.target.value

    let newWorkData = companyData

    console.log("workId selected for splice", workId)

    console.log("workData before splice", newWorkData)

    newWorkData.splice(workId, 1)
    console.log("workData", companyData)

    this.setState({
      work_historyArry: newWorkData
    })
    console.log("newWorkData after splice", newWorkData)

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

  onSummaryChange(summary){
    this.setState({summary})
  }



  onDrop(acceptedFiles){
    // console.log("acceptedFiles", acceptedFiles)

    this.setState({
      profile_files: acceptedFiles,
      profile_image:acceptedFiles[0].id
    });

    //x console.log("onDrop this.state.profile_files", this.state.profile_files)
    $('#eventDropZone').hide()
  }

  onResumeDrop(acceptedResumeFiles){
    console.log("acceptedResumeFiles -->", acceptedResumeFiles)
    this.setState({
      resume_files: acceptedResumeFiles,
      resume_image: acceptedResumeFiles[0].id
    });

    console.log("resume_files", this.state.resume_files)
    console.log("resume_image", this.state.resume_image)

    $('#eventDropZone').hide()

  }


  openDropzone(){
    e.preventDefault();
    console.log("openDropzone")
    this.dropzone.open();
  }



  render(){
    // spinner starts
    let spinner
    if (this.state.isLoading == false) {
      console.log("this.state.isLoading", this.state.isLoading)
      spinner = <div className="ui segment">
                  <div id="spinner" className="ui active dimmer">
                    <div className="ui massive text loader"> Loading ...</div>
                  </div>
                </div>

    } else if (this.state.isLoading == true) {
      console.log("this.state.isLoading", this.state.isLoading)
      spinner = <div></div>
    }
    // spinner starts

    let schoolData = this.state.educationArry
    // console.log("line 424 schoolData", schoolData)
    let school;
    if (this.state.educationArry == "" || this.state.educationArry == null){
      school = <div>No Education Added - <span id="red_text">Please provide at least one Education History</span></div>
    } else {
      school = schoolData.map((el)=>{
        console.log("index of", schoolData.indexOf(el))
        return <div id={"school"+schoolData.indexOf(el)} key={el}>{el[0]} - {el[1]} <button value={schoolData.indexOf(el)} className="circular ui icon button" onClick={this.handleDeleteSchool.bind(this)}> - </button></div>
      })
    }

    let workData = this.state.work_historyArry
    let work;
    if (this.state.work_historyArry == "" || this.state.work_historyArry == null){
      work = <div>No Work Experience Added - <span id="red_text">Please provide at least one Work History</span></div>
    } else {
      work = workData.map((el)=>{
        return <div id={"school"+workData.indexOf(el)} key={el}>{el[0]} - {el[1]} <button value={workData.indexOf(el)} className="circular ui icon button" onClick={ this.handleDeleteWork.bind(this)}> - </button></div>
      })
    }

    let resumeUpload;
    console.log("this.state.resume_files", this.state.resume_files.length)
    if (this.state.resume_files.length == 0){
      resumeUpload = <div></div>
    } else if (this.state.resume_files.length > 0) {
      resumeUpload = <dive>{this.state.resume_files.length} files pending to upload</dive>
    }

    const { currentValue, currentValues } = this.state;

    const { isAuthenticated } = this.props.auth;

    const applicantForm = (
        <div id="applicant_profile_form">
          <br/>
          <br/>
          <h1> Tell Us About Yourself, and We'll Tell You Who's Looking to Hire You</h1>

          <form className="ui form applicant_profile_form" onSubmit={this.handleSubmit.bind(this)}>

            <div className="three fields">
              <div className="field">
                <div>
                  <Dropzone className="ui segment" onDrop={this.onDrop.bind(this)} id="eventDropZone">
                    <img className="ui circular center image" src="images/img_placeholders/user_img.png" alt="Profile Picture"/>
                    <div className="ui fluid button" >Upload Image</div>
                  </Dropzone>
                  {this.state.profile_files.length > 0 ? <div>{this.state.profile_files.map((file) => <img className="ui small circular image" key ={file.lastModified} src={file.preview} /> )}</div> : null}
                </div>
              </div>
              <div className="field"></div>
              <div className="field"></div>
            </div>

            <div className="ui divider"></div>

            <div className="field">
              <div className="label">Short Summary</div>
              <textarea name="summary" value={this.state.summary} placeholder="This is your personal Bio. It will serve as a brief cover letter to distinguish you from other applicants. Let employers know what makes you unique." onChange={e => this.onSummaryChange(e.target.value)}></textarea>
            </div>

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
                    <option value="New York">Greater New York City</option>
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
                    <option value="Insurance">Insurance</option>
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
                      <select name="year" id="" className="ui fluid dropdown" value={this.state.year} onChange={e => this.onSchoolYearChange(e.target.value)}>
                        <option value="">Please Select</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                        <option value="1969">1969</option>
                        <option value="1968">1968</option>
                        <option value="1967">1967</option>
                        <option value="1966">1966</option>
                        <option value="1965">1965</option>
                        <option value="1964">1964</option>
                        <option value="1963">1963</option>
                        <option value="1962">1962</option>
                        <option value="1961">1961</option>
                        <option value="1960">1960</option>
                      </select>
                    </div>
                  </div>
                  <div id="add_additional">
                    <p id="add_School" onClick={ this.handleAddEducation.bind(this)}><i className="icon plus"></i>Add</p>
                  </div>
                  <br/>
                  {school}

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
                      <input name="job_title" value={this.state.job_title} type="text" placeholder="title"onChange={e => this.onJobTitleChange(e.target.value)}/>
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
                  <div id="add_additional">
                    <p id="add_work" onClick={ this.handleAddJobExperience.bind(this)}><i className="icon plus"></i>Add</p>
                  </div>
                  <br/>
                  {work}

                </div>
                <br/>

                <div>
                  <Dropzone className="ui segment" type="file" accept="application/pdf" onDrop={this.onResumeDrop.bind(this)} id="eventDropZoneResume">
                    <p>Please upload only pdf formated resume</p>
                    <div className="ui fluid button" >Upload Resume</div>
                    <br/>
                    {resumeUpload}
                  </Dropzone>
                </div>

              </div>

            </div>

            <br/>
            <br/>

            <div>*By activating your profile, you agree to the Apex Terms and Conditions</div>
            <br/>
            <button className="ui button large" type="submit">Add Skills & Experience!</button>

          </form>


        </div>
      )

      const error = (
        <div id="error_page" className="field">
          <br/><br/><br/><br/><br/>
          <h2>Please sign in before creating your profile</h2>
          <br/>
          <div className="ui two column centered grid">
            <a className="ui button large" href="/">Click here to go back</a>
          </div>
        </div>
      )
      return (
            <div>
            {/* Spinner Starts */}
              {spinner}
            {/* Spinner Ends */}

              { isAuthenticated && this.props.auth.user.type =='applicant' ? applicantForm : error }
            </div>
        )}
}

function postOneApplicant(applicantProfileData, ApplicantProfileImages, ApplicantProfilePdf){

  console.log('postOneApplicant Function data: ', applicantProfileData)

  $.post('https://apex-database.herokuapp.com/api/applicants/new', applicantProfileData)
    .done((data) => {
      console.log('Applicant Profile Data Posted to postOneApplicant - returned data: ', data)

      window.setTimeout(PostImage, 2000)

      window.setTimeout(PostPdf, 3000)

      PostImage( data.id, ApplicantProfileImages  );

      PostPdf( data.id, ApplicantProfilePdf )

      alert("Applicant Profile Created, Please press OK to continue")

      window.location.assign('/Applicant_skill_form')

    })
    .error((error) => {

      // window.location.assign('/Applicant_skill_form')
      alert("Applicant Profile Update Failed ...")
      // console.error('Applicant Profile Data Failed to Post to postOneApplicant - returned data: ', error);
    })

}

function PostPdf(id, pdfObj){
  console.log('PostPDFfired')
  $.post('https://apex-database.herokuapp.com/api/applicants/'+ id, {processData: false}, pdfObj)

  let req = request.post('https://apex-database.herokuapp.com/api/applicants/upload_pdf');
  pdfObj.resume_files.forEach((file) => {
    // console.log(req)
    console.log("hello from inside upload pdf forEach()", file)
    req.attach(file.name, file);
    req.field('id', id)
    req.end(function(err, res){
      if (err || !res.ok) {
        // console.log('Oh no! error')
      } else {
        // console.log('yay got ' + JSON.stringify(res.body))
      }
    })
  })
}

function PostImage(id, imgObj){
  console.log('PostImagefired')
  $.post('https://apex-database.herokuapp.com/api/applicants/'+ id, {processData: false}, imgObj)

  let req = request.post('https://apex-database.herokuapp.com/api/applicants/upload_image');
  imgObj.profile_files.forEach((file) => {
    // console.log(req)
    console.log("hello from inside upload_image forEach()", file)
    req.attach(file.name, file);
    req.field('id', id)
    req.end(function(err, res){
      if (err || !res.ok) {
        // console.log('Oh no! error')
      } else {
        // console.log('yay got ' + JSON.stringify(res.body))
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
