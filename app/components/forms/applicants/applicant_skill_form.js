import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery'; // requires jQuery for AJAX request
import {browserHistory} from 'react-router';
import { Link } from 'react-router'


const All_Experiences = [
      [
      "Wealth_Wanagement_level",
      "Investment_Banking_level",
      "Asset_Management_level",
      "Institutional_Securities_level",
      "Commercial_Banking_level",
      "Retirement_Solutions_level",
      "Portfolio_Strategy_level"],
      [
      "Financial_Audit_level",
      "Tax_Preparation_level",
      "Consulting_level",
      "Advisory_Services_level",
      "Compliance_level",
      "Human_Resources_level",
      "Underwriting_level"
    ],
    [
      "Marketing_level",
      "Sales_level",
      "Financial_Analysis_level",
      "Derivatives_level",
      "M_&_A_level",
      "Venture_Capital_level",
      "Forensic Accounting"
    ],
    [
      "Client_Relationship_level",
      "Microsoft_Office_level",
      "Quickbooks_level",
      "Bookkeeping_level",
      "Tax_Software_level",
      "IT_level",
      "Data_Entry_level"],
      [
      "Financial_Statement_level",
      "Financial_Planning_level",
      "Debt_Consolidation_level",
      "Sales_level",
      "Web_Development_level",
      "Account_Reconciliation_level",
      "Payroll_Management"],
      [
      "Budgeting_level",
      "Forecasting_level",
      "Corporate_Reporting_level",
      "Public_Speaking_level",
      "Analytical_Writing_level",
      "Cost_Accounting_level",
      "Federal_Tax_Law_level" ]]


class Applicant_skill_form extends Component {

  constructor(props) {
    super(props);

    this.state = {
        wealth_wanagement_level: '',
        investment_banking_level: '',
        asset_management_level: '',
        institutional_securities_level: '',
        commercial_banking_level: '',
        retirement_solutions_level: '',
        portfolio_strategy_level: '',
        financial_audit_level: '',
        tax_preparation_level: '',
        consulting_level: '',
        advisory_services_level: '',
        compliance_level: '',
        human_resources_level: '',
        underwriting_level: '',
        marketing_level: '',
        sales_level: '',
        financial_analysis_level: '',
        derivatives_level: '',
        manda_activity_level: '',
        venture_capital_level: '',
        client_relationship_level: '',
        microsoft_office_level: '',
        quickbooks_level: '',
        bookkeeping_level: '',
        tax_software_level: '',
        it_level: '',
        data_entry_level: '',
        financial_statement_level: '',
        financial_planning_level: '',
        debt_consolidation_level: '',
        sales_level: '',
        web_development_level: '',
        account_reconciliation_level: '',
        budgeting_level: '',
        forecasting_level: '',
        corporate_reporting_level: '',
        public_speaking_level: '',
        analytical_writing_level: '',
        cost_accounting_level: '',
        federal_tax_law_level: ''
      }
    }


  seeValue(e){
    e.preventDefault;
    console.log( e.target.id, e.target.value)
    var name = e.target.id;
    var level = e.target.value;
    console.log(name,level)

    switch(name){
      case 'Wealth_Wanagement_level': this.setState({ wealth_wanagement_level:level }); break;
      case 'Investment_Banking_level': this.setState({ investment_banking_level:level }); break;
      case 'Asset_Management_level': this.setState({ asset_management_level:level }); break;
      case 'Institutional_Securities_level': this.setState({ wealth_management_level:level }); break;
      case 'Commercial_Banking_level': this.setState({ commercial_banking_level:level }); break;
      case 'Retirement_Solutions_level': this.setState({ retirement_solutions_level:level }); break;
      case 'Portfolio_Strategy_level': this.setState({ portfolio_strategy_level:level }); break;
      case 'Financial_Audit_level': this.setState({ financial_audit_level:level }); break;
      case 'Tax_Preparation_level': this.setState({ tax_preparation_level:level }); break;
      case 'Consulting_level': this.setState({ consulting_level:level }); break;
      case 'Advisory_Services_level': this.setState({ advisory_services_level:level }); break;
      case 'Compliance_level': this.setState({ compliance_level:level }); break;
      case 'Underwriting_level': this.setState({ underwriting_level:level }); break;
      case 'Marketing_level': this.setState({ marketing_level:level }); break;
      case 'Sales_level': this.setState({ sales_level:level }); break;
      case 'Financial_Analysis_level': this.setState({ financial_analysis_level:level }); break;
      case 'Derivatives_level': this.setState({ derivatives_level:level }); break;
      case 'M_&_A_level': this.setState({ manda_activity_level:level }); break;
      case 'Venture_Capital_level': this.setState({ venture_capital_level:level }); break;
      case 'Client_Relationship_level': this.setState({ client_relationship_level:level }); break;
      case 'Microsoft_Office_level': this.setState({ microsoft_office_level:level }); break;
      case 'Quickbooks_level': this.setState({ quickbooks_level:level }); break;
      case 'Bookkeeping_level': this.setState({ bookkeeping_level:level }); break;
      case 'Tax_Software_level': this.setState({ tax_software_level:level }); break;
      case 'IT_level': this.setState({ it_level:level }); break;
      case 'Data_Entry_level': this.setState({ data_entry_level:level }); break;
      case 'Financial_Planning_level': this.setState({ financial_planning_level:level }); break;
      case 'Sales_level': this.setState({ sales_level:level }); break;
      case 'Web_Development_level': this.setState({ web_development_level:level }); break;
      case 'Account_Reconciliation_level': this.setState({ account_reconciliation_level:level }); break;
      case 'Budgeting_level': this.setState({ budgeting_level:level }); break;
      case 'Forecasting_level': this.setState({ forecasting_level:level }); break;
      case 'Public_Speaking_level': this.setState({ public_speaking_level:level }); break;
      case 'Analytical_Writing_level': this.setState({ analytical_writing_level:level }); break;
      case 'Cost_Accounting_level': this.setState({ cost_accounting_level:level }); break;
      case 'Federal_Tax_Law_level': this.setState({ federal_tax_law_level:level }); break;
      case 'Human_Resources_level': this.setState({ human_resources_level:level }); break;
      case 'Corporate_Reporting_level': this.setState({ corporate_reporting_level:level }); break;
      case 'Debt_Consolidation_level': this.setState({ debt_consolidation_level:level }); break;
      case 'Financial_Statement_level': this.setState({ financial_statement_level:level }); break;

  }

}

 handleSubmitData(e){
   e.preventDefault;

   console.log(this.state)


 }


  render(){

    var Firstcolumn_skills = All_Experiences[0].map( (el)=>{
      var text = el.replace(/_/g,' ')
      var text = text.replace(/level/g,'')
      return (
      <div className="ui dropdown item" key = {el.id}>
         {text}
        <i className="dropdown icon"></i>
        <div className="menu">
          <option className="item" id={el} value ="0-2 years" onClick={ this.seeValue.bind(this)}>0-2 years</option>
          <option className="item"  id={el} value ="2-5 years" onClick={ this.seeValue.bind(this)}> 2-5 years</option>
          <option className="item"  id={el}  value ="5+ years" onClick={ this.seeValue.bind(this)} > 5+ years</option>
        </div>
      </div>
    )
    })

    var Secondcolumn_skills = All_Experiences[1].map( (el)=>{
      var text = el.replace(/_/g,' ')
      var text = text.replace(/level/g,'')
      return (
      <div className="ui dropdown item" key = {el.id}>
         {text}
        <i className="dropdown icon"></i>
        <div className="menu">
          <option className="item" id={el} value ="0-2 years" onClick={ this.seeValue.bind(this)}>0-2 years</option>
          <option className="item"  id={el} value ="2-5 years" onClick={ this.seeValue.bind(this)}> 2-5 years</option>
          <option className="item"  id={el}  value ="5+ years" onClick={ this.seeValue.bind(this)} > 5+ years</option>
        </div>
      </div>
    )
    })

    var Thirdcolumn_skills = All_Experiences[2].map( (el)=>{
      var text = el.replace(/_/g,' ')
      var text = text.replace(/level/g,'')
      return (
      <div className="ui dropdown item" key = {el.id}>
         {text}
        <i className="dropdown icon"></i>
        <div className="menu">
          <option className="item" id={el} value ="0-2 years" onClick={ this.seeValue.bind(this)}>0-2 years</option>
          <option className="item"  id={el} value ="2-5 years" onClick={ this.seeValue.bind(this)}> 2-5 years</option>
          <option className="item"  id={el}  value ="5+ years" onClick={ this.seeValue.bind(this)} > 5+ years</option>
        </div>
      </div>
    )
    })

    var Forthcolumn_skills = All_Experiences[3].map( (el)=>{
      var text = el.replace(/_/g,' ')
      var text = text.replace(/level/g,'')
      return (
      <div className="ui dropdown item" key = {el.id}>
         {text}
        <i className="dropdown icon"></i>
        <div className="menu">
          <option className="item" id={el} value ="0-2 years" onClick={ this.seeValue.bind(this)}>0-2 years</option>
          <option className="item"  id={el} value ="2-5 years" onClick={ this.seeValue.bind(this)}> 2-5 years</option>
          <option className="item"  id={el}  value ="5+ years" onClick={ this.seeValue.bind(this)} > 5+ years</option>
        </div>
      </div>
    )
    })

    var Fifthcolumn_skills = All_Experiences[4].map( (el)=>{
      var text = el.replace(/_/g,' ')
      var text = text.replace(/level/g,'')
      return (
      <div className="ui dropdown item" key = {el.id}>
         {text}
        <i className="dropdown icon"></i>
        <div className="menu">
          <option className="item" id={el} value ="0-2 years" onClick={ this.seeValue.bind(this)}>0-2 years</option>
          <option className="item"  id={el} value ="2-5 years" onClick={ this.seeValue.bind(this)}> 2-5 years</option>
          <option className="item"  id={el}  value ="5+ years" onClick={ this.seeValue.bind(this)} > 5+ years</option>
        </div>
      </div>
    )
    })


    var lastcolumn_skills = All_Experiences[5].map( (el)=>{
      var text = el.replace(/_/g,' ')
      var text = text.replace(/level/g,'')
      return (
      <div className="ui dropdown item" key = {el.id}>
         {text}
        <i className="dropdown icon"></i>
        <div className="menu">
          <option className="item" id={el} value ="0-2 years" onClick={ this.seeValue.bind(this)}>0-2 years</option>
          <option className="item"  id={el} value ="2-5 years" onClick={ this.seeValue.bind(this)}> 2-5 years</option>
          <option className="item"  id={el}  value ="5+ years" onClick={ this.seeValue.bind(this)} > 5+ years</option>
        </div>
      </div>
    )
    })


    return(
      <div id="applicant_profile_form">
        <div id="industry_experience">
          <h1> Do you hold Industry experience in any of the following areas? </h1>
          <div className="ui equal width grid">
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
          <div className="ui equal width grid">
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
        <button className="ui right floated blue button" onClick={this.handleSubmitData.bind(this)}>Active Profile</button>
      </div>
    )}

}


export default Applicant_skill_form
