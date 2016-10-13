import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import $ from 'jquery'; // requires jQuery for AJAX request


class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job_data: []
    }

  }

  componentDidMount() {
    console.log("hello from componentDidMount")
    // get employer job data
    let job_id = this.props.params.id
    $.get(`/api/jobs/job_details/${job_id}`).done( (data)=>{
      this.state.job_data = data
      console.log("this.props.params", this.props.params.id)
      console.log("job details", data)
       this.setState({
         job_data: this.state.job_data

       })

     })

  }

  render(){
    const jobData = this.state.job_data.map(function(job){
      return <div key={job.id} className="ui segment jobdetails">
                <h4 className="ui header">
                  Job #: {job.id} - {job.title}
                </h4>
                <p>{job.location}</p>
                <p>{job.industry}</p>
                <p>{job.description}</p>
                <p>{job.type}</p>
                <p>{job.experience_level}</p>
                <p>{job.education_level}</p>
                <p>{job.salary}</p>
                <p>{job.starting_date}</p>
                <p>{job.status}</p>
              </div>
    })

    console.log("loggin jobData in render", jobData)
    return(
      <div id="job_details">
        <h1>Detail Job View</h1>
        <div className="ui grid">
          <div className="twelve wide column">
            {jobData}
          </div>
          <div className="four wide column">
            <div className="ui segment">
              <h3>Applicants: </h3>
              <div className="ui middle aligned divided list">
                <div className="item">
                  <div className="right floated content">
                    <a href="#">312</a>
                  </div>
                  <div className="content">Compatible matches</div>
                </div>
                <div className="item">
                  <div className="right floated content">
                    <a href="#">25</a>
                  </div>
                  <div className="content">Engaged</div>
                </div>
                <div className="item">
                  <div className="right floated content">
                    <a href="#">10</a>
                  </div>
                  <div className="content">Rejected</div>
                </div>
                <div className="item">
                  <div className="right floated content">
                    <a href="#">5</a>
                  </div>
                  <div className="content">Interviewed</div>
                </div>
                <div className="item">
                  <div className="right floated content">
                    <a href="#">0</a>
                  </div>
                  <div className="content">Hired</div>
                </div>
                <div className="item">
                  <div className="right floated content">
                    <a href="#">287</a>
                  </div>
                  <div className="content">Remaining</div>
                </div>
              </div>
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

export default connect(mapStateToProps)(Job);
