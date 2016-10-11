import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import HeaderMenu from '../headermenu';
import Footer from '../footer';


class Employer_profile_form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      company_name: '',
      company_url: '',
      type_of_job: '',
      industry_type: '',
      company_size: '',
      company_industry: '',
      company_logo: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit clicked")
    let employerProfileData = {
      company_name: this.state.company_name,
      company_url: this.state.company_url,
      hiring_email: this.state.hiring_email,
      branch_location: this.state.branch_location,
      company_size: this.state.company_size,
      company_industry: this.state.company_industry,
      company_logo: this.state.company_logo
    }

    console.log(employerProfileData)


    this.setState({
      company_name: '',
      company_url: '',
      hiring_email: '',
      branch_location: '',
      company_size: '',
      company_industry: '',
      company_logo: ''
    })

  }

  onCompanyNameChange(company_name){
    this.setState({company_name});
  }

  onCompanyUrlChange(company_url){
    this.setState({company_url});
  }

  onHiringEmailChange(hiring_email){
    this.setState({hiring_email});
  }

  onBranchLocationChange(branch_location){
    this.setState({branch_location});
  }

  onCompanySizeChange(company_size){
    this.setState({company_size});
  }

  onIndustryChange(company_industry){
    this.setState({company_industry});
  }

  onImageChange(company_logo){
    this.setState({company_logo})
  }

  render(){
    return(
        <div id="employer_profile_form">


        <h1>List Your Company Profile Today</h1>
        <h4>it's free.  Only pay when you post.</h4>

        <form className="ui form employer_profile_form"
        onSubmit={this.handleSubmit.bind(this)}>

          <div className="three fields">
            <div className="field"></div>
            <div className="field">
              <img className="profile-pic" src="" />
              <br/>
              <input className="file-upload" name="company_logo" type="file" accept="images/*"
              value={this.state.company_logo}
              onChange={ e => this.onImageChange(e.target.value)}/>

              {/*<input type="file" name="company_logo" accept="images/company_logo/*"
              value={this.state.company_logo}
              onChange={ e => this.onImageChange(e.target.value)}/>*/}

            </div>
            <div className="field"></div>

          </div>

          <div className="two fields">
            <div className="field">
              <label>Company Name</label>
              <input name="company_name" type="text" value={this.state.company_name}
              onChange={e => this.onCompanyNameChange(e.target.value)}/>
            </div>
            <div className="field">
              <label name="company_url">Company URl</label>
              <input type="text" value={this.state.company_url}
              onChange={e => this.onCompanyUrlChange(e.target.value)}/>
            </div>
          </div>

          <div className="two fields">
            <div className="field">
              <label>Hiring Email</label>
              <input name="hiring_email" type="text" value={this.state.hiring_email}
              onChange={e => this.onHiringEmailChange(e.target.value)}/>
            </div>
            <div className="field">
              <label name="branch_location">Branch Location</label>
              <input type="text" value={this.state.branch_location}
              onChange={e => this.onBranchLocationChange(e.target.value)}/>
            </div>
          </div>

          <div className="two fields">
            <div className="field">
              <label>Company Size</label>
              <input name="company_size" type="text" value={this.state.company_size}
              onChange={e => this.onCompanySizeChange(e.target.value)}/>
            </div>
            <div className="field">
              <label name="company_industry">Company Industry</label>
              <input type="text" value={this.state.company_industry}
              onChange={e => this.onIndustryChange(e.target.value)}/>
            </div>
          </div>

          <button className="ui button" type="submit">Activate Basic Profile</button>

        </form>
          <p>By activating your profile, you agree to the Apex Terms and Conditions</p>

        </div>

    )
  }

}



function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Employer_profile_form);
