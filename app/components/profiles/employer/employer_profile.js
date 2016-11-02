import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';


class Employer_profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company_name: '',
      company_address: '',
      company_city: '',
      company_state: '',
      company_zip: '',
      company_description: '',
      company_website: '',
      company_phone_number: '',
      company_email: '',
      company_size: '',
      company_industry: '',
      company_branch: '',
      company_logo: '',
      active_jobs: '',
      archived_jobs: ''
    }

  }

  componentDidMount() {

    const employer_id = localStorage.id

    //  get employer profile data
    const employerUrl = "https://apex-database.herokuapp.com/api/employers/" + employer_id
    $.get(employerUrl).done( (data)=>{

      if (data[0].company_industry == null || '') {
        browserHistory.push('/employer_profile_form');

      } else {
       this.state.company_name = data[0].company_name;
       this.state.company_address = data[0].company_address;
       this.state.company_city = data[0].company_city;
       this.state.company_state = data[0].company_state;
       this.state.company_zip = data[0].company_zip;
       this.state.company_description = data[0].company_description;
       this.state.company_website = data[0].company_website;
       this.state.company_phone_number = data[0].company_phone_number;
       this.state.company_email = data[0].company_email;
       this.state.company_size = data[0].company_size;
       this.state.company_industry = data[0].company_industry;
       this.state.company_branch = data[0].company_branch;
       this.state.company_logo = data[0].company_logo;

       this.setState({
         employerProfile: this.state.employerProfile,
         company_name: this.state.company_name,
         company_address: this.state.company_address,
         company_city: this.state.company_city,
         company_state: this.state.company_state,
         company_zip: this.state.company_zip,
         company_description: this.state.company_description,
         company_website: this.state.company_website,
         company_phone_number: this.state.company_phone_number,
         company_email: this.state.company_email,
         company_size: this.state.company_size,
         company_industry: this.state.company_industry,
         company_branch: this.state.company_branch,
         company_logo: this.state.company_logo
       })

    }
  })


    console.log("employer id", employer_id)
    // fetch employer posted jobs with status active
    const activeUrl = "https://apex-database.herokuapp.com/api/jobs/active/" + employer_id
    $.get(activeUrl).done( (data)=>{
      this.state.active_jobs = data.length

       this.setState({
         active_jobs: this.state.active_jobs

       })
       console.log("this.state.active_jobs", this.state.active_jobs)
     })

     // fetch employer posted jobs with status archived
     const archivedUrl = "https://apex-database.herokuapp.com/api/jobs/archived/" + employer_id
     $.get(archivedUrl).done( (data)=>{
       console.log('job data: ', data)
       console.log('job data: ', data.length)
       this.state.archived_jobs = data.length

        this.setState({
          archived_jobs: this.state.archived_jobs

        })
        console.log("this.state.archived_jobs", this.state.archived_jobs)
      })


 }

  render(){
    console.log("this.state.company_logo", this.state.company_logo)
    const loader = function(){
      return  <div className="ui active inverted dimmer"><div className="ui indeterminate medium text loader">Loading</div></div>
    }

    let profile_image;

    if(this.state.company_logo == null){
      // console.log("no image")
      profile_image = <img className="ui small circular center image" src="images/img_placeholders/150x150.jpg" alt="Profile Picture"/>
    } else {
      // console.log("yes image")
      profile_image = <img className="ui small circular image" src={'https://apex-database.herokuapp.com/images/company_logo/' + this.state.company_logo} alt="Company Logo"/>
    }

    return(
        <div id="employer_profile">


          {/*{loader()}*/}

          {/* Profile Header */}
          <div className="ui grid">
            <div className="four wide column">
              {profile_image}
            </div>
            <div className="twelve wide column">
              <div className="twelve wide column">
                <h3>{this.state.company_name}</h3>
              </div>

              <div className="ui divider"></div>

              <div className="twelve wide column">
                <div className="ui four middle aligned cards">
                  <div className="ui label">

                    {this.state.company_industry}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div id="bio" className="twelve wide column">
            <h2>Company Description</h2>
            <p>{this.state.company_description}</p>
          </div>


          <div className="ui divider"></div>

          {/* Employer Details */}
          <div className="ui grid">

            <div className="twelve wide column">
              <h3>Company Information</h3>
              <div className="ui equal width grid">
                <div className="equal width row">
                  <div className="column">
                    <div className="ui label details">
                      Company Name:
                      <div className="detail">{this.state.company_name}</div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui label details">
                      Company Website:
                      <div className="detail"><Link to={this.state.company_website} target="_blank">{this.state.company_website}</Link></div>
                    </div>
                  </div>
                </div>

                <div className="equal width row">

                  <div className="column">
                    <div className="ui label details">
                      Address:
                      <div className="detail">
                      {this.state.company_address}
                      <br/>
                      {this.state.company_city}, {this.state.company_state} {this.state.company_zip}
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui label details">
                      Branch Location:
                      <div className="detail">{this.state.company_branch}</div>
                    </div>
                  </div>
                </div>

                <div className="equal width row">
                  <div className="column">
                    <div className="ui label details">
                      Hiring Dept Email:
                      <div className="detail">{this.state.company_email}</div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui label details">
                      Industry:
                      <div className="detail">{this.state.company_industry}</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Post Job Button*/}
              <div className="ui two column left grid">
                <Link to="/new">
                  <button className="massive ui button">Post Job Today!</button>
                </Link>
              </div>

            </div>

            <div className="four wide column">
              <div className="ui segment">
                <h3>Job Postings: </h3>
                  <div className="ui middle aligned divided list">

                    <div className="item">
                      <div className="right floated content">
                        <Link to="/list_jobs">{this.state.active_jobs}</Link>
                      </div>
                      <div className="content">Open</div>
                    </div>

                    <div className="item">
                      <div className="right floated content">
                        <Link to="/archived_jobs">{this.state.archived_jobs}</Link>
                      </div>
                      <div className="content">Archived</div>
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

export default connect(mapStateToProps)(Employer_profile);
