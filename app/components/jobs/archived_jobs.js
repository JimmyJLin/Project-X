import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';


class Archived_jobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job_data: []
    }
  }

  componentDidMount() {
    // get employer job data
    $.get('/api/jobs/archived/1').done( (data)=>{
      this.state.job_data = data
       this.setState({
         job_data: this.state.job_data

       })

     })
  }


  render(){
    const jobData = this.state.job_data

    const jobs = jobData.map(function(job){

      return <Link to={{pathname: `jobs/job_details/${job.id}`}} className="card" key={job.id} ><div className="content"><div className="header">{job.title}</div><div className="meta">{job.id}</div><div className="decription">{job.location}</div></div></Link>

    })

    console.log("jobData from state", jobData)

    return(
      <div id="list_jobs">
        <h1>Current Archived Job Lists</h1>
        <div className="ui fluid cards">
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
