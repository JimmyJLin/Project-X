import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import {browserHistory} from 'react-router';
import $ from 'jquery'; // requires jQuery for AJAX request
import _ from 'underscore';

let certificateState = [];
let jobSkillsState = [];
let jobExperienceState = [];
var final= [];

class List_matched_applicants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job_applicants: [],
      experience_level: '',
      education_level: '',
      industry: '',
      job_skills: [],
      job_skillsArr: [],
      job_experiences: [],
      job_experiencesArr:[],
      sortedList : [],
      filteredApplicants: {}

    }
  }

  componentDidMount() {

    if(localStorage.getItem('isLoaded') !== 'yes'){
      localStorage.setItem('isLoaded', 'yes');
      window.location.reload(true)

    }

    console.log("hello from list_matched_applicants componentDidMount")
    let applicant_id = this.props.params.id
    let url = "https://apex-database.herokuapp.com/api/applicants/"
    // get all matched Applicants data
    $.get(url).done( (data)=>{
      this.state.job_applicants = data
      console.log("Applicant Data:", data)
      console.log("this.state.job_applicants", this.state.job_applicants)

      this.setState({
        job_applicants: this.state.job_applicants
      })

    })
  }


  onFilterChange(name, val){

    console.log('name', 'val', name,val )
    this.setState({ [name]: val});
    // console.log(this.state.experience_level)
    console.log("onFilterChange Clicked", name, val)
    //  this.updateTheList()
    if (name == 'education_level'){
      this.UpdateTheFilterForEducationLevel('education_level', val);
    } else {
      this.UpdateTheFilter(name, val);
    }
  }

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

  UpdateTheFilterForEducationLevel(name, val){

    console.log('testttttt', this.state.job_applicants[0].school[0].includes('Current Student')); //=>true

    var filteredArr;
      if (val == 'all'){
        this.state.filteredApplicants[name] = this.state.job_applicants;
      } else {

     filteredArr  = this.state.job_applicants.filter( (obj) =>{
                    console.log(obj.id, obj.school)
                    obj.educationMatching = false;
                    for (var n in obj.school){
                      if( obj.school[n].includes(val)){
                        obj.educationMatching = true;
                        break;
                      }
                    }
                    return obj.educationMatching == true
                  })

                    console.log('Line 89 this is my filtered Array', filteredArr)
    this.state.filteredApplicants[name] = filteredArr
  }
 }

 UpdateTheFilterForArray( name , array){
    console.log('line 110 passed array', array)

      this.state.filteredApplicants[name] =  array
    }

//  UpdateTheFilter(name, val){
//    var filteredArr;
//      if (val == 'all'){
//        this.state.filteredApplicants[name] = this.state.job_applicants;
//      } else {
//         filteredArr  = this.state.job_applicants.filter( (obj) =>{
//                        return obj[name] == val })
//                        console.log('this is my filtered Array', filteredArr)
//        this.state.filteredApplicants[name] = filteredArr
//    }
// }


  updateTheFinalList(){
    var ffinal = [];
    var jobsState = this.state.job_applicants;
    console.log("jobsState --->", jobsState)

    var finalList = this.state.filteredApplicants;
    console.log("finalList --->", finalList)

    var valuessoffilteredApplicants = Object.values(finalList);
    console.log("valuessoffilteredApplicants --->", valuessoffilteredApplicants) //=>[ [ [],[],[],[] ] ]

    var selectedIds= []; //=> [[],[]]

    for (var i = 0; i <valuessoffilteredApplicants.length; i++ ){
      var arr = [];
      valuessoffilteredApplicants[i].map((el)=>{ arr.push(el.ui) })
      console.log('tessssttt arrray ', arr)
      selectedIds.push(arr)
    }
   console.log('+++++++++', selectedIds.map( (el)=>{
     return el
    }))

    console.log('line 136', selectedIds[0])
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
      intersectionIds = _.intersection( jobsState.map((el)=>{ return el.ui}), selectedIds[0], selectedIds[1], selectedIds[2], selectedIds[3],  selectedIds[4]  );
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
                console.log(final)
          }
          final = ffinal;
    console.log('this is the final', final, ffinal)
    // var intersectionIds = _.intersection( jobsState.map((el)=>{ return el.ui}), keysoffilteredApplicants.forEach((arr)=> { arr.map((el)=>{ return el.ui})}))
    //
    // console.log('this state filteredApplicants', finalList,keysoffilteredApplicants, intersectionIds ,areIDs)

  }



  componentWillUpdate(){
    this.updateTheFinalList()
  }


  // onIndustryExperienceChange(industry_experience){
  //   jobExperienceState.push(industry_experience)
  //   this.setState({industry_experience: jobExperienceState})
  //   // console.log("onIndustryExperienceChange Clicked")
  //
  // }

  onJobSkillsChange(job_skills_data){
    console.log("job_skills --->", job_skills_data)

    jobSkillsState.push(job_skills_data)
    console.log("jobSkillsState --->", jobSkillsState)

    this.setState({job_skills: jobSkillsState})

    console.log("this.state.job_skills -->", this.state.job_skills)
    this.UpdateTheFilterForArray(job_skills_data, this.state.job_skills)

    // console.log("onJobSkillsChange Clicked", this.state.job_skills)
  }


  onExperienceChange(job_experiences_data){
    jobExperienceState.push(job_experiences_data)
    this.setState({job_experiences: jobExperienceState})
    // console.log("onExperienceChange Clicked", this.state.job_experiences)
    this.UpdateTheFilterForArray(job_experiences_data, this.state.job_experiences)
  }

  render(){

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

      // $.post('https://apex-database.herokuapp.com/api/jobs/application', applicationData)
      //   .done((data) => {
      //     console.log('succesfully applied for a job')
      //
      //   })
      //   .error((error) => {
      //     console.log('unable to apply for a job', error)
      //   })

       var buttonChange = document.getElementById(`job${current_job_id}`)

       buttonChange.className += " disabled"
       buttonChange.innerText = "Emailed"


    }

    var jobArray;
    console.log('this is my final', final)
      if (final.length == 0 ){
        jobArray = this.state.job_applicants
        console.log("YESSSSSS -----", jobArray)
      } else {
        jobArray = final
        console.log("NOOOOOOO ----", jobArray)
      }

    // const job_applicants = this.state.job_applicants
    const applicants = jobArray.map(function(applicant){

      const url = 'https://apex-database.herokuapp.com/images/applicant_profile_img/' + applicant.profile_image
      // console.log("image url  .... ", url)
      const link = `/Matched_applicant/` + applicant.ui
      return <Link to={link} className="card list" key={applicant.ui} >
              <div className="content">
                <img className="right floated tiny ui image" src={url} alt="profile pic"/>
                <div className="header">
                  {applicant.name} {applicant.last_name}
                </div>
                <div className="meta">
                  {applicant.desired_industry}
                </div>
                <div className="description">
                  {applicant.experience_level}
                  <br/>
                  {applicant.school}
                  <br/>
                </div>
              </div>
              <br/>
              <br/>
              <button href="mailto:emailaddress@gmail.com?Subject=Hello%20again" target="_top" id={"job"+applicant.user_id} value={applicant.user_id} className="ui button blue small solid" onClick={change}><i className="icon mail"></i>Contact</button>
            </Link>

    })

    // <div className="card">
    //
    //   <div className="content">
    //     <img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg" />
    //     <div className="header">
    //       Elliot Fu
    //     </div>
    //     <div className="meta">
    //       Friends of Veronika
    //     </div>
    //     <div className="description">
    //       Elliot requested permission to view your contact details
    //     </div>
    //   </div>
    //
    //   <div class="extra content">
    //     <div class="ui two buttons">
    //       <div class="ui basic green button">Approve</div>
    //       <div class="ui basic red button">Decline</div>
    //     </div>
    //   </div>
    //
    // </div>

    // console.log("job_applicants from state", job_applicants)

    return(
      <div id="list_jobs">
        <h1>Current Matched Applicant Lists</h1>

        <div className="ui stackable grid">
          <div className="four wide column">
            <div className="ui center aligned basic segment">
              <h2>Filter By:</h2>
              <div className="field">

                {/*<div id="reset_button" className="ui button small" >Clear Filters</div>
                <br/>
                <br/>*/}
                {/* Years of Experience */}
                <div>
                  <label name="experience_level">Work Experience (Full Employment)</label>
                  <select name="experience_level" id="" className="ui fluid dropdown" value={this.state.experience_level}
                  onChange={e => this.onFilterChange(e.target.name, e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="all">All</option>
                    <option value="Entry Level"> 0-2 Years (Entry Level)</option>
                    <option value="Mid Level">2-5 Years (Mid-Level)</option>
                    <option value="High Level">5+ Years (High-Level)</option>
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

                {/* Industry Experience */}
                <div>
                  <label name="certifications">Industry</label>
                  <select name="desired_industry" className="ui fluid normal dropdown"
                  value={this.state.industry}
                  onChange={e => this.onFilterChange(e.target.name, e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="all">All</option>
                    <option value="Finance">Finance</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Health">Health</option>
                  </select>
                </div>

                {/* Skills */}
                <div>
                  <label name="job_skills">Skills</label>
                  <select multiple="true" name="job_skills" className="ui fluid normal dropdown"
                  value={this.state.job_skills}
                  onChange={e => this.onJobSkillsChange(e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="all">All</option>
                    <option value="Wealth Management">Wealth Management</option>
                    <option value="Investment Banking">Investment Banking</option>
                    <option value="Asset Management">Asset Management</option>
                    <option value="Institutional Securities">Institutional Securities</option>
                    <option value="Commericial Banking">Commericial Banking</option>
                    <option value="Retirement Solutions">Retirement Solutions</option>
                    <option value="Portfolio Strategy">Portfolio Strategy</option>
                    <option value="Financial Audit">Financial Audit</option>
                    <option value="Tax Preparation">Tax Preparation</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Advisory Services">Advisory Services</option>
                    <option value="Compliance">Compliance</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Underwriting">Underwriting</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Financial Analysis">Financial Analysis</option>
                    <option value="Derivatives">Derivatives</option>
                    <option value="M&A Activity">M&A Activity</option>
                    <option value="Venture Capitol">Venture Capitol</option>
                    <option value="Forensice Accounting">Forensice Accounting</option>
                  </select>
                </div>

                {/* Experiences */}
                <div>
                  <label name="job_experiences">Experiences</label>
                  <select multiple="true" name="job_experiences" className="ui fluid normal dropdown"
                  value={this.state.job_experiences}
                  onChange={e => this.onExperienceChange(e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="all">All</option>
                    <option value="Client Relations">Client Relations</option>
                    <option value="Microsoft Office">Microsoft Office</option>
                    <option value="Quickbooks">Quickbooks</option>
                    <option value="Bookkeeping">Bookkeeping</option>
                    <option value="Tax Software">Tax Software</option>
                    <option value="IT">IT</option>
                    <option value="Data Entry">Data Entry</option>
                    <option value="Financial Statement">Financial Statement</option>
                    <option value="Financial Planning">Financial Planning</option>
                    <option value="Debt Consolidation">Debt Consolidation</option>
                    <option value="Sales">Sales</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Account Reconciliation">Account Reconciliation</option>
                    <option value="Payroll Management">Payroll Management</option>
                    <option value="Budgeting">Budgeting</option>
                    <option value="Forecasting">Forecasting</option>
                    <option value="Corporate Reporting">Corporate Reporting</option>
                    <option value="Public Speaking">Public Speaking</option>
                    <option value="Analytical Writing">Analytical Writing</option>
                    <option value="Cost Accounting">Cost Accounting</option>
                    <option value="Federal Tax Law">Federal Tax Law</option>
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

export default connect(mapStateToProps)(List_matched_applicants);
