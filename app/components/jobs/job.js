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
      job_status: ''
    }

  }

  componentDidMount() {
    console.log("hello from componentDidMount")
    // get employer job data
    let job_id = this.props.params.id
    $.get(`/api/jobs/job_details/${job_id}`).done( (data)=>{
      this.state.job_data = data
      // console.log("this.props.params", this.props.params.id)
      // console.log("job details", data)
      this.state.job_status = data[0].status
      console.log("data[0].status", data[0].status)
      console.log("this.state.job_status", this.state.job_status)
      // if (data[0].status == "archived"){
      //   console.log("Line 31 - console log job status is equal to ", data[0].status)
      //
        this.setState({
          job_status: data[0].status
        })
      //   console.log("Line 36", this.state.job_status)
      // } else {
      //   this.setState({
      //     job_status: 'active'
      //   })
      // }

      //  this.setState({
      //    job_data: this.state.job_data
       //
      //  })

     })



  }


  handleJobStatusChange(e) {
    e.preventDefault();

    console.log("Archive Button Clicked, captured id is: ", this.props.params.id)

    let job_id = this.props.params.id

    $.post(`/api/jobs/job_details/${job_id}`)
    .done((data) => {
        console.log('success updating job status', data)
        window.location.replace('/employer_profile'); // redirects to profile
      })
      .error((error) => {
        console.error('Posting JobStatus failed', error);

      })

  }

  handleJobRepostChange(e) {
    e.preventDefault();

    console.log("Re-Post Button Clicked, captured id is: ", this.props.params.id)

    let job_id = this.props.params.id

    $.post(`/api/jobs/job_update/${job_id}`)
    .done((data) => {
        console.log('success updating job status', data)
        window.location.replace('/employer_profile'); // redirects to profile
      })
      .error((error) => {
        console.error('Posting JobStatus failed', error);

      })

  }

  render(){

    const jobData = this.state.job_data.map(function(job){
      let salary;
      if (job.salary = ""){
        salary = job.salary
      } else {
        salary = "N/A"
      }

      return <div key={job.id} className="ui segment jobdetails">
                <h2 className="ui header">
                  {job.title}
                </h2>
                <div className="ui grid">
                  <div className="four wide column">
                    <i className="icon marker"></i>
                    <p id="field_title">{job.location}</p>
                  </div>
                  <div className="four wide column">
                    <i className="icon building"></i>
                    <p id="field_title">{job.industry}</p>
                  </div>
                </div>
                <br/>
                <div>
                  <p>{job.description}</p>
                </div>
                <br/>
                <div className="four wide column">
                  <p id="field_title">Industry: </p>
                  <p>{job.type}</p>
                </div>
                <br/>
                <div>
                  <p id="field_title">The successful candidate:</p>
                  <ul>
                    <li>{job.experience_level}</li>
                    <li>{job.education_level}</li>
                  </ul>
                </div>
                <br/>
                <div className="four wide column">
                  <p id="field_title">Starting Date: </p>
                  <p>{job.starting_date}</p>
                </div>
                <br/>
                <div className="four wide column">
                  <p id="field_title">Salary: </p>
                  <p>{salary}</p>
                  <p>{job.salary}</p>
                </div>
                <br/>
                <br/>
                {jobStatus}
              </div>
    })



    let jobStatus;
    if (this.state.job_status == "active"){
      console.log("job status: Active")
      jobStatus = <div className="ui grid">
                      <div className="four wide column"></div>
                      <div className="twelve wide column">
                          <div className="ui grid">
                            <div className="four wide column">
                              <buton className="ui blue button">Update</buton>
                            </div>
                            <div className="four wide column">
                              <buton onClick={ this.handleJobStatusChange.bind(this)} className="ui red button">Archive</buton>
                            </div>
                          </div>
                      </div>
                      <div className=" four widecolumn"></div>
                  </div>
    } else {
      jobStatus = <div className="ui grid">
                      <div className="four wide column"></div>
                      <div className="twelve wide column">
                          <div className="ui grid">
                            <div className="four wide column">
                              <buton className="ui blue button">Update</buton>
                            </div>
                            <div className="four wide column">
                              <buton onClick={ this.handleJobRepostChange.bind(this)} className="ui red button">RePost</buton>
                            </div>
                          </div>
                      </div>
                      <div className=" four widecolumn"></div>
                  </div>
    }


    return(
      <div id="job_details">
        <h1>Detail Job View</h1>
        <div className="ui grid">
          <div className="twelve wide column">
            {jobData}
            {jobStatus}


          </div>
          <div className="four wide column">
            <div className="ui segment match">
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
