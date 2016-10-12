import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import $ from 'jquery'; // requires jQuery for AJAX request


class Job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job_data: [],
      job_id: this.props.params
    }

  }

  componentDidMount() {
    console.log("hello from componentDidMount")
    // get employer job data
    $.get(`/api/jobs/job_details/${this.props.params.id}`).done( (data)=>{
      this.state.job_data = data
      console.log("job details", data)
       this.setState({
         job_data: this.state.job_data

       })

     })

  }

  render(){
    const jobData = this.state.job_data
    console.log("loggin jobData in render", jobData)
    return(
      <div id="job_details">
        <h1>Detail Job View</h1>
        <div className="ui piled segment jobdetails">
          <h4 className="ui header">
            {jobData[0].id} - {jobData[0].title}
          </h4>
          <p>{jobData[0].location}</p>
          <p>{jobData[0].industry}</p>
          <p>{jobData[0].description}</p>
          <p>{jobData[0].type}</p>
          <p>{jobData[0].experience_level}</p>
          <p>{jobData[0].education_level}</p>
          <p>{jobData[0].salary}</p>
          <p>{jobData[0].starting_date}</p>
          <p>{jobData[0].status}</p>
        </div>
      </div>

    )
  }

}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Job);
