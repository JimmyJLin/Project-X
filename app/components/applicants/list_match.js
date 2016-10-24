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
    $.get('http://localhost:8080/api/jobs/').done( (data)=>{
      this.state.jobs = data
      console.log("jobs Data:", data)
      console.log("this.state.jobs", this.state.jobs)

      this.setState({
        jobs: this.state.jobs
      })

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
