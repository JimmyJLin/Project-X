import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import $ from 'jquery'; // requires jQuery for AJAX request

let certificateState = [];
let jobSkillsState = [];
let jobExperienceState = [];

var final= [];


class List_match extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      experience_level: '',
      education_level: '',
      industry_experience: [],
      job_skills: [],
      job_experiences: [],
      certifications: [],
      sortedList : [],
      filteredJobs: {}
    }
  }

  componentDidMount() {

    if(localStorage.getItem('isLoaded') !== 'yes'){
      localStorage.setItem('isLoaded', 'yes');
      window.location.reload(true)

    }

    // get all matched jobs data
    $.get('https://apex-database.herokuapp.com/api/jobs/active').done( (data)=>{
      this.state.jobs = data
      console.log("jobs Data:", data)
      console.log("this.state.jobs", this.state.jobs)

      this.setState({
        jobs: this.state.jobs
      })

    })
  }


//   updateTheList(){
//     var jobsState = this.state.jobs;
//     var intersectionIds =[] ;
//     var final = [] ;
//     var exp =  this.state.experience_level;
//     var edu =  this.state.education_level;
//     var newarrExp = jobsState.filter( (obj) =>{
//               return obj.experience_level == exp }) ;
//     var newarrEdu = jobsState.filter( (obj) =>{
//               return obj.education_level == edu }) ;
//
//
//     intersectionIds = _.intersection(
//         jobsState.map((el)=>{ return el.id}),
//         newarrEdu.map((el)=>{ return el.id}),
//         newarrExp.map((el)=>{ return el.id}) )
//
//         console.log('jobs', jobsState,
//                     'newarrEdu', newarrEdu ,
//                     'newarrExp',newarrExp,
//                     'intersectionIds', intersectionIds )
//
//
//               for ( var i in intersectionIds ){
//                   jobsState.forEach( (obj)=>{
//                     if ( obj.id == intersectionIds[i] ) {
//                         final.push(obj) }
//                       })
//                         console.log(final)
//                   }
//
//                 this.setState({
//                   filteredJobs:final
//                 })
//
//                 console.log('****************', this.state.filteredJobs)
//
// }


  onFilterChange(name, val){
    console.log('name', 'val', name,val )
    this.setState({ [name]: val});
    // console.log(this.state.experience_level)
    console.log("onIndustryExpLevelChange Clicked", name, val)
    // console.log("this.state.experience_level -->: ", this.state.experience_level)
    //  this.updateTheList()
    this.UpdateTheFilter(name, val);
  }

   UpdateTheFilter(name, val){
      var filteredArr  = this.state.jobs.filter( (obj) =>{
                     return obj[name] == val })
                     console.log('this is my filtered Array', filteredArr)
     this.state.filteredJobs[name] = filteredArr

  }

  updateTheFinalList(){
    var ffinal = [];
    var jobsState = this.state.jobs;
    var finalList = this.state.filteredJobs;
    var valuessofFilteredJobs = Object.values(finalList);
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
    console.log("onIndustryExperienceChange Clicked")

  }

  onJobSkillsChange(job_skills){
    jobSkillsState.push(job_skills)
    this.setState({job_skills: jobSkillsState})
    console.log("onJobSkillsChange Clicked", this.state.job_skills)

  }

  onExperienceChange(job_experiences){
    jobExperienceState.push(job_experiences)
    this.setState({job_experiences: jobExperienceState})
    console.log("onExperienceChange Clicked", this.state.job_experiences)
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
    var jobArray;
      if (final.length == 0 ){
        jobArray = this.state.jobs
        // console.log("YESSSSSS -----", jobArray)
      } else {
        jobArray = final
        // console.log("NOOOOOOO ----", jobArray)
      }

    let job_lists = this.state.jobs
    let jobs = jobArray.map(function(job){
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
