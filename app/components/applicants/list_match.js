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

  handleApplyJobChange(e){
    e.preventDefault();
    let applicant_id = localStorage.id
    let job_id = this.state.job_data[0].id

    let applicationData = {
      applicant_id: applicant_id,
      job_id: job_id,
      status: 'applied'
    }

    $.post('https://apex-database.herokuapp.com/api/jobs/application', applicationData)
      .done((data) => {
        console.log('succesfully applied for a job')
      })
      .error((error) => {
        console.log('unable to apply for a job', error)
      })

  }

  render(){
    const job_lists = this.state.jobs
    const jobs = job_lists.map(function(job){
    const url = '/'+ job.company_logo
    console.log("image url ", url)
    const link = `/list_matched/job/` + job.id
    return <Link to={link} className="card" key={job.id} >
            <div className="content">
              <div className="header">{job.title} {job.location} </div>
              <div className="meta">{job.id}</div>
              <div className="decription">
                <span id="labels">Job Type:</span> {job.type}
                <br/>
                <span id="labels">Experience:</span> {job.experience_level}
                <br/>
                <span id="labels" >Job Description:</span> <p className="truncate">{job.description}</p>
                <div id="applicants_buttons">
                <buton className="ui purple button"><i className="icon send"></i>Apply</buton>
                </div>
              </div>
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
