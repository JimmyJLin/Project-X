import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import $ from 'jquery'; // requires jQuery for AJAX request

let certificateState = [];
let jobSkillsState = [];
let jobExperienceState = [];

class List_matched_applicants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job_applicants: [],
      experience_level: '',
      education_level: '',
      industry_experience: [],
      job_skills: [],
      certifications: [],

    }
  }

  componentDidMount() {
    console.log("hello from list_matched_applicants componentDidMount")
    let applicant_id = this.props.params.id
    let url = "https://apex-database.herokuapp.com/api/applicants/"
    // get all matched Applicants data
    $.get(url).done( (data)=>{
      this.state.job_applicants = data
      console.log("Applicant Data:", data)
      console.log("this.state.job_applicants", this.state.job_applicants)

      this.setState({
        job_applicants: this.state.job_applicants
      })

    })
  }

  onIndustryExpLevelChange(experience_level){
    this.setState({experience_level});
  }

  onEducationLevelChange(education_level){
    this.setState({education_level});
  }

  onIndustryExperienceChange(industry_experience){
    jobExperienceState.push(industry_experience)
    this.setState({certifications: jobExperienceState})
  }

  onJobSkillsChange(job_skills){
    jobSkillsState.push(job_skills)
    this.setState({certifications: jobSkillsState})
  }

  onCertificationChange(certifications){
    certificateState.push(certifications)
    this.setState({certifications: certificateState})
  }

  render(){
    const job_applicants = this.state.job_applicants
    const applicants = job_applicants.map(function(applicant){
      const url = 'https://apex-database.herokuapp.com/api/applicants/profile/'+ applicant.profile_image
      console.log("image url ", url)
      const link = `/Matched_applicant/` + applicant.user_id
      return <Link to={link} className="card" key={applicant.user_id} >
              <div className="content">
                <img className="left floated small ui image" src={url} alt="profile pic"/>
                <div className="header">
                  {applicant.first_name} {applicant.last_name}
                </div>
                <div className="meta">{applicant.id}</div>
                <div className="decription">
                  {applicant.education_level}
                  <br/>
                  {applicant.school}
                  <br/>
                  {applicant.desired_industry}
                  <br/>
                  {applicant.experience_level}
                </div>
              </div>
            </Link>

    })

    console.log("job_applicants from state", job_applicants)

    return(
      <div id="list_jobs">
        <h1>Current Matched Applicant Lists</h1>

        <div className="ui stackable grid">
          <div className="four wide column">
            <div className="ui center aligned basic segment">
              <h2>Filter By:</h2>
              <div className="field">

                {/* Years of Experience */}
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

                {/* Education */}
                <div>
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
                </div>

                {/* Industry Experience */}
                <div>
                  <label name="certifications">Industry Experience</label>
                  <select multiple="true" name="industry_experience" className="ui fluid normal dropdown"
                  value={this.state.industry_experience}
                  onChange={e => this.onIndustryExperienceChange(e.target.value)}>
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
            <div className="ui cards">
              {applicants}
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

export default connect(mapStateToProps)(List_matched_applicants);
