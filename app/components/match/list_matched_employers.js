import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import $ from 'jquery'; // requires jQuery for AJAX request

class List_matched_employers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job_applicants: []
    }
  }

  componentDidMount() {
    // get all matched Applicants data
    $.get('https://apex-database.herokuapp.com/api/applicants/').done( (data)=>{
      this.state.job_applicants = data
      console.log("Applicant Data:", data)
      console.log("this.state.job_applicants", this.state.job_applicants)

      this.setState({
        job_status: this.state.job_applicants
      })

    })
  }


  render(){
    const job_applicants = this.state.job_applicants
    const applicants = job_applicants.map(function(applicant){
      const url = 'https://apex-database.herokuapp.com/api/applicants/profile/'+ applicant.profile_image
      console.log("image url ", url)
      const link = `/list_matched_applicants/` + applicant.user_id
      return <Link to={link} className="card" key={applicant.user_id} >
              <div className="ui grid">
                <div className="eight wide column">
                  <img src={url} alt="profile pic"/>
                </div>
                <div className="eight wide column">
                  <div className="content">
                  <div className="header">{applicant.first_name} {applicant.last_name} </div>
                  <div className="meta">{applicant.id}</div>
                  <div className="decription">
                    {applicant.education_level}
                    <br/>
                    {applicant.school}
                    <br/>
                    {applicant.desired_industry}
                    <br/>
                    {applicant.experience_level}
                  </div>
                  </div>
                </div>
              </div>
            </Link>

    })

    console.log("job_applicants from state", job_applicants)

    return(
      <div id="list_jobs">
        <h1>Current Matched Employers Lists</h1>
        <div className="ui fluid cards">
          {applicants}
        </div>
      </div>

    )
  }

}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(List_matched_employers);
