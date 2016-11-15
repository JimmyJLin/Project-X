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
      job_experiences :'',
      job_skills : '',
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

//{***** On Change Functions *******}
  onFilterChange(name, val){

    console.log('name', 'val', name,val )
    this.setState({ [name]: val});
    // console.log(this.state.experience_level)
    console.log("onFilterChange Clicked", name, val)
    //  this.updateTheList()
    if (name == 'education_level' || name == 'job_experiences' || name == 'job_skills'){
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
          case 'job_experiences' :
          filteredArr  = this.state.job_applicants.filter( (obj) =>{

                         obj.Matching = false;
                         for (var m in obj.industries){
                           console.log('job_experiences', obj.industries[m], val )
                           if( obj.industries[m], val.includes(val)){
                             obj.Matching = true;
                             break;
                           }
                         }
                         return obj.Matching == true
                       })
          break;
          case 'job_skills' :
          filteredArr  = this.state.job_applicants.filter( (obj) =>{
                         obj.Matching = false;
                         for (var s in obj.skills){
                           console.log('job_experiences', obj.skills[s], val )
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
                     console.log('Line 89 this is my filtered Array', filteredArr)

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
    // console.log('this is the final', final, ffinal)
    // var intersectionIds = _.intersection( jobsState.map((el)=>{ return el.ui}), keysoffilteredApplicants.forEach((arr)=> { arr.map((el)=>{ return el.ui})}))
    //
    // console.log('this state filteredApplicants', finalList,keysoffilteredApplicants, intersectionIds ,areIDs)

  }



  componentWillUpdate(){
    this.updateTheFinalList()
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

    return(
      <div id="list_jobs">
        <h1>Current Matched Applicant Lists</h1>

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
                  </select>
                </div>

                {/* Years of Experience */}
                <div>
                  <label name="experience_level">Work Experience (Full Employment)</label>
                  <select name="experience_level" id="" className="ui fluid dropdown" value={this.state.experience_level}
                  onChange={e => this.onFilterChange(e.target.name, e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="all">All</option>
                    <option value="Entry Level">Entry (0-2 years)</option>
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

                {/* Skills */}
                <div>
                  <label name="job_skills">Experiences</label>
                  <select name="job_skills" className="ui fluid  dropdown"
                  value={this.state.job_skills}
                  onChange={e => this.onFilterChange(e.target.name, e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="all">All</option>
                    <option value="client_relations">Client Relations</option>
                    <option value="microsoft_office">Microsoft Office</option>
                    <option value="quickbooks">Quickbooks</option>
                    <option value="bookkeeping">Bookkeeping</option>
                    <option value="tax_software">Tax Software</option>
                    <option value="it">IT</option>
                    <option value="data_entry">Data Entry</option>
                    <option value="financial_statement">Financial Statement</option>
                    <option value="financial_planning">Financial Planning</option>
                    <option value="debt_consolidation">Debt Consolidation</option>
                    <option value="sales">Sales</option>
                    <option value="web_development">Web Development</option>
                    <option value="account_reconciliation">Account Reconciliation</option>
                    <option value="payroll_management">Payroll Management</option>
                    <option value="budgeting">Budgeting</option>
                    <option value="forecasting">Forecasting</option>
                    <option value="corporate_reporting">Corporate Reporting</option>
                    <option value="public_speaking">Public Speaking</option>
                    <option value="analytical_writing">Analytical Writing</option>
                    <option value="cost_accounting">Cost Accounting</option>
                    <option value="federal_tax_law">Federal Tax Law</option>
                  </select>
                </div>

                {/* Experiences */}
                <div>
                  <label name="job_experiences">Skills</label>
                  <select name="job_experiences" className="ui fluid  dropdown"
                    value={this.state.job_experiences}
                    onChange={e => this.onFilterChange(e.target.name, e.target.value)}>
                    <option value="">Please Select</option>
                    <option value="all">All</option>
                    <option value="wealth_management">Wealth Management</option>
                    <option value="investment_banking">Investment Banking</option>
                    <option value="asset_management">Asset Management</option>
                    <option value="institutional_securities">Institutional Securities</option>
                    <option value="commericial_banking">Commericial Banking</option>
                    <option value="retirement_solutions">Retirement Solutions</option>
                    <option value="portfolio_strategy">Portfolio Strategy</option>
                    <option value="financial_audit">Financial Audit</option>
                    <option value="tax_preparation">Tax Preparation</option>
                    <option value="consulting">Consulting</option>
                    <option value="advisory_services">Advisory Services</option>
                    <option value="compliance">Compliance</option>
                    <option value="human_resources">Human Resources</option>
                    <option value="underwriting">Underwriting</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="financial_analysis">Financial Analysis</option>
                    <option value="derivatives">Derivatives</option>
                    <option value="manda_activity">M&A Activity</option>
                    <option value="venture_capitol">Venture Capitol</option>
                    <option value="forensice_acounting">Forensice Accounting</option>
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
