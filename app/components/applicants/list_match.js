import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import $ from 'jquery'; // requires jQuery for AJAX request

let certificateState = [];
let jobSkillsState = [];
let jobExperienceState = [];

class List_match extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      experience_level: '',
      education_level: '',
      industry_experience: [],
      job_skills: [],
      certifications: [],
      filteredJobs: [],
      filteredStates: {
        experience: 'Mid Level',
        education: 'Associate Degree'
      }

    }
  }

  componentDidMount() {
    // get all matched jobs data
    $.get('https://apex-database.herokuapp.com/api/jobs/').done( (data)=>{
      this.state.jobs = data
      console.log("jobs Data:", data)
      console.log("this.state.jobs", this.state.jobs)

      this.setState({
        jobs: this.state.jobs
      })

    })
  }



  onFilterChange(name, val){
    console.log('name', 'val', name,val )
    this.setState({ [name]: val});
    // console.log(this.state.experience_level)
    console.log("onIndustryExpLevelChange Clicked")
    // console.log("this.state.experience_level -->: ", this.state.experience_level)
    console.log("this.state.jobs", this.state.jobs)

    let jobs = this.state.jobs;

    console.log("jobs", jobs)

    let experience_level_state = this.state.experience_level;
    let education_level_state = this.state.education_level_state;

    var filteredArr = [];

    switch(name) {
      case 'experience_level':
          filteredArr = jobs.filter(function(obj){
            return obj.experience_level === val;
          })
          console.log('70', filteredArr)
          break;
      case 'education_level' :
          filteredArr = filteredArr.filter(function(obj){
            return obj.education_level === val;
          })
          console.log('76', filteredArr)

          break;
     default:
       console.log(filteredArr)
     }



    console.log(filteredArr)

      // // console.log("-------", el.length)
      //
      // // console.log("********", el.experience_level.length)
      // if(el.experience_level == "Mid Level") {
      //   console.log("YESSSSSSS")
      //     console.log("returned el -->: ", el)
      // } else {
      //   console.log("NOOOOOOO")
      // }
      // // if (el.experience_level == "Mid-Level") {
      // //   console.log("YESSSSSSSS")
      // // } else {
      // //   console.log("NOOOOOOOOO")
      // // }

  }



  onIndustryExperienceChange(industry_experience){
    jobExperienceState.push(industry_experience)
    this.setState({industry_experience: jobExperienceState})
    console.log("onIndustryExperienceChange Clicked")

  }

  onJobSkillsChange(job_skills){
    jobSkillsState.push(job_skills)
    this.setState({job_skills: jobSkillsState})
    console.log("onJobSkillsChange Clicked")

  }

  onCertificationChange(certifications){
    certificateState.push(certifications)
    this.setState({certifications: certificateState})
    console.log("onCertificationChange Clicked")

  }

  render(){
    let change = function(e){
      e.preventDefault();
      console.log(e.target.value)

      let applicant_id = localStorage.id
      let current_job_id = e.target.value

      let applicationData = {
        applicant_id: applicant_id,
        job_id: current_job_id,
        status: 'applied'
      }

      console.log("applicationData", applicationData)
      console.log("e-target className", e.target.className)

      $.post('https://apex-database.herokuapp.com/api/jobs/application', applicationData)
        .done((data) => {
          console.log('succesfully applied for a job')

        })
        .error((error) => {
          console.log('unable to apply for a job', error)
        })

       var buttonChange = document.getElementById(`job${current_job_id}`)

       buttonChange.className += " disabled"
       buttonChange.innerText = "Applied"


    }

    let job_lists = this.state.jobs
    let jobs = job_lists.map(function(job){
    let url = '/'+ job.company_logo
    console.log("image url ", url)
    let link = `/list_matched/job/` + job.id
    return <Link to={link} key={job.id} className="card">
            <div className="content">
              <div className="header">{job.title} {job.location} </div>
              <div id="jobid" className="meta" >{job.id}</div>
              <div className="decription">
                <span id="labels">Job Type:</span> {job.type}
                <br/>
                <span id="labels">Experience:</span> {job.experience_level}
                <br/>
                <span id="labels" >Job Description:</span> <p className="truncate">{job.description}</p>
                <div id="applicants_buttons">
                </div>
              </div>
              <button id={"job"+job.id} value={job.id} className="ui purple button" onClick={change}><i className="icon send"></i>Quick Apply</button>
            </div>
          </Link>

    })

    // console.log("jobs from state", jobs)

    return(
      <div id="list_jobs">
        <h1>Current Matched Job Lists</h1>

        <div className="ui stackable grid">
          <div className="four wide column">
            <div className="ui center aligned basic segment">
              <h2>Filter By:</h2>
              <div className="field">

                {/* Years of Experience */}
                <div>
                  <label name="experience_level">Industry Work Experience (Full Employment)</label>
                  <select name="experience_level" id="" className="ui fluid dropdown" value={this.state.experience_level}
                  onChange={e => this.onFilterChange(e.target.name, e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="Entry Level"> 0-2 Years (Entry Level)</option>
                    <option value="Mid Level">2-5 Years (Mid-Level)</option>
                    <option value="High Level">5+ Years (High-Level)</option>
                  </select>
                </div>

                {/* Education */}
                <div>
                  <label name="education_level">Education Level</label>
                  <select name="education_level" id="" className="ui fluid dropdown" value={this.state.education_level}
                  onChange={e => this.onFilterChange(e.target.name, e.target.value)}>
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
                </div>

                {/* Industry Experience */}
                <div>
                  <label name="certifications">Industry Experience</label>
                  <select name="industry_experience" className="ui fluid normal dropdown"
                  value={this.state.industry_experience}
                  onChange={e => this.onIndustryExperienceChange(e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="Finance">Finance</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Health">Health</option>
                  </select>
                </div>

                {/* Skills */}
                <div>
                  <label name="certifications">Job Skills</label>
                  <select multiple="true" name="job_skills" className="ui fluid normal dropdown"
                  value={this.state.job_skills}
                  onChange={e => this.onJobSkillsChange(e.target.value)}>
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

                {/* Certifications */}
                <div>
                  <label name="certifications">Relevant certifications</label>
                  <select multiple="true" name="certifications" className="ui fluid normal dropdown"
                  value={this.state.certifications}
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
            </div>
          </div>
          <div id="profile_title" className="twelve wide column">
            <div className="ui fluid cards">
                {jobs}
            </div>
          </div>
        </div>
      </div>

    )
  }

}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(List_match);
