import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import $ from 'jquery'; // requires jQuery for AJAX request

let certificateState = [];
let jobSkillsState = [];
let jobExperienceState = [];
var final= [];

class List_matched_applicants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job_applicants: [],
      experience_level: '',
      education_level: '',
      industry: '',
      job_skills: [],
      job_skillsArr: [],
      job_experiences: [],
      job_experiencesArr:[],
      sortedList : [],
      filteredJobs: {}

    }
  }

  componentDidMount() {

    if(localStorage.getItem('isLoaded') !== 'yes'){
      localStorage.setItem('isLoaded', 'yes');
      window.location.reload(true)

    }

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


  onFilterChange(name, val){
    console.log('name', 'val', name,val )
    this.setState({ [name]: val});
    // console.log(this.state.experience_level)
    console.log("onFilterChange Clicked", name, val)
    console.log("this.state.education_level -->: ", this.state.education_level)
    //  this.updateTheList()
    this.UpdateTheFilter(name, val);
  }

   UpdateTheFilter(name, val){
      var filteredArr  = this.state.job_applicants.filter( (obj) =>{
                     return obj[name] == val })
                     console.log('this is my filtered Array', filteredArr)
     this.state.filteredJobs[name] = filteredArr

  }

  updateTheFinalList(){
    var ffinal = [];
    var jobsState = this.state.job_applicants;
    console.log("jobsState --->", jobsState)

    var finalList = this.state.filteredJobs;
    console.log("finalList --->", finalList)

    var valuessofFilteredJobs = Object.values(finalList);
    console.log("valuessofFilteredJobs --->", valuessofFilteredJobs)

    var selectedIds= []; //=> [[],[]]

    for (var i = 0; i <valuessofFilteredJobs.length; i++ ){
      var arr = [];
      valuessofFilteredJobs[i].map((el)=>{ arr.push(el.id) })
      selectedIds.push(arr)
    }
    console.log('+++++++++', selectedIds.map( (el)=>{
      return el
    }))


    var intersectionIds;
    switch ( selectedIds.length) {
    case 1:
      intersectionIds = _.intersection( jobsState.map((el)=>{ return el.id}), selectedIds[0] ); break;
    case 2:
    intersectionIds = _.intersection( jobsState.map((el)=>{ return el.id}), selectedIds[0], selectedIds[1] ); break;
    case 3:
    intersectionIds = _.intersection( jobsState.map((el)=>{ return el.id}), selectedIds[0], selectedIds[1], selectedIds[2] ); break;
    case 4:
    intersectionIds = _.intersection( jobsState.map((el)=>{ return el.id}), selectedIds[0], selectedIds[1], selectedIds[2], selectedIds[3] ); break;
    case 5:
    intersectionIds = _.intersection( jobsState.map((el)=>{ return el.id}),selectedIds[0], selectedIds[1], selectedIds[2], selectedIds[3],  selectedIds[4] ); break;
    case 6:
    intersectionIds = _.intersection( jobsState.map((el)=>{ return el.id}), selectedIds[0], selectedIds[1], selectedIds[2], selectedIds[3],  selectedIds[4]  ); break;
    default:
    break ;
    }


    console.log('intersectionIds', intersectionIds)

      for ( var i in intersectionIds ){
          jobsState.forEach( (obj)=>{
            if ( obj.id == intersectionIds[i] ) {
                ffinal.push(obj) }
              })
                console.log(final)
          }
          final = ffinal;
    console.log(final)
    // var intersectionIds = _.intersection( jobsState.map((el)=>{ return el.id}), keysofFilteredJobs.forEach((arr)=> { arr.map((el)=>{ return el.id})}))
    //
    // console.log('this state filteredJobs', finalList,keysofFilteredJobs, intersectionIds ,areIDs)

  }



  componentWillUpdate(){
    this.updateTheFinalList()
  }


  onIndustryExperienceChange(industry_experience){
    jobExperienceState.push(industry_experience)
    this.setState({industry_experience: jobExperienceState})
    // console.log("onIndustryExperienceChange Clicked")

  }

  onJobSkillsChange(job_skills){
    jobSkillsState.push(job_skills)
    this.setState({job_skills: jobSkillsState})
    // console.log("onJobSkillsChange Clicked", this.state.job_skills)

  }

  onExperienceChange(job_experiences){
    jobExperienceState.push(job_experiences)
    this.setState({job_experiences: jobExperienceState})
    // console.log("onExperienceChange Clicked", this.state.job_experiences)
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

      // $.post('https://apex-database.herokuapp.com/api/jobs/application', applicationData)
      //   .done((data) => {
      //     console.log('succesfully applied for a job')
      //
      //   })
      //   .error((error) => {
      //     console.log('unable to apply for a job', error)
      //   })

       var buttonChange = document.getElementById(`job${current_job_id}`)

       buttonChange.className += " disabled"
       buttonChange.innerText = "Emailed"


    }

    var jobArray;
      if (final.length == 0 ){
        jobArray = this.state.job_applicants
        console.log("YESSSSSS -----", jobArray)
      } else {
        jobArray = final
        console.log("NOOOOOOO ----", jobArray)
      }

    const job_applicants = this.state.job_applicants
    const applicants = jobArray.map(function(applicant){
      const url = 'https://apex-database.herokuapp.com/images/applicant_profile_img/' + applicant.profile_image
      console.log("image url  .... ", url)
      const link = `/Matched_applicant/` + applicant.user_id
      return <Link to={link} className="card" key={applicant.user_id} >
              <div className="content">
                <img className="left floated tiny ui middle aligned image" src={url} alt="profile pic"/>
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
                <br/>
                <button href="mailto:emailaddress@gmail.com?Subject=Hello%20again" target="_top" id={"job"+applicant.user_id} value={applicant.user_id} className="ui blue button small solid" onClick={change}><i className="icon mail"></i>Contact</button>

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
                  <label name="experience_level">Work Experience (Full Employment)</label>
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
                  <label name="certifications">Industry</label>
                  <select name="desired_industry" className="ui fluid normal dropdown"
                  value={this.state.industry}
                  onChange={e => this.onFilterChange(e.target.name, e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="Finance">Finance</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Health">Health</option>
                  </select>
                </div>

                {/* Skills */}
                <div>
                  <label name="job_skills">Skills</label>
                  <select multiple="true" name="job_skills" className="ui fluid normal dropdown"
                  value={this.state.job_skills}
                  onChange={e => this.onJobSkillsChange(e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="Wealth Management">Wealth Management</option>
                    <option value="Investment Banking">Investment Banking</option>
                    <option value="Asset Management">Asset Management</option>
                    <option value="Institutional Securities">Institutional Securities</option>
                    <option value="Commericial Banking">Commericial Banking</option>
                    <option value="Retirement Solutions">Retirement Solutions</option>
                    <option value="Portfolio Strategy">Portfolio Strategy</option>
                    <option value="Financial Audit">Financial Audit</option>
                    <option value="Tax Preparation">Tax Preparation</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Advisory Services">Advisory Services</option>
                    <option value="Compliance">Compliance</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Underwriting">Underwriting</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Financial Analysis">Financial Analysis</option>
                    <option value="Derivatives">Derivatives</option>
                    <option value="M&A Activity">M&A Activity</option>
                    <option value="Venture Capitol">Venture Capitol</option>
                    <option value="Forensice Accounting">Forensice Accounting</option>
                  </select>
                </div>

                {/* Experiences */}
                <div>
                  <label name="job_experiences">Experiences</label>
                  <select multiple="true" name="job_experiences" className="ui fluid normal dropdown"
                  value={this.state.job_experiences}
                  onChange={e => this.onExperienceChange(e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="Client Relations">Client Relations</option>
                    <option value="Microsoft Office">Microsoft Office</option>
                    <option value="Quickbooks">Quickbooks</option>
                    <option value="Bookkeeping">Bookkeeping</option>
                    <option value="Tax Software">Tax Software</option>
                    <option value="IT">IT</option>
                    <option value="Data Entry">Data Entry</option>
                    <option value="Financial Statement">Financial Statement</option>
                    <option value="Financial Planning">Financial Planning</option>
                    <option value="Debt Consolidation">Debt Consolidation</option>
                    <option value="Sales">Sales</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Account Reconciliation">Account Reconciliation</option>
                    <option value="Payroll Management">Payroll Management</option>
                    <option value="Budgeting">Budgeting</option>
                    <option value="Forecasting">Forecasting</option>
                    <option value="Corporate Reporting">Corporate Reporting</option>
                    <option value="Public Speaking">Public Speaking</option>
                    <option value="Analytical Writing">Analytical Writing</option>
                    <option value="Cost Accounting">Cost Accounting</option>
                    <option value="Federal Tax Law">Federal Tax Law</option>
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
