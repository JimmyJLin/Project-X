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

componentDidMount(){
  const employer_id = localStorage.id

  //  get employer profile data
  const employerUrl = "https://apex-database.herokuapp.com/api/employers/" + employer_id
  $.get(employerUrl).done( (data)=>{

     this.state.company_name = data[0].company_name;
     this.state.company_address = data[0].company_address;
     this.state.company_city = data[0].company_city;
     this.state.company_state = data[0].company_state;
     this.state.company_zip = data[0].company_zip;
     this.state.company_website = data[0].company_website;
     this.state.company_phone_number = data[0].company_phone_number;

     this.setState({
       company_name: this.state.company_name,
       company_address: this.state.company_address,
       company_city: this.state.company_city,
       company_state: this.state.company_state,
       company_zip: this.state.company_zip,
       company_phone_number: this.state.company_phone_number,
     })
})

}


  handleSubmit(e) {
    e.preventDefault();
    console.log("submit clicked")
    const employer_id = localStorage.id
    console.log("employer_id: ", employer_id)
    let employerProfileData = {
      id: employer_id,
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
    }

    let employerProfileImage = {
      company_files: this.state.company_files

    }

    console.log(employerProfileData)

    postOneEmployer(employerProfileData, employerProfileImage)


    this.setState({
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
    })


  }

  onChange(e) {
    var stateName = e.target.name;
    var value = e.target.value;
    this.setState({  stateName : value });
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
    console.log("acceptedFiles", acceptedFiles)

    this.setState({
      company_files: acceptedFiles
    });

    console.log("onDrop this.state.company_files", this.state.company_files)
    $('#eventDropZone').hide()
  }

  render(){
    // console.log("render this.state.files", this.state.company_files)

    const { isAuthenticated } = this.props.auth;

    const employer_form = (
        <div id="employer_profile_form">


        <h1>List Your Company Profile Today</h1>
        <h4>its free.  Only pay when you post.</h4>

        <form className="ui form employer_profile_form"
        onLoad = {this.componentDidMount}
        onSubmit={this.handleSubmit.bind(this)}>
        <div className="field">
          <label > Compay Name </label>
          <input name="company_name" value={this.state.company_name} onChange={e => this.onCompanyNameChange(e.target.value)}></input>
        </div>

         <div className="three fields">

           <div className="field">
            <label> Compay Address </label>
            <input name="company_address" value={this.state.company_address} onChange={e => this.onCompanyAddressChange(e.target.value)}></input>
          </div>

          <div className="field">
            <div className="three fields">

              <div className="field">
                <label > Compay City </label>
                <input name="company_city"  value={this.state.company_city} onChange={e => this.onCompanyCityChange(e.target.value)}></input>
              </div>
              <div className="field">
                <label> Compay State </label>
                <input  name="company_state" value={this.state.company_state} onChange={e => this.onCompanyStateChange(e.target.value)}></input>
              </div>
              <div className="field">
                <label > Compay Zip </label>
                  <input name="company_zip" value={this.state.company_zip} onChange={e =>  this.onCompanyZipChange(e.target.value)}></input>
              </div>
            </div>
          </div>

            <div className="field">
              <label> Compay Website </label>
              <input name="company_website" value={this.state.company_website} onChange={e =>  this.onCompanyWebsiteChange(e.target.value)}></input>
            </div>

          </div>


          <div className="three fields">
            <div className="field"></div>

            <div className="field">
              <div >
                <Dropzone onDrop={this.onDrop.bind(this)} id="eventDropZone">
                  <div>Try dropping your image here, or click to select image to upload.</div>
                </Dropzone>
                {this.state.company_files.length > 0 ? <div>
                  <h5>Picture uploaded</h5>
                  <h2>Uploading {this.state.company_files.length} files ... </h2>
                  <div>{this.state.company_files.map((file) => <img className="eventPreview" src={file.preview} /> )}</div>
                  </div> : null}
              </div>
            </div>
            <div className="field"></div>

          </div>

          {/*<div className="two fields">
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
          </div>*/}

          <div className="field">
            <label name="company_description"> Description </label>
            <textarea value={this.state.company_description}
            onChange={e => this.onCompanyDescriptionChange(e.target.value)}></textarea>
          </div>

          {/*<div className="field">
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
          </div>*/}

          <div className="two fields">
            <div className="field">
              <label>Hiring Email</label>
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
    const error = (
      <div className="field">
      <br/><br/><br/><br/><br/>
      Please sign in as an Employer to reach this page.
      </div>
    )

    return (
      <div>
        { isAuthenticated && (localStorage.type =='employer') ? employer_form : error }
      </div>
    )
  }

}




function postOneEmployer(employerProfileData, employerProfileImage) {
  // const company_image_logo = employerProfileData.company_files
  // console.log('company_image_logo', company_image_logo)
  // console.log('employerProfileData', employerProfileData)

  // console.log("this.state.company_files", this.state.company_files)
  console.log("employerProfileData", employerProfileData)
  $.post('https://apex-database.herokuapp.com/api/employers/new', employerProfileData)
    .done((data) => {
      console.log("data.id", data.id)
      console.log('Employer Profile Data Posted to postOneEmployer - returned data waiting for upload: ', data)
      postEmployerImage(data.id, employerProfileImage)


    })
    .error((error) => {
      console.error('Employer Profile Data Failed to Post to postOneEmployer - returned data: ', error);
    })
}

function postEmployerImage( id, imgObj) {

  $.post('https://apex-database.herokuapp.com/api/employers/'+id, {processData: false}, imgObj)

  let req = request.post('https://apex-database.herokuapp.com/api/employers/upload_image');
  imgObj.company_files.forEach((file) => {
    console.log(req)
    console.log("hello from inside forEach()", file)
    req.attach(file.name, file);
    req.field('id', id)
  })
  req.end(function(err, res){
    if (err || !res.ok) {
      alert('Oh no! error');
    } else {
      alert('yay got ' + JSON.stringify(res.body));
    }
  })
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Employer_profile_form);
