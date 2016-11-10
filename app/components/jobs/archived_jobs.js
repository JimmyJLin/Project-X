import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';


class Archived_jobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job_data: [],
      isLoading: false
    }
  }

  componentDidMount() {
    const employer_id = localStorage.id
    const url = 'https://apex-database.herokuapp.com/api/jobs/archived/' + employer_id

    // get employer job data
    $.get(url).done( (data)=>{
      this.state.job_data = data
      this.state.isLoading = true

       this.setState({
         job_data: this.state.job_data,
         isLoading: true
       })

     })

     if(localStorage.getItem('isLoaded') !== 'yes'){
       localStorage.setItem('isLoaded', 'yes');
       window.location.reload(true)

     }

     window.setInterval(changeLoaded, 500)

     function changeLoaded(){
       localStorage.setItem('isLoaded', 'no');
     }

     window.onbeforeunload = function () {
       window.scrollTo(0, 0);
     }
     
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

    const jobData = this.state.job_data

    const jobs = jobData.map(function(job){

      return <Link to={`jobs/job_details/${job.id}`} className="card" key={job.id} >
              <div className="content">
                <div className="header">{job.title}</div>
                <div className="meta">{job.type}</div>
                <div className="description">{job.location}</div>
              </div>
            </Link>

    })

    console.log("jobData from state", jobData)

    return(
      <div id="list_jobs">
        {/* Spinner Starts */}
          {spinner}
        {/* Spinner Ends */}
        <h1>Current Archived Job Lists</h1>
        <div className="ui fluid centered stackable cards">
          {jobs}
        </div>
      </div>

    )
  }

}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Archived_jobs);
