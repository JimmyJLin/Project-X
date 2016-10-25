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
      job_status: '',
      job_applicants: '',
      applicants_applied: '',
      applicants_applied_id: ''
    }

  }

  componentDidMount() {
    console.log("hello from componentDidMount")
    let job_id = this.props.params.id

    // job details
    $.get(`https://apex-database.herokuapp.com/api/jobs/${job_id}`).done( (data)=>{
      this.state.job_data = data
      this.state.job_status = data[0].status
      this.setState({
        job_status: data[0].status
      })

    })

    // get # of Matched Applicants
    $.get('https://apex-database.herokuapp.com/api/jobs/').done( (data)=>{
      this.state.job_applicants = data
      this.setState({
        job_applicants: this.state.job_applicants
      })

    })

    // get # of Applied Applicants for current job
    $.get(`https://apex-database.herokuapp.com/api/jobs/application/${job_id}`)
      .done((data)=>{
        console.log("Job Applicant Data", data)
        this.state.applicants_applied = data
        this.state.applicants_applied_id = data[0].job_id
        this.setState({
          applicants_applied: this.state.applicants_applied,
          applicants_applied_id: this.state.applicants_applied_id
        })
        console.log("this.state.applicants_applied", this.state.applicants_applied)
      })


  }


  handleJobStatusChangeToArchive(e) {
    e.preventDefault();

    // console.log("Archive Button Clicked, captured id is: ", this.props.params.id)

    let job_id = this.props.params.id

    $.post(`https://apex-database.herokuapp.com/api/jobs/archived/update/${job_id}`)
    .done((data) => {
        console.log('success updating job status', data)
        window.location.replace('/employer_profile'); // redirects to profile
      })
      .error((error) => {
        console.error('Posting JobStatus failed', error);

      })

  }

  handleJobStatusChangeToActive(e) {
    e.preventDefault();

    // console.log("Re-Post Button Clicked, captured id is: ", this.props.params.id)

    let job_id = this.props.params.id

    $.post(`https://apex-database.herokuapp.com/api/jobs/active/update/${job_id}`)
    .done((data) => {
        console.log('success updating job status', data)
        window.location.replace('/employer_profile'); // redirects to profile
      })
      .error((error) => {
        console.error('Posting JobStatus failed', error);

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

  handleConnectChange(e){
    e.preventDefault();
    // console.log("Connect button clicked")
    // console.log("employer_id is: ", this.state.job_data[0].employer_id)
    // console.log("applicant_id is: ", localStorage.id)

  }

  render(){

    const jobData = this.state.job_data.map(function(job){
      let salary;
      if (job.salary = ""){
        salary = job.salary
      } else {
        salary = "N/A"
      }

      return <div key={job.id} className="ui raised padded segment">
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
                <div id="job_description">
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
              </div>
    })



    let jobStatus;
    const status = this.state.job_status
    // console.log("line 149 job status:", status)
    // console.log('localStorage.type', localStorage.type)
    if (this.state.job_status == 'active' && localStorage.type == "employer"){
      // console.log("line 151 job status:", this.state.job_status)
      jobStatus = <div className="ui grid">
                      <div className="four wide column"></div>
                      <div className="twelve wide column">
                          <div className="ui grid">
                            <div className="four wide column">
                              <buton className="ui blue button">Update</buton>
                            </div>
                            <div className="four wide column">
                              <buton onClick={ this.handleJobStatusChangeToArchive.bind(this)} className="ui red button">Archive</buton>
                            </div>
                          </div>
                      </div>
                      <div className=" four widecolumn"></div>
                  </div>
    } else if (this.state.job_status == 'archived' && localStorage.type == "employer") {
      jobStatus = <div className="ui grid">
                      <div className="four wide column"></div>
                      <div className="twelve wide column">
                          <div className="ui grid">
                            <div className="four wide column">
                              <buton className="ui blue button">Update</buton>
                            </div>
                            <div className="four wide column">
                              <buton onClick={ this.handleJobStatusChangeToActive.bind(this)} className="ui red button">RePost</buton>
                            </div>
                          </div>
                      </div>
                      <div className=" four widecolumn"></div>
                  </div>
    } else {

    }

    let applicantView;
    let jobApplicant_id = this.state.applicants_applied_id
    console.log("jobApplicant_id", jobApplicant_id)
    if (this.state.job_status == 'active' && localStorage.type == "employer"){
      applicantView = <div className="ui segment match">
                        <h3>Applicants: </h3>
                        <div className="ui middle aligned divided list">
                          <div className="item">
                            <div className="right floated content">
                              <Link to={"/list_matched_applicants/"}>{this.state.job_applicants.length}</Link>
                            </div>
                            <div className="content">Matched</div>
                          </div>
                          <div className="item">
                            <div className="right floated content">
                              <Link to={"/list_applicants_applied/" + jobApplicant_id}>{this.state.applicants_applied.length}</Link>
                            </div>
                            <div className="content">Applied</div>
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


    } else if (this.state.job_status == 'archived' && localStorage.type) {

    } else if (localStorage.type == 'applicant'){
      applicantView = <div className="ui segment">
                        <div className="ui grid">
                          <div id="applicants_buttons">
                            <label>Connect with the employer </label>
                            <buton className="ui blue button" onClick={this.handleConnectChange.bind(this)}><i className="icon talk"></i>Connect</buton>
                          </div>
                          <div id="applicants_buttons">
                            <p>Apply to current job posting</p>
                            <buton onClick={ this.handleApplyJobChange.bind(this)} className="ui purple button"><i className="icon send"></i>Apply</buton>
                          </div>
                        </div>
                      </div>
    }


    return(
      <div id="job_details">
        <h1>Detail Job View</h1>
        <div className="ui grid stackable">
          <div className="twelve wide column">
            {jobData}
            {jobStatus}
          </div>
          <div className="four wide column">
            {applicantView}
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
