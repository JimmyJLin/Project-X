import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import $ from 'jquery'; // requires jQuery for AJAX request

let certificateState = [];
let jobSkillsState = [];
let jobExperienceState = [];
var final= [];
var jobArray;


class List_match extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job_applicants: [],
      experience_level: '',
      education_level: '',
      job_experiences :'',
      job_skills : '',
      filteredApplicants: {},
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
      this.state.job_applicants = data
      console.log("Applicant Data:", data)
      console.log("this.state.job_applicants", this.state.job_applicants)
      this.state.isLoading = true

      this.setState({
        job_applicants: this.state.job_applicants,
        isLoading: true
      })

    })
  }

  //{***** On Change Functions *******}
  onFilterChange(name, val){

    console.log('name', 'val', name,val )
    this.setState({ [name]: val});
    // console.log(this.state.experience_level)
    console.log("onFilterChange Clicked", name, val)
    //  this.updateTheList()
    if (name == 'education_level' || name == 'experience_level' || name == 'desired_industry'){
      this.UpdateTheFilterForArrays(name, val);
    } else {
      this.UpdateTheFilter(name, val);
    }
  }


  // { ******* UPDATE THE RENDERED APPLICANTS FUNCTIONS ************** }

   UpdateTheFilter(name, val){
     var filteredArr;
       if (val == 'all'){
         this.state.filteredApplicants[name] = this.state.job_applicants;
       } else {
          filteredArr  = this.state.job_applicants.filter( (obj) =>{
                         return obj[name] == val })
                         console.log('this is my filtered Array', filteredArr)
         this.state.filteredApplicants[name] = filteredArr
     }
  }

  UpdateTheFilterForArrays(name, val){

    var filteredArr;
      if (val == 'all'){
        this.state.filteredApplicants[name] = this.state.job_applicants;
      } else {

         switch (name){
         case 'education_level':
           filteredArr  = this.state.job_applicants.filter( (obj) =>{

                          obj.Matching = false;
                          for (var n in obj.school){
                            if( obj.school[n].includes(val)){
                              obj.Matching = true;
                              break;
                            }
                          }
                          return obj.Matching == true
                        })
            break;
          case 'experience_level' :
          filteredArr  = this.state.job_applicants.filter( (obj) =>{

                         obj.Matching = false;
                         for (var m in obj.industries){
                           console.log('experience_level', obj.industries[m], val )
                           if( obj.industries[m], val.includes(val)){
                             obj.Matching = true;
                             break;
                           }
                         }
                         return obj.Matching == true
                       })
          break;
          case 'desired_industry' :
          filteredArr  = this.state.job_applicants.filter( (obj) =>{
                         obj.Matching = false;
                         for (var s in obj.skills){
                           console.log('desired_industry', obj.skills[s], val )
                           if( obj.skills[s].includes(val)){
                             obj.Matching = true;
                             break;
                           }
                         }
                         return obj.Matching == true
                       })
          break;
          default:
          console.log('none')
          break;
        }
         console.log('Line 138 this is my filtered Array', filteredArr)

         if (filteredArr.length > 0){
           this.state.filteredApplicants[name] = filteredArr
         }
  }
  }


  updateTheFinalList(){

    var ffinal = [];
    var jobsState = this.state.job_applicants;

    var finalList = this.state.filteredApplicants;

    var valuessoffilteredApplicants = Object.values(finalList);

    var selectedIds= []; //=> [[],[]]

    for (var i = 0; i <valuessoffilteredApplicants.length; i++ ){
      var arr = [];
      valuessoffilteredApplicants[i].map((el)=>{ arr.push(el.ui) })
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
      intersectionIds = _.intersection( jobsState.map((el)=>{ return el.ui}), selectedIds[0] );
      break;
    case 2:
      intersectionIds = _.intersection( jobsState.map((el)=>{ return el.ui}), selectedIds[0], selectedIds[1] );
      break;
    case 3:
      intersectionIds = _.intersection( jobsState.map((el)=>{ return el.ui}), selectedIds[0], selectedIds[1], selectedIds[2] );
      break;
    case 4:
      intersectionIds = _.intersection( jobsState.map((el)=>{ return el.ui}), selectedIds[0], selectedIds[1], selectedIds[2], selectedIds[3] );
      break;
    case 5:
      intersectionIds = _.intersection( jobsState.map((el)=>{ return el.ui}),selectedIds[0], selectedIds[1], selectedIds[2], selectedIds[3],  selectedIds[4] );
      break;
    case 6:
      intersectionIds = _.intersection( jobsState.map((el)=>{ return el.ui}), selectedIds[0], selectedIds[1], selectedIds[2], selectedIds[3],  selectedIds[4], selectedIds[5]  );
      break;
    default:
    break ;
    }

    console.log('intersectionIds', intersectionIds)

      for ( var i in intersectionIds ){
          jobsState.forEach( (obj)=>{
            if ( obj.ui == intersectionIds[i] ) {
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
        jobArray = this.state.job_applicants
        // console.log("YESSSSSS -----", jobArray)
      } else {
        jobArray = final
        // console.log("NOOOOOOO ----", jobArray)
      }

    // const job_applicants = this.state.job_applicants
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
                  <div className="item">{applicant.description}</div>
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
                  {applicant.type}
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
              <button id={"job"+applicant.ui} value={applicant.ui} className="ui button small solid" onClick={change}><i className="icon send"></i>Quick Apply</button>
            </Link>

    })

    return(
      <div id="list_jobs">
        <h1>Current Matched Applicant Lists</h1>
        {spinner}
        <div className="ui stackable grid">
          <div className="four wide column">
            <div className="ui center aligned basic segment">

              <h2>Filter By:</h2>
              <div className="field">


                {/* Industry rience */}
                <div>
                  <label name="certifications">Industry</label>
                  <select name="desired_industry" className="ui fluid normal dropdown"
                  value={this.state.industry}
                  onChange={e => this.onFilterChange(e.target.name, e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="all">All</option>
                    <option value="Finance">Finance</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Insurance">Insurance</option>
                  </select>
                </div>

                {/* Years of Experience */}
                <div>
                  <label name="experience_level">Work Experience (Full Employment)</label>
                  <select name="experience_level" id="" className="ui fluid dropdown" value={this.state.experience_level}
                  onChange={e => this.onFilterChange(e.target.name, e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="all">All</option>
                    <option value="Entry Level">Entry (0-2 years) </option>
                    <option value="Mid Level">Mid (2-5 years)</option>
                    <option value="High Level">High (5+ years)</option>
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
                    <option value="High School/GED">High School/GED</option>
                    <option value="Associate Degree">Associate Degree</option>
                    <option value="Bachelors Degree">Bachelors Degree</option>
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
