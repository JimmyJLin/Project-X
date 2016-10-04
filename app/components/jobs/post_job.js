import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import HeaderMenu from '../headermenu';
import Footer from '../footer';


class Post_job extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job_title: '',
      job_location: '',
      type_of_job: '',
      industry_type: '',
      salary: '',
      job_experience: '',
      start_date: '',
      education: '',
      job_description: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit clicked")
    let jobData = {
      job_title: this.state.job_title,
      job_location: this.state.job_location,
      type_of_job: this.state.type_of_job,
      industry_type: this.state.industry_type,
      salary: this.state.salary,
      job_experience: this.state.job_experience,
      start_date: this.state.start_date,
      education: this.state.education,
      job_description: this.state.job_description
    }

    console.log(jobData)


    this.setState({
      job_title: '',
      job_location: '',
      type_of_job: '',
      industry_type: '',
      salary: '',
      job_experience: '',
      start_date: '',
      education: '',
      job_description: ''
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
                <input type="text" value={this.state.job_location}
                onChange={e => this.onJobLocationChange(e.target.value)}/>
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
                  <option value="Health">Health</option>
                </select>
              </div>
              <div className="field">
                <label>Industry</label>
                <select name="industry_type" id="" className="ui fluid dropdown" value={this.state.industry_type}
                onChange={e => this.onIndustryTypeChange(e.target.value)}>
                  <option value="">Please Select</option>
                  <option value="Finance">Finance</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Health">Health</option>
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
                  <option value="Entry Level">Entry Level</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="High Level">High Level</option>
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
                  <option value="Bachelor Degree">Bachelor Degree</option>
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


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Post_job);
