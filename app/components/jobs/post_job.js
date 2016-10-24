import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import $ from 'jquery'; // requires jQuery for AJAX request


class Post_job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      location: '',
      type: '',
      industry: '',
      salary: '',
      experience_level: '',
      education_level: '',
      starting_date: '',
      status:''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit clicked")
    const employer_id = localStorage.id
    console.log("employer_id", employer_id)
    let jobData = {
      employer_id: employer_id,
      title: this.state.job_title,
      location: this.state.job_location,
      type: this.state.type_of_job,
      industry: this.state.industry_type,
      salary: this.state.salary,
      experience_level: this.state.job_experience,
      starting_date: this.state.start_date,
      education_level: this.state.education,
      description: this.state.job_description,
      status:'active'
    }

    console.log('job posted with: ', jobData)
    postJob(jobData)


    this.setState({
      title: '',
      description: '',
      location: '',
      type: '',
      industry: '',
      salary: '',
      experience_level: '',
      education_level: '',
      starting_date: '',
      status:''
    })
  }

  onJobTitleChange(job_title){
    this.setState({job_title});
  }

  onJobLocationChange(job_location){
    this.setState({job_location});
  }

  onTypeOfJobChange(type_of_job){
    this.setState({type_of_job});
  }

  onIndustryTypeChange(industry_type){
    this.setState({industry_type});
  }

  onSalaryChange(salary){
    this.setState({salary});
  }

  onJobExperienceChange(job_experience){
    this.setState({job_experience});
  }

  onStartDateChange(start_date){
    this.setState({start_date});
  }

  onEducationChange(education){
    this.setState({education});
  }

  onJobDescriptionChange(job_description){
    this.setState({job_description});
  }

  render(){
    return(
        <div id="post_job">

        <div className="posting_job">
          <h2>Post New Job!</h2>
          <form className="ui form job" onSubmit={this.handleSubmit.bind(this)}>

            <h4 className="ui dividing header">Job Description</h4>
            <div className="two fields">
              <div className="field">
                <label>Brief Official Title</label>
                <input name="job_title" type="text" value={this.state.job_title}
                onChange={e => this.onJobTitleChange(e.target.value)}/>
              </div>
              <div className="field">
                <label name="job_location">Location</label>
                <select name="job_location" className="ui fluid normal dropdown"
                value={this.state.job_location}
                onChange={e => this.onJobLocationChange(e.target.value)}>
                  <option value="">Please Select</option>
                  <option value="New York">New York</option>
                  <option value="London">London</option>
                  <option value="Paris">Paris</option>
                  <option value="Berlin ">Berlin </option>
                  <option value="Tokyo">Tokyo</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Nassau County">Nassau County</option>
                  <option value="Suffolk County">Suffolk County</option>
                  <option value="Brooklyn">Brooklyn</option>
                  <option value="Queens">Queens</option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Staten Island">Staten Island</option>
                  <option value="Jersey City">Jersey City</option>
                  <option value="Rye">Rye</option>
                  <option value="Westchester">Westchester</option>
                  <option value="Albany">Albany</option>

                </select>
              </div>
            </div>

            <div className="two fields">
              <div className="field">
                <label>What Type of Job</label>
                <select name="type_of_job" id="" className="ui fluid dropdown" value={this.state.type_of_job}
                onChange={e => this.onTypeOfJobChange(e.target.value)}>
                  <option value="">Please Select</option>
                  <option value="Finance">Finance</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Health">Insurance</option>
                </select>
              </div>
              <div className="field">
                <label>Industry</label>
                <select name="industry_type" id="" className="ui fluid dropdown" value={this.state.industry_type}
                onChange={e => this.onIndustryTypeChange(e.target.value)}>
                  <option value="">Please Select</option>
                  <option value="Finance">Finance</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Health">Insurance</option>
                </select>
              </div>
            </div>

            <div className="two fields">
              <div className="field">
                <label>Salary (optional)</label>
                <input name="salary" type="text" value={this.state.salary}
                onChange={e => this.onSalaryChange(e.target.value)}/>
              </div>
              <div className="field">
                <label>Experience</label>
                <select name="job_experience" id="" className="ui fluid dropdown" value={this.state.job_experience}
                onChange={e => this.onJobExperienceChange(e.target.value)}>
                <option value="">Please Select</option>
                <option value="Entry Level">Entry Level- 2 Years or less</option>
                <option value="Mid Level">Mid Level- 2-5 Years</option>
                <option value="High Level">High Level- 5-10Years</option>
                </select>
              </div>
            </div>

            <div className="two fields">
              <div className="field">
                <label>Start Date</label>
                <input name="start_date" type="date" value={this.state.start_date}
                onChange={e => this.onStartDateChange(e.target.value)}/>
              </div>
              <div className="field">
                <label>Education</label>
                <select name="education" id="" className="ui fluid dropdown" value={this.state.education}
                onChange={e => this.onEducationChange(e.target.value)}>
                  <option value="">Please Select</option>
                  <option value="High School / GED">High School / GED</option>
                  <option value="Associate Degree">Associate Degree</option>
                  <option value="Bachelor Degree">Bachelor Degree</option>
                  <option value="Master Degree">Master Degree</option>
                  <option value="Phd">Phd</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="">Job Description</label>
              <textarea name="job_description" id="" cols="30" rows="10" value={this.state.textarea}
              onChange={e => this.onJobDescriptionChange(e.target.value)}></textarea>
            </div>

            <button className="ui submit button" type="submit"> Submit </button>
          </form>

        </div>

      </div>

    )
  }

}

function postJob(jobData){
  console.log('post job data is fired with data', jobData)
  $.post('https://apex-database.herokuapp.com/api/jobs/new', jobData)
    .done((data) => {
      console.log('success', data)
      browserHistory.push('/employer_profile'); // redirects to profile
    })
    .error((error) => {
      console.error('Posting action is failed', error);
    })
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Post_job);
