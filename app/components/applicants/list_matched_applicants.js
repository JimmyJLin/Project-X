import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import $ from 'jquery'; // requires jQuery for AJAX request

class List_matched_applicants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job_applicants: []
    }
  }

  componentDidMount() {
    console.log("hello from list_matched_applicants componentDidMount")
    let applicant_id = this.props.params.id
    let url = "https://apex-database.herokuapp.com/api/applicants/"
    // get all matched Applicants data
    $.get(url).done( (data)=>{
      this.state.job_applicants = data
      console.log("Applicant Data:", data)
      console.log("this.state.job_applicants", this.state.job_applicants)

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
      const link = `/Matched_applicant/` + applicant.user_id
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
        <h1>Current Matched Applicant Lists</h1>
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

export default connect(mapStateToProps)(List_matched_applicants);
