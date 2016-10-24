import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import $ from 'jquery'; // requires jQuery for AJAX request

class List_applicants_applied extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job_applicants: []
    }
  }

  componentWillMount() {
    let job_id = this.props.params.job_id
    console.log("line 17", job_id)
    // get # of Applied Applicants for current job
    $.get(`http://localhost:8080/api/jobs/application/${job_id}`)
      .done((data)=>{
        console.log("line 22 Job Applicant Data", data)

        this.state.job_applicants = data

        this.setState({
          job_applicants: this.state.job_applicants
        })

      })
  }


  render(){
    const job_applicants = this.state.job_applicants
    const applicants = job_applicants.map(function(applicant){
      const url = '/'+ applicant.profile_image
      console.log("image url ", url)
      const link = `/Matched_applicant/` + applicant.applicant_id
      return <Link to={link} className="card" key={applicant.applicant_id} >
              <div className="ui grid">
                <div className="eight wide column">
                  <div className="content">
                    <div className="header">{applicant.name} {applicant.last_name} </div>
                    <div className="meta">{applicant.id}</div>
                  </div>
                </div>
              </div>
            </Link>

    })

    console.log("job_applicants from state", job_applicants)

    return(
      <div id="list_jobs">
        <h1>Current Applied Applicant Lists</h1>
        <div className="ui fluid centered aligned cards">
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
