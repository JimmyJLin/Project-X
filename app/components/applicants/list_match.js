import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import $ from 'jquery'; // requires jQuery for AJAX request

var final= [];


class List_match extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      industry: '',
      education_level: '',
      experience_level :'',
      filtered_jobs: {},
      isLoading: false
    }
  }

  componentDidMount() {

    if(localStorage.getItem('isLoaded') !== 'yes'){
      localStorage.setItem('isLoaded', 'yes');
      window.location.reload(true)

    }

    console.log("hello from list_matched_applicants componentDidMount")
    let applicant_id = this.props.params.id
    let url = "https://apex-database.herokuapp.com/api/jobs/active"
    // get all matched Applicants data
    $.get(url).done( (data)=>{
      this.state.jobs = data
      console.log("Applicant Data:", data)
      this.state.isLoading = true

      this.setState({
        jobs: this.state.jobs,
        isLoading: true
      })

      console.log('line 52 after initial set', this.state.jobs)

    })
  }

  //{***** On Change Functions *******}
  onFilterChange(name, val){

    console.log('name', 'val', name,val )

    this.setState({ [name]: val});
    // console.log(this.state.experience_level)
    console.log("onFilterChange Clicked", name, val)
    //  this.updateTheList()
      this.UpdateTheFilter(name, val);
  }


  // { ******* UPDATE THE RENDERED APPLICANTS FUNCTIONS ************** }

   UpdateTheFilter(name, val){
     var filteredArr;
       if (val == 'all'){
         this.state.filtered_jobs[name] = this.state.jobs;
       } else {
          filteredArr  = this.state.jobs.filter( (obj) =>{
            console.log('this is my line72', obj[name], val)
                         return obj[name] == val })

          this.state.filtered_jobs[name] = filteredArr
     }
  }


  updateTheFinalList(){

    var ffinal = [];

    var jobstate = this.state.jobs;

    var finalList = this.state.filtered_jobs;

    console.log('finalList line 143', finalList)
    var valuessoffiltered_jobs = Object.values(finalList);

    var selectedIds= []; //=> [[],[]]

    for (var i = 0; i <valuessoffiltered_jobs.length; i++ ){
      var arr = [];
      valuessoffiltered_jobs[i].map((el)=>{ arr.push(el.id) })
      selectedIds.push(arr)
    }
   console.log('+++++++++', selectedIds.map( (el)=>{
     return el
    }))


    var intersectionIds;
    switch ( selectedIds.length) {
    case 0:
      console.log('there is no intersection')
      break;
    case 1:
      intersectionIds = _.intersection( jobstate.map((el)=>{ return el.id}), selectedIds[0] );
      break;
    case 2:
      intersectionIds = _.intersection( jobstate.map((el)=>{ return el.id}), selectedIds[0], selectedIds[1] );
      break;
    case 3:
      intersectionIds = _.intersection( jobstate.map((el)=>{ return el.id}), selectedIds[0], selectedIds[1], selectedIds[2] );
      break;
        default:
    break ;
    }

    console.log('intersectionIds', intersectionIds)

      for ( var i in intersectionIds ){
          jobstate.forEach( (obj)=>{
            if ( obj.id == intersectionIds[i] ) {
                ffinal.push(obj) }
              })
                // console.log(final)
          }
          final = ffinal;

  }



  componentWillUpdate(){
    this.updateTheFinalList()
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

    let change = function(e){
      e.preventDefault();
      console.log(e.target.value)

      let applicant_id = localStorage.id
      let current_job_id = e.target.value

      let applicationData = {
          applicant_id: applicant_id,
          job_id: current_job_id,
          status: 'applied'
        }

      console.log("applicationData", applicationData)
      console.log("e-target className", e.target.className)

      $.post('https://apex-database.herokuapp.com/api/jobs/application', applicationData)
        .done((data) => {
          console.log('succesfully applied for a job')
        })
        .error((error) => {
          console.log('unable to apply for a job', error)
        })

       var buttonChange = document.getElementById(`job${current_job_id}`)

       buttonChange.className += " disabled"
       buttonChange.innerText = "Applied"

    }

    var jobArray;
    // console.log('this is my final', final)
      if (final.length == 0 ){
        jobArray = this.state.jobs
        // console.log("YESSSSSS -----", jobArray)
      } else {
        jobArray = final
        // console.log("NOOOOOOO ----", jobArray)
      }

    // const jobs = this.state.jobs
    const applicants = jobArray.map(function(applicant){
      // rendering location
      var location;
      if(applicant.location == "" || applicant.location == null){
        location = <div></div>
      } else {
        location = <div className="ui list">
                  <div className="item">{applicant.location}</div>
                </div>
      }


      // rendering each school
      var educationRequirement;
      if(applicant.education_level == "" || applicant.education_level == null){
        educationRequirement = <div></div>
      } else {
        educationRequirement = <div className="ui list">
                  <div className="item">{applicant.education_level}</div>
                </div>
      }

      // rendering each description
      var description;
      if(applicant.description == "" || applicant.description == null){
        description = <div></div>
      } else {
        description = <div className="ui list">
                  <div className="item ellipsis">{applicant.description}</div>
                </div>
      }


      const url = 'https://apex-database.herokuapp.com/images/applicant_profile_img/' + applicant.profile_image
      // console.log("image url  .... ", url)
      const link = `/list_matched/job/` + applicant.id
      return <Link to={link} className="card list" key={applicant.id} >
              <div className="content">
                {/*<img className="left floated tiny ui image" src={url} alt="profile pic"/>*/}
                <div className="header">
                  {applicant.title}
                </div>
                <div className="meta">
                  {applicant.industry}
                </div>
                <div className="description">
                  <span>Location: </span>
                  {location}
                  <span>Education:</span>
                  {educationRequirement}
                  <span>Description:</span>
                  {description}
                </div>
              </div>
              <br/>
              <br/>
              <button id={"job"+applicant.id} value={applicant.id} className="ui button small solid" onClick={change}><i className="icon send"></i>Quick Apply</button>
            </Link>

    })

    return(
      <div id="list_jobs">
        <h1>Congratulations, you profile matched with {this.state.jobs.length} jobs!</h1>
        <h3>Apply directly with one click</h3>
        {spinner}
        <div className="ui stackable grid">
          <div className="four wide column">
            <div className="ui center aligned basic segment">

              <h2>Filter By:</h2>
              <div className="field">


                {/* Industry rience */}
                <div>
                  <label name="industry">Industry</label>
                  <select name="industry" className="ui fluid normal dropdown"
                  value={this.state.industry}
                  onChange={e => this.onFilterChange(e.target.name, e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="all">All</option>
                    <option value="Finance">Finance</option>
                    <option value="Accounting">Accounting</option>
                  </select>
                </div>

                {/* Years of Experience */}
                <div>
                  <label name="experience_level">Work Experience (Full Employment)</label>
                  <select name="experience_level" id="" className="ui fluid dropdown" value={this.state.experience_level}
                  onChange={e => this.onFilterChange(e.target.name, e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="all">All</option>
                    <option value="Entry Level"> Entry (0-2 years) </option>
                    <option value="Mid Level"> Mid (2-5 years)</option>
                    <option value="High Level"> High (5+ years)</option>
                  </select>
                </div>

                {/* Education */}
                <div>
                  <label name="education_level">Education Level</label>
                  <select name="education_level" id="" className="ui fluid dropdown" value={this.state.education_level}
                  onChange={e => this.onFilterChange(e.target.name, e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="all">All</option>
                    <option value="Current Student">Current Student</option>
                    <option value="High School / GED">High School/GED</option>
                    <option value="Associate Degree">Associate Degree</option>
                    <option value="Bachelor Degree">Bachelors Degree</option>
                    <option value="JD Degree">JD Degree</option>
                    <option value="Masters Degree">Masters Degree</option>
                    <option value="MBA Degree">MBA Degree</option>
                    <option value="MSF">MSF</option>
                    <option value="Ph.D/Doctorate">Ph.D/Doctorate</option>
                  </select>
                </div>

              </div>
            </div>
          </div>
          <div id="profile_title" className="twelve wide column">
            <div className="ui cards">
              {applicants}
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

export default connect(mapStateToProps)(List_match);
