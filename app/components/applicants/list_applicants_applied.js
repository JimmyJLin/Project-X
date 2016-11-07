import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import $ from 'jquery'; // requires jQuery for AJAX request

class List_applicants_applied extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job_applicants: [],
      isLoading: false
    }
  }

  componentWillMount() {
    let job_id = this.props.params.job_id
    console.log("line 17", job_id)
    // get # of Applied Applicants for current job
    $.get(`https://apex-database.herokuapp.com/api/jobs/application/${job_id}`)
      .done((data)=>{
        console.log("line 22 Job Applicant Data", data)

        this.state.job_applicants = data
        this.state.isLoading = true

        this.setState({
          job_applicants: this.state.job_applicants,
          isLoading: true
        })

      })
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

    const job_applicants = this.state.job_applicants
    const applicants = job_applicants.map(function(applicant){
      const url = '/'+ applicant.profile_image
      console.log("image url ", url)
      const link = `/Matched_applicant/` + applicant.applicant_id
      return <Link to={link} className="card" key={applicant.applicant_id} >
              <div className="content">
                <div className="header">{applicant.name} {applicant.last_name} </div>
                <div className="meta">{applicant.email}</div>
              </div>
            </Link>

    })

    console.log("job_applicants from state", job_applicants)

    return(
      <div id="list_jobs">
        {/* Spinner Starts */}
          {spinner}
        {/* Spinner Ends */}
        <h1>Applied Applicant Lists</h1>
        <div className="ui fluid centered stackable cards">
          {applicants}
        </div>
      </div>

    )
  }

}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(List_applicants_applied);
