import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import $ from 'jquery'; // requires jQuery for AJAX request

class List_match extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: []
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

  // handleQuickApplyChange(e){
  //   e.preventDefault();
  //   var element = document.getElementById('jobid');
  //   var current_job_id = element.innerHTML;
  //   console.log('current_job_id', current_job_id)
  //   console.log(e)
  //   // let id = e.target.id;
  //   //
  //   let applicant_id = localStorage.id
  //
  //   let applicationData = {
  //     applicant_id: applicant_id,
  //     job_id: current_job_id,
  //     status: 'applied'
  //   }
  //   console.log("Apply Button Pressed")
  //   $.post('https://apex-database.herokuapp.com/api/jobs/application', applicationData)
  //     .done((data) => {
  //       console.log('succesfully applied for a job')
  //       var element = document.getElementById('');
  //
  //     })
  //     .error((error) => {
  //       console.log('unable to apply for a job', error)
  //     })
  //
  // }
  //
  // handleConsoleLog(e){
  //   e.preventDefault();
  //   console.log("helooooooo")
  //
  //
  // }

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
              <button id={job.id} className="ui disabled purple button hide" ><i className="icon send"></i>Applied</button>
            </div>
          </Link>

    })

    console.log("jobs from state", jobs)

    return(
      <div id="list_jobs">
        <h1>Current Matched Job Lists</h1>
        <div className="ui fluid cards">
            {jobs}


        </div>
      </div>

    )
  }

}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(List_match);
