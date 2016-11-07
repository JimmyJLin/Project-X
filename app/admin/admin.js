import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';


class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applicants: [],
      employers: [],
      jobs: [],
      isLoading: false
    }

  }


  componentDidMount() {

    // get all Applicant users
    $.get('https://apex-database.herokuapp.com/api/users/applicants/').done( (data)=>{
      this.state.applicants = data
      this.state.isLoading = true

       this.setState({
         applicants: this.state.applicants,
         isLoading: true
       })

     })

     // get all Employer users
     $.get('https://apex-database.herokuapp.com/api/users/employers/').done( (data)=>{
       this.state.employers = data
       this.state.isLoading = true

        this.setState({
          employers: this.state.employers,
          isLoading: true
        })

      })


    // get all jobs
    $.get('https://apex-database.herokuapp.com/api/jobs/').done( (data)=>{
      this.state.jobs = data
      this.state.isLoading = true

       this.setState({
         jobs: this.state.jobs,
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

    return(
      <div id="Admin">
        {/* Spinner Starts */}
          {spinner}
        {/* Spinner Ends */}
        <h1>Admin Panels</h1>
        <div className="ui raised segment">

          {/* Applicants counts */}
          <div className="ui left action input">

            <button className="ui teal labeled icon button">
              Applicant Counts
            </button>
            <input type="text" value={this.state.applicants.length} />

          </div>
          {/* Employers counts */}
          <br/>
          <br/>

          <div className="ui left action input">

            <button className="ui teal labeled icon button">
              Employer Counts
            </button>
            <input type="text" value={this.state.employers.length} />

          </div>

          {/* Jobs Counts */}
          <br/>
          <br/>

          <div className="ui left action input">

            <button className="ui teal labeled icon button">
              Job Counts
            </button>
            <input type="text" value={this.state.jobs.length} />

          </div>

        </div>







      </div>

    )
  }

}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Admin);
