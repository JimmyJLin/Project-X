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
      industry: '',
      job_skills: [],
      job_skillsArr: [],
      job_experiences: [],
      job_experiencesArr:[],
      sortedList : [],
      filteredJobs: {},
      isLoading: false

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
      this.state.isLoading = true

      console.log("jobs Data:", data)
      console.log("this.state.jobs", this.state.jobs)

      this.setState({
        jobs: this.state.jobs,
        isLoading: true

      })

    })
  }



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
     console.log('line 104 filtered value ', name , val)
      var filteredArr  = this.state.jobs.filter( (obj) =>{
                     return obj[name] == val })
                     console.log('this is my filtered Array', filteredArr)
     this.state.filteredJobs[name] = filteredArr
     console.log('this.state.filteredJobs', this.state.filteredJobs)
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


  onExperienceChange(job_experiencesArr){
    jobExperienceState.push(job_experiencesArr)
    this.setState({job_experiences: jobExperienceState})
    console.log("onExperienceChange Clicked", this.state.job_experiences)
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
    // spinner ends

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
    return <Link to={link} key={job.id} className="card list">
            <div className="content">
              <div className="header">
                {job.title} {job.location}
              </div>
              <div id="jobid" className="meta" >{job.type}</div>
              <br/>
              <div className="description">
                <div>Requirements:</div>
                <div><span>Location: </span> {job.location}</div>
                <div><span>Education: </span> {job.education_level}</div>
                <div><span>Brief Description: </span> <br/> <div className="truncate">{job.description}</div></div>
                <br/>
                <br/>
              </div>
              <button id={"job"+job.id} value={job.id} className="ui button small solid" onClick={change}><i className="icon send"></i>Quick Apply</button>
            </div>
          </Link>

    })

    // console.log("jobs from state", jobs)

    return(
      <div id="list_jobs">
        {/* Spinner Starts */}
          {spinner}
        {/* Spinner Ends */}
        <h1>Current Matched Job Lists</h1>

        <div className="ui stackable grid">
          <div className="four wide column">
            <div className="ui center aligned raised segment">
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
                    <option value="Bachelor Degree">Bachelors Degree</option>
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
                  <select name="industry" className="ui fluid normal dropdown"
                  value={this.state.industry}
                  onChange={e => this.onFilterChange(e.target.name, e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="Finance">Finance</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Health">Health</option>
                    <option value="Insurance">Insurance</option>
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
