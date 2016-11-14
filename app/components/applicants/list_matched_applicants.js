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
      selectedSkillsFromFilter: {},
      selectedExperiencesFromFilter: {},
      selectedskillsIds:[],
      selectedExperiencesIds:[],
      filteredApplicants: {}
    }
  }
s
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

//{***** On Change Functions *******}
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

  onJobSkillsChange(job_skills_data){

    if (jobSkillsState.includes(job_skills_data)){
        // jobSkillsState.remove(jobSkillsState.indexOf(job_skills_data)) // this should delete selection
    } else {
        jobSkillsState.push(job_skills_data) // this should add selection
   }
    // job_skills are the selected skills.
    this.setState({job_skills: jobSkillsState})

    console.log(" line 214 this.state.job_skills -->", this.state.job_skills)
    // console.log("onJobSkillsChange Clicked", this.state.job_skills)
    this.UpdateTheFilterForSkillsSelections( this.state.job_skills )
  }

  onExperienceChange(job_experiences_data){
    if (jobExperienceState.includes(job_experiences_data)){
    // jobExperienceState.remove(jobSkillsState.indexOf(job_experiences_data)) // this should delete selection
  } else {
    jobExperienceState.push(job_experiences_data) // this should add selection

  }

    this.setState({job_experiences: jobExperienceState})
    console.log("onExperienceChange Clicked", this.state.job_experiences)

    this.UpdateTheFilterForExperienceSelections( this.state.job_experiences )
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

  UpdateTheFilterForEducationLevel(name, val){

    var filteredArr;
      if (val == 'all'){
        this.state.filteredApplicants[name] = this.state.job_applicants;
      } else {

     filteredArr  = this.state.job_applicants.filter( (obj) =>{

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

 UpdateTheFilterForSkillsSelections(array){
   console.log('140 this is the sent array', array)   // ["Institutional Securities", "Asset Management"]


    // if (array.length == 0){
    //    this.state.filteredApplicants['job_skills'] = this.state.job_applicants;
    //  }


    array.forEach( (skill)=>{
      var tempArr;
      var realSkill =  skill.replace(/ /g,'_')
        if( skill === 'All' ) {
          this.state.selectedSkillsFromFilter['sk_jobs'] = this.state.job_applicants;
        } else {

         tempArr = this.state.job_applicants.filter( (obj) =>{

                     obj.skillMatching = false;

                     for (var n in obj.skills){
                       if ( obj.skills[n].includes(realSkill.toLowerCase() )){
                         obj.skillMatching = true;
                         break;
                       }
                     }

                     return obj.skillMatching == true
                   })
          console.log('160', tempArr)
          if(tempArr.length !== 0) {
          this.state.selectedSkillsFromFilter['sk_'+ skill ] = tempArr;
        }
    }

 })

 console.log('line 178',  this.state.selectedSkillsFromFilter)
 }



 UpdateTheFilterForExperienceSelections(array){
   console.log('140 this is the sent array', array)   // ["Institutional Securities", "Asset Management"]


    // if (array.length == 0){
    //    this.state.filteredApplicants['job_skills'] = this.state.job_applicants;
    //  }


    array.forEach( (exp)=>{
      var tempArr;
      var realIndustryExp =  exp.replace(/ /g,'_')
        if( exp === 'All' ) {
          this.state.selectedExperiencesFromFilter['ex_jobs'] = this.state.job_applicants;
        } else {

         tempArr = this.state.job_applicants.filter( (obj) =>{

                     obj.expMatching = false;

                     for (var n in obj.industries){
                       if ( obj.industries[n].includes(realIndustryExp.toLowerCase() )){
                         obj.expMatching = true;
                         break;
                       }
                     }

                     return obj.expMatching == true
                   })
          console.log('160', tempArr)

          if(tempArr.length !== 0) {
          this.state.selectedExperiencesFromFilter['ex_'+ exp] = tempArr;
        }
    }

 })

 console.log('line 178',  this.state.selectedExperiencesFromFilter)
 }





 // UpdateTheFilterForArray( name , array){
 //
 //      this.state.filteredApplicants[name] =  array
 //    }

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

updatetheJobSkillsFinal(){
  var JobSkills_all = Object.values(this.state.selectedSkillsFromFilter);

  var selectedIdsForSkills= []; //=> [[],[]]

  for (var i = 0; i < JobSkills_all.length; i++ ){
    var arr = [];
    JobSkills_all[i].map((el)=>{ arr.push(el.ui) })
    selectedIdsForSkills.push(arr)
  }
  console.log('this is the final skills', selectedIdsForSkills)

  var finalSkills = _.flatten(selectedIdsForSkills);
  console.log('this is the final skills', finalSkills)

  this.state.selectedskillsIds = finalSkills;

 }


 updatetheIndExpFinal(){
   var IndustryExp_all = Object.values(this.state.selectedExperiencesFromFilter);

   var selectedIdsForExperiences= []; //=> [[],[]]

   for (var i = 0; i < IndustryExp_all.length; i++ ){
     var arr = [];
     JobSkills_all[i].map((el)=>{ arr.push(el.ui) })
     selectedIdsForExperiences.push(arr)
   }
   console.log('this is the final Experiences', selectedIdsForExperiences)

   var finalExp = _.flatten(selectedIdsForExperiences);
   console.log('this is the final Experiences', finalExp)

   this.state.selectedExperiencesIds = finalExp;

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

    if (this.state.selectedskillsIds.length !== 0 ) {
      selectedIds.push(this.state.selectedskillsIds)
    }

    if (this.state.selectedExperiencesIds.length !== 0 ) {
      selectedIds.push(this.state.selectedExperiencesIds)
    }
    console.log('this is the final selectidIDS to intersect', selectedIds)

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
    // console.log('this is the final', final, ffinal)
    // var intersectionIds = _.intersection( jobsState.map((el)=>{ return el.ui}), keysoffilteredApplicants.forEach((arr)=> { arr.map((el)=>{ return el.ui})}))
    //
    // console.log('this state filteredApplicants', finalList,keysoffilteredApplicants, intersectionIds ,areIDs)

  }



  componentWillUpdate(){
    this.updatetheJobSkillsFinal();

    this.updateTheFinalList()
  }


  // onIndustryExperienceChange(industry_experience){
  //   jobExperienceState.push(industry_experience)
  //   this.setState({industry_experience: jobExperienceState})
  //   // console.log("onIndustryExperienceChange Clicked")
  //
  // }


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

      // rendering each certifications
      var certificationArry = applicant.certifications
      let certifications;
      if (applicant.certifications == "" || applicant.certifications == null){
        certifications = <div>"N/A"</div>
      } else {
        certifications = certificationArry.map((el)=>{
          return <div className="ui list">
                    <div className="item">{el}</div>
                  </div>
        })
      }

      // rendering each school
      var schoolArry = applicant.school
      let school;
      if (applicant.school == "" || applicant.school == null){
        school = <div>"N/A"</div>
      } else {
        school = schoolArry.map((el)=>{
          var splitedArry = el.split(",").map((el)=>{return el})
          return <div className="ui list">
                    <div className="item">
                    {splitedArry[0]}
                    <br/>
                    {splitedArry[1]}-{splitedArry[2]}</div>
                  </div>
        })
      }

      // rendering each work history
      var workArry = applicant.work_history
      let work;
      if (applicant.work_history == "" || applicant.work_history == null){
        work = <div>"N/A"</div>
      } else {
        work = workArry.map((el)=>{
          var workArry = el.split(",").map((el)=>{return el})
          return <div className="ui list">
                    <div className="item">
                    {workArry[0]}
                    <br/>
                    {workArry[1]}</div>
                  </div>
        })
      }

      const url = 'https://apex-database.herokuapp.com/images/applicant_profile_img/' + applicant.profile_image
      // console.log("image url  .... ", url)
      const link = `/Matched_applicant/` + applicant.ui
      return <Link to={link} className="card list" key={applicant.ui} >
              <div className="content">
                <img className="left floated tiny ui image" src={url} alt="profile pic"/>
                <div className="header">
                  <br/>
                  {applicant.name} {applicant.last_name}
                </div>
                <div className="meta">
                  {applicant.desired_industry}
                </div>
                <div className="description">
                  <span>Education:</span>
                  {school}
                  <span>Experience:</span>
                  {work}
                  <span>Certifications:</span>
                  {certifications}
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
                {/* Years of Experience */}
                <div>
                  <label name="experience_level">Work Experience (Full Employment)</label>
                  <select name="experience_level" id="" className="ui fluid dropdown" value={this.state.rience_level}
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

                {/* Experiences */}
                <div>
                  <label name="job_riences">Experiences</label>
                  <select multiple="true" name="job_experiences" className="ui fluid normal dropdown"
                  value={this.state.job_experiences}
                  onChange={e => this.onExperienceChange(e.target.value)}>
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
