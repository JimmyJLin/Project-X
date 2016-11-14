import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery'; // requires jQuery for AJAX request
import {browserHistory} from 'react-router';
import { Link } from 'react-router'


const All_Experiences = [
      [
      "Wealth_Wanagement",
      "Investment_Banking",
      "Asset_Management",
      "Institutional_Securities",
      "Commercial_Banking",
      "Retirement_Solutions",
      "Portfolio_Strategy"],
      [
      "Financial_Audit",
      "Tax_Preparation",
      "Consulting",
      "Advisory_Services",
      "Compliance",
      "Human_Resources",
      "Underwriting"
    ],
    [
      "Marketing",
      "Sales",
      "Financial_Analysis",
      "Derivatives",
      "M_&_A",
      "Venture_Capital",
      "Forensic Accounting"
    ],
    [
      "Client_Relationship",
      "Microsoft_Office",
      "Quickbooks",
      "Bookkeeping",
      "Tax_Software",
      "IT",
      "Data_Entry"],
      [
      "Financial_Statement",
      "Financial_Planning",
      "Debt_Consolidation",
      "Sales",
      "Web_Development",
      "Account_Reconciliation",
      "Payroll_Management"],
      [
      "Budgeting",
      "Forecasting",
      "Corporate_Reporting",
      "Public_Speaking",
      "Analytical_Writing",
      "Cost_Accounting",
      "Federal_Tax_Law" ]]


class Applicant_skill_form_backup extends Component {

  constructor(props) {
    super(props);

    this.state = {
        wealth_wanagement: '',
        investment_banking: '',
        asset_management: '',
        institutional_securities: '',
        commercial_banking: '',
        retirement_solutions: '',
        portfolio_strategy: '',
        financial_audit: '',
        tax_preparation: '',
        consulting: '',
        advisory_services: '',
        compliance: '',
        human_resources: '',
        underwriting: '',
        marketing: '',
        sales: '',
        financial_analysis: '',
        derivatives: '',
        manda_activity: '',
        venture_capital: '',
        forensic_accounting: '',
        client_relationship: '',
        microsoft_office: '',
        quickbooks: '',
        bookkeeping: '',
        tax_software: '',
        it: '',
        data_entry: '',
        financial_statement: '',
        financial_planning: '',
        debt_consolidation: '',
        sales: '',
        web_development: '',
        account_reconciliation: '',
        budgeting: '',
        forecasting: '',
        corporate_reporting: '',
        public_speaking: '',
        analytical_writing: '',
        cost_accounting: '',
        federal_tax_law: ''
      }
    }

  // componentDidMount(){
  //   if(localStorage.getItem('isLoaded') !== 'yes'){
  //     localStorage.setItem('isLoaded', 'yes');
  //     window.location.reload(true)
  //   }
  //
  //   window.setInterval(changeLoaded, 500)
  //
  //   function changeLoaded(){
  //     localStorage.setItem('isLoaded', 'no');
  //   }
  //
  //   window.onbeforeunload = function () {
  //     window.scrollTo(0, 0);
  //   }
  //
  // }

  seeValue(e){
    e.preventDefault;
    // console.log("line 130", e.target.id, e.target.value)
    var name = e.target.id;
    var level = e.target.value;
    console.log("line 133", name,level)

    var domEl = e.target.id
    console.log("line 136", domEl)
    var parentEl = document.getElementById(domEl).closest('section').html(' ' + level)
    console.log("line 138", parentEl)

    switch(name){
      case 'Wealth_Wanagement': this.setState({ wealth_wanagement:level }); break;
      case 'Investment_Banking': this.setState({ investment_banking:level }); break;
      case 'Asset_Management': this.setState({ asset_management:level }); break;
      case 'Institutional_Securities': this.setState({ wealth_management:level }); break;
      case 'Commercial_Banking': this.setState({ commercial_banking:level }); break;
      case 'Retirement_Solutions': this.setState({ retirement_solutions:level }); break;
      case 'Portfolio_Strategy': this.setState({ portfolio_strategy:level }); break;
      case 'Financial_Audit': this.setState({ financial_audit:level }); break;
      case 'Tax_Preparation': this.setState({ tax_preparation:level }); break;
      case 'Consulting': this.setState({ consulting:level }); break;
      case 'Advisory_Services': this.setState({ advisory_services:level }); break;
      case 'Compliance': this.setState({ compliance:level }); break;
      case 'Underwriting': this.setState({ underwriting:level }); break;
      case 'Marketing': this.setState({ marketing:level }); break;
      case 'Sales': this.setState({ sales:level }); break;
      case 'Financial_Analysis': this.setState({ financial_analysis:level }); break;
      case 'Derivatives': this.setState({ derivatives:level }); break;
      case 'M_&_A': this.setState({ manda_activity:level }); break;
      case 'Venture_Capital': this.setState({ venture_capital:level }); break;
      case 'Forensic_Accounting': this.setState({ forensic_accounting:level }); break;
      case 'Client_Relationship': this.setState({ client_relationship:level }); break;
      case 'Microsoft_Office': this.setState({ microsoft_office:level }); break;
      case 'Quickbooks': this.setState({ quickbooks:level }); break;
      case 'Bookkeeping': this.setState({ bookkeeping:level }); break;
      case 'Tax_Software': this.setState({ tax_software:level }); break;
      case 'IT': this.setState({ it:level }); break;
      case 'Data_Entry': this.setState({ data_entry:level }); break;
      case 'Financial_Planning': this.setState({ financial_planning:level }); break;
      case 'Sales': this.setState({ sales:level }); break;
      case 'Web_Development': this.setState({ web_development:level }); break;
      case 'Account_Reconciliation': this.setState({ account_reconciliation:level }); break;
      case 'Budgeting': this.setState({ budgeting:level }); break;
      case 'Forecasting': this.setState({ forecasting:level }); break;
      case 'Public_Speaking': this.setState({ public_speaking:level }); break;
      case 'Analytical_Writing': this.setState({ analytical_writing:level }); break;
      case 'Cost_Accounting': this.setState({ cost_accounting:level }); break;
      case 'Federal_Tax_Law': this.setState({ federal_tax_law:level }); break;
      case 'Human_Resources': this.setState({ human_resources:level }); break;
      case 'Corporate_Reporting': this.setState({ corporate_reporting:level }); break;
      case 'Debt_Consolidation': this.setState({ debt_consolidation:level }); break;
      case 'Financial_Statement': this.setState({ financial_statement:level }); break;
  }

}

 handleSubmitData(e){
   e.preventDefault;

   modalState = true;
   this.setState({
     modal: true
   })


   var data = this.state;
  //  postSkillDetails(data)
   var keys = Object.keys(data);

   console.log('keys', keys)
   var skillslevel = {
     user_id : this.props.auth.user.id,
   }
   var industrieslevel = {
     user_id : this.props.auth.user.id,
   }
   for (var i = 0; i< keys.length; i++){
       if ( data[keys[i] ] !== '' && i <20 ){
        industrieslevel.industry_name = keys[i];
        industrieslevel.level = data[keys[i]];
           postIndustryLevels(industrieslevel)
      } else if ( data[keys[i] ] !== '' && i > 20 ){
        skillslevel.skill_name = keys[i];
        skillslevel.level = data[keys[i]];
           postSkillsLevels(skillslevel)
       };
      }

  alert("Application Form Submitted, Press OK to continue")

  browserHistory.push('/applicant_profile')

 }



  render(){


    var Firstcolumn_skills = All_Experiences[0].map( (el)=>{
      var text = el.replace(/_/g,' ')

      return (
      <section className="ui dropdown item" key ={el.id}>
         {text}
        <i className="dropdown icon"></i>
        <div className="menu">
          <option className="item" id={el} value ="0-2 years" onClick={ this.seeValue.bind(this)}>0-2 years</option>
          <option className="item"  id={el} value ="2-5 years" onClick={ this.seeValue.bind(this)}> 2-5 years</option>
          <option className="item"  id={el}  value ="5+ years" onClick={ this.seeValue.bind(this)} > 5+ years</option>
        </div>
      </section>
    )
    })

    var Secondcolumn_skills = All_Experiences[1].map( (el)=>{
      var text = el.replace(/_/g,' ')
      var text = text.replace(/level/g,'')
      return (
      <section className="ui dropdown item" id = {el.id}>
         {text}
        <i className="dropdown icon"></i>
        <div className="menu">
          <option className="item" id={el} value ="0-2 years" onClick={ this.seeValue.bind(this)}>0-2 years</option>
          <option className="item"  id={el} value ="2-5 years" onClick={ this.seeValue.bind(this)}> 2-5 years</option>
          <option className="item"  id={el}  value ="5+ years" onClick={ this.seeValue.bind(this)} > 5+ years</option>
        </div>
      </section>
    )
    })

    var Thirdcolumn_skills = All_Experiences[2].map( (el)=>{
      var text = el.replace(/_/g,' ')
      var text = text.replace(/level/g,'')
      return (
      <section className="ui dropdown item" key = {el.id}>
         {text}
        <i className="dropdown icon"></i>
        <div className="menu">
          <option className="item" id={el} value ="0-2 years" onClick={ this.seeValue.bind(this)}>0-2 years</option>
          <option className="item"  id={el} value ="2-5 years" onClick={ this.seeValue.bind(this)}> 2-5 years</option>
          <option className="item"  id={el}  value ="5+ years" onClick={ this.seeValue.bind(this)} > 5+ years</option>
        </div>
      </section>
    )
    })

    var Forthcolumn_skills = All_Experiences[3].map( (el)=>{
      var text = el.replace(/_/g,' ')
      var text = text.replace(/level/g,'')
      return (
      <section className="ui dropdown item" key = {el.id}>
         {text}
        <i className="dropdown icon"></i>
        <div className="menu">
          <option className="item" id={el} value ="0-2 years" onClick={ this.seeValue.bind(this)}>0-2 years</option>
          <option className="item"  id={el} value ="2-5 years" onClick={ this.seeValue.bind(this)}> 2-5 years</option>
          <option className="item"  id={el}  value ="5+ years" onClick={ this.seeValue.bind(this)} > 5+ years</option>
        </div>
      </section>
    )
    })

    var Fifthcolumn_skills = All_Experiences[4].map( (el)=>{
      var text = el.replace(/_/g,' ')
      var text = text.replace(/level/g,'')
      return (
      <section className="ui dropdown item" key = {el.id}>
         {text}
        <i className="dropdown icon"></i>
        <div className="menu">
          <option className="item" id={el} value ="0-2 years" onClick={ this.seeValue.bind(this)}>0-2 years</option>
          <option className="item"  id={el} value ="2-5 years" onClick={ this.seeValue.bind(this)}> 2-5 years</option>
          <option className="item"  id={el}  value ="5+ years" onClick={ this.seeValue.bind(this)} > 5+ years</option>
        </div>
      </section>
    )
    })


    var lastcolumn_skills = All_Experiences[5].map( (el)=>{
      var text = el.replace(/_/g,' ')
      var text = text.replace(/level/g,'')
      return (
      <section className="ui dropdown item" key = {el.id}>
         {text}
        <i className="dropdown icon"></i>
        <div className="menu">
          <option className="item" id={el} value ="0-2 years" onClick={ this.seeValue.bind(this)}>0-2 years</option>
          <option className="item"  id={el} value ="2-5 years" onClick={ this.seeValue.bind(this)}> 2-5 years</option>
          <option className="item"  id={el}  value ="5+ years" onClick={ this.seeValue.bind(this)} > 5+ years</option>
        </div>
      </section>
    )
    })
    const { isAuthenticated } = this.props.auth;

    return(
      <div id="applicant_profile_form">
        <div id="industry_experience">
          <h1> Do you hold Industry experience in any of the following areas? </h1>
          <div className="ui equal width grid stackable">
            <div className="column">
              <div className="ui vertical menu">
              {/* FIRST COLUMN SKILLS */}
              {Firstcolumn_skills}
              </div>
            </div>
            <div className="column">
              <div className="ui vertical menu">
              {/* second column starts with Financial Audit */}
              {Secondcolumn_skills}

              </div>
            </div>
            <div className="column">
              <div className="ui vertical menu">
              {/* Third Column Marketing */}
              {Thirdcolumn_skills}

              </div>
            </div>
          </div>
        </div>
        <div id="industry_experience">
          <h1> Select Your Skills / Areas of Expertise </h1>
          <div className="ui equal width grid stackable">
            <div className="column">
              <div className="ui vertical menu">
              {/* FIRST COLUMN SKILLS */}
              {Forthcolumn_skills}
              </div>
            </div>
            <div className="column">
              <div className="ui vertical menu">
              {/* second column starts with Financial Audit */}
              {Fifthcolumn_skills}

              </div>
            </div>
            <div className="column">
              <div className="ui vertical menu">
              {/* Third Column Marketing */}
              {lastcolumn_skills}

              </div>
            </div>
          </div>
        </div>
        <br/>
        <button className="ui right floated button large" onClick={this.handleSubmitData.bind(this)}>Active Profile</button>
      </div>
    )}

}

function postSkillsLevels(data){
  console.log('posted data postSkillsLevels', data)
  $.post('https://apex-database.herokuapp.com/api/applicants/new_skillslevels', data)
}

function postIndustryLevels(data){
  console.log('posted data postIndustryLevels', data)
  $.post('https://apex-database.herokuapp.com/api/applicants/new_industrylevels', data)
}


Applicant_skill_form_backup.propTypes = {
  auth: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}


export default connect(mapStateToProps)(Applicant_skill_form_backup);
