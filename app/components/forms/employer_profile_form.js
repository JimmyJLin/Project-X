import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import Dropzone from 'react-dropzone';
import request from 'superagent';
import $ from 'jquery';

class Employer_profile_form extends Component {

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
      company_files: []
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log("submit clicked")
    let employerProfileData = {
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
      company_logo: this.state.company_logo,
      company_files: this.state.company_files

    }

    // console.log(employerProfileData)
    postOneEmployer(employerProfileData)


    // this.setState({
    //   company_name: '',
    //   company_address: '',
    //   company_city: '',
    //   company_state: '',
    //   company_zip: '',
    //   company_description: '',
    //   company_website: '',
    //   company_phone_number: '',
    //   company_email: '',
    //   company_size: '',
    //   company_industry: '',
    //   company_branch: '',
    //   company_logo: '',
    //   company_files: []
    // })


  }

  onCompanyNameChange(company_name){
    this.setState({company_name});
  }

  onCompanyAddressChange(company_address){
    this.setState({company_address});
  }

  onCompanyCityChange(company_city){
    this.setState({company_city});
  }

  onCompanyStateChange(company_state){
    this.setState({company_state});
  }

  onCompanyZipChange(company_zip){
    this.setState({company_zip});
  }

  onCompanyDescriptionChange(company_description){
    this.setState({company_description});
  }

  onCompanyWebsiteChange(company_website){
    this.setState({company_website});
  }

  onCompanyPhoneChange(company_phone_number){
    this.setState({company_phone_number});
  }

  onCompanyEmailChange(company_email){
    this.setState({company_email});
  }

  onCompanySizeChange(company_size){
    this.setState({company_size});
  }

  onIndustryChange(company_industry){
    this.setState({company_industry});
  }

  onCompanyBranchChange(company_branch){
    this.setState({company_branch});
  }

  onImageChange(company_logo){
    this.setState({company_logo})
  }

  onDrop(acceptedFiles){
    // console.log("acceptedFiles", acceptedFiles)

    this.setState({
      company_files: acceptedFiles
    });

    // console.log("onDrop this.state.company_files", this.state.company_files)
    $('#eventDropZone').hide()
  }

  render(){
    // console.log("render this.state.files", this.state.company_files)

    return(
        <div id="employer_profile_form">


        <h1>List Your Company Profile Today</h1>
        <h4>its free.  Only pay when you post.</h4>

        <form className="ui form employer_profile_form"
        onSubmit={this.handleSubmit.bind(this)}>

          <div className="three fields">
            <div className="field"></div>

            <div className="field">
              <div>
                <Dropzone className="ui segment" onDrop={this.onDrop.bind(this)} id="eventDropZone">
                  <h2 className="ui header">Dropping your image here, <br/> or <br/> click to select image to upload.</h2>
                </Dropzone>

                {this.state.company_files.length > 0 ? <div>{this.state.company_files.map((file) => <img className="ui medium circular image" src={file.preview} /> )}</div> : null}
              </div>
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
              <label name="company_website">Company URl</label>
              <input type="text" value={this.state.company_website}
              onChange={e => this.onCompanyWebsiteChange(e.target.value)}/>
            </div>
          </div>

          <div className="field">
            <label name="company_description"> Description </label>
            <textarea value={this.state.company_description}
            onChange={e => this.onCompanyDescriptionChange(e.target.value)}></textarea>
          </div>

          <div className="field">
            <label>Company Address</label>
            <input name="company_address" type="text" value={this.state.company_address}
            onChange={e => this.onCompanyAddressChange(e.target.value)}/>
          </div>

          <div className="three fields">
            <div className="field">
            <label>City</label>
              <input name="company_city" type="text" value={this.state.company_city}
              onChange={e => this.onCompanyCityChange(e.target.value)}/>
            </div>
            <div className="field">
            <label>State</label>
              <select className="ui fluid dropdown" name="company_state" type="text" value={this.state.company_state}
              onChange={e => this.onCompanyStateChange(e.target.value)}>
                <option value="">State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className="field">
            <label>Zipcode</label>
              <input name="company_zip" type="text" value={this.state.company_zip}
              onChange={e => this.onCompanyZipChange(e.target.value)}/>
            </div>
          </div>

          <div className="two fields">
            <div className="field">
              <label>Company Email</label>
              <input name="company_email" type="text" value={this.state.company_email}
              onChange={e => this.onCompanyEmailChange(e.target.value)}/>
            </div>
            <div className="field">
              <label name="company_branch">Branch Location</label>
              <input type="text" value={this.state.company_branch}
              onChange={e => this.onCompanyBranchChange(e.target.value)}/>
            </div>
          </div>

          <div className="two fields">
            <div className="field">
              <label>Company Size</label>
              <select name="company_size" id="" className="ui fluid dropdown" value={this.state.company_size}
              onChange={e => this.onCompanySizeChange(e.target.value)}>
                <option value="">Please Select</option>
                <option value="Startup (less than 10 employees)">Startup (less than 10 employees)</option>
                <option value="Micro Cap">Micro Cap</option>
                <option value="Small Cap">Small Cap</option>
                <option value="Mid Cap">Mid Cap</option>
                <option value="Large Cap">Large Cap</option>
              </select>
            </div>
            <div className="field">
              <label name="company_industry">Company Industry</label>
              <select name="company_industry" id="" className="ui fluid dropdown" value={this.state.company_industry}
              onChange={e => this.onIndustryChange(e.target.value)}>
                <option value="">Please Select</option>
                <option value="Finance">Finance</option>
                <option value="Accounting">Accounting</option>
                <option value="Health">Health</option>
              </select>
            </div>
          </div>

          <button className="ui button" type="submit">Activate Basic Profile</button>

        </form>
          <p>By activating your profile, you agree to the Apex Terms and Conditions</p>

        </div>

    )
  }

}

function postOneEmployer(thisstate){
  // const company_image_logo = employerProfileData.company_files
  // console.log('company_image_logo', company_image_logo)
  // console.log('employerProfileData', employerProfileData)

  // console.log("this.state.company_files", this.state.company_files)
  // console.log("this.state", thisstate)
  $.post('/api/employers/new', {processData: false}, thisstate)
    .done((data) => {
      // console.log("data.id", data.id)
      // console.log('Employer Profile Data Posted to postOneEmployer - returned data: ', data)

      let req = request.post('/api/employers/upload');
      thisstate.company_files.forEach((file) => {
        // console.log(req)
        // console.log("hello from inside forEach()", file)
        req.attach(file.name, file);
        req.field('id', data.id)
      })
      req.end(function(err, res){
        if (err || !res.ok) {
          alert('Oh no! error');
        } else {
          alert('yay got ' + JSON.stringify(res.body));
        }
      })



    })
    .error((error) => {
      // console.error('Employer Profile Data Failed to Post to postOneEmployer - returned data: ', error);
    })
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Employer_profile_form);
