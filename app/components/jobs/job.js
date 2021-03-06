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
      applicants_applied_id: '',
      isLoading: false
    }

  }

  componentDidMount() {
    // console.log("hello from componentDidMount")
    let job_id = this.props.params.id

    window.setInterval(changeLoaded, 500)

    function changeLoaded(){
      localStorage.setItem('isLoaded', 'no');
    }

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

    // job details
    $.get(`https://apex-database.herokuapp.com/api/jobs/${job_id}`).done( (data)=>{
      this.state.job_data = data
      this.state.job_status = data[0].status
      this.state.isLoading = true

      this.setState({
        job_status: data[0].status,
        isLoading: true
      })

    })

    // get # of Matched Applicants
    $.get('https://apex-database.herokuapp.com/api/applicants/').done( (data)=>{
      this.state.job_applicants = data
      this.setState({
        job_applicants: this.state.job_applicants
      })

    })

    // get # of Applied Applicants for current job
    $.get(`https://apex-database.herokuapp.com/api/jobs/application/${job_id}`)
      .done((data)=>{
        // console.log("Job Applicant Data", data)
        this.state.applicants_applied = data
        this.state.applicants_applied_id = data[0].job_id
        this.setState({
          applicants_applied: this.state.applicants_applied,
          applicants_applied_id: this.state.applicants_applied_id
        })
        // console.log("this.state.applicants_applied", this.state.applicants_applied)
      })


  }

  // function to change job status to archive
  handleJobStatusChangeToArchive(e) {
    e.preventDefault();

    // console.log("Archive Button Clicked, captured id is: ", this.props.params.id)

    let job_id = this.props.params.id

    $.post(`https://apex-database.herokuapp.com/api/jobs/archived/update/${job_id}`)
    .done((data) => {
        // console.log('success updating job status', data)
        browserHistory.push('/list_match');

        // window.location.replace('/employer_profile');
      })
      .error((error) => {
        // console.error('Posting JobStatus failed', error);

      })

  }

  // handleJobStatusChangeToActive(e) {
  //   e.preventDefault();
  //
  //   // console.log("Re-Post Button Clicked, captured id is: ", this.props.params.id)
  //
  //   let job_id = this.props.params.id
  //
  //   $.post(`https://apex-database.herokuapp.com/api/jobs/active/update/${job_id}`)
  //   .done((data) => {
  //       // console.log('success updating job status', data)
  //       browserHistory.push('/employer_profile');
  //       // window.location.replace('/employer_profile'); // redirects to profile
  //     })
  //     .error((error) => {
  //       // console.error('Posting JobStatus failed', error);
  //
  //     })
  //
  // }

  // function to handle applying for a specific job
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
        // console.log('succesfully applied for a job')
        browserHistory.push('/applicant_profile');

      })
      .error((error) => {
        // console.log('unable to apply for a job', error)
      })

      var buttonChange = document.getElementById("apply_button")

      buttonChange.className += " disabled"

  }


  render(){

    // spinner starts
    let spinner
    if (this.state.isLoading == false) {
      // console.log("this.state.isLoading", this.state.isLoading)
      spinner = <div className="ui segment">
                  <div id="spinner" className="ui active dimmer">
                    <div className="ui massive text loader"> Loading ...</div>
                  </div>
                </div>

    } else if (this.state.isLoading == true) {
      // console.log("this.state.isLoading", this.state.isLoading)
      spinner = <div></div>
    }
    // spinner ends

    // rendering each element of the job Data
    const jobData = this.state.job_data.map(function(job){

      // rendering message if salary data exists
      let salary;
      if (job.salary == "" || job.salary == null){
        salary = "N/A"
      } else {
        salary = job.salary
      }

      // rendering message if starting date data exisits
      let startingDate;
      if (job.starting_date == "" || job.starting_date == null){
        startingDate = "N/A"
      } else {
        startingDate = job.starting_date
      }

      return <div key={job.id} className="ui raised padded segment">
                <h2 className="ui header truncate">
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
                  <p>{startingDate}</p>
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


    // rendering Archive & Re-Post button based on if the user if is Employer or not
    let jobStatus;
    const status = this.state.job_status
    // console.log("line 149 job status:", status)
    // console.log('localStorage.type', localStorage.type)
    if (this.state.job_status == 'active' && localStorage.type == "employer"){
      // console.log("line 151 job status:", this.state.job_status)
      jobStatus = <div className="ui two cloumn centered grid">
                    <div id="archive_repost_buttons" className="column">
                      <buton onClick={ this.handleJobStatusChangeToArchive.bind(this)} className="ui button large">Archive</buton>
                    </div>
                  </div>
    } else if (this.state.job_status == 'archived' && localStorage.type == "employer") {
      jobStatus = <div className="ui centered grid">
                    <div  id="archive_repost_buttons" className="column">
                      <buton onClick={ this.handleJobStatusChangeToActive.bind(this)} className="ui button large">Re-Post</buton>
                    </div>
                  </div>
    } else {

    }

    // rendering applicant data based on if user is applicant or not
    let applicantView;
    let jobApplicant_id = this.state.applicants_applied_id
    // console.log("jobApplicant_id", jobApplicant_id)
    if (this.state.job_status == 'active' && localStorage.type == "employer"){
      applicantView = <div className="ui segment match">
                        <h3>Applicants: </h3>
                        <div className="ui middle aligned divided list">
                          <Link to={"/list_matched_applicants"} className="item ui label">
                            <div className="right floated content">
                              <div>{this.state.job_applicants.length}</div>
                            </div>
                            <div className="content">Matched</div>
                          </Link>
                          <br/>
                          <Link to={"/list_applicants_applied/" + jobApplicant_id} className="item ui label">
                            <div className="right floated content">
                              <div >{this.state.applicants_applied.length}</div>
                            </div>
                            <div className="content">Applied</div>
                          </Link>

                        </div>
                      </div>


    } else if (this.state.job_status == 'archived' && localStorage.type) {

    } else if (localStorage.type == 'applicant'){
      applicantView = <div className="ui segment">
                        <div className="ui grid">
                          <div id="applicants_buttons">
                            <p>Apply to current job posting</p>
                            <buton id="apply_button" onClick={ this.handleApplyJobChange.bind(this)} className="ui button small solid"><i className="icon send"></i>Apply</buton>
                          </div>
                        </div>
                      </div>
    }


    return(
      <div id="job_details">
        {/* Spinner Starts */}
          {spinner}
        {/* Spinner Ends */}
        <br/>
        <h1>Detail Job View</h1>
        <br/>
        <div className="ui grid stackable">
          <div className="twelve wide column">
            {jobData}

            <div className="ui right aligned grid">
              <div className="right floated left aligned six wide column">
                {jobStatus}
              </div>
            </div>

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
