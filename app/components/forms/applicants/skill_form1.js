import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery'; // requires jQuery for AJAX request
import {browserHistory} from 'react-router';
import { Link } from 'react-router'


const First_column_skills = [
      "wealth_management_level",
      "investment_banking_level",
      "asset_management_level",
      "institutional_securities_level",
      "commercial_banking_level",
      "retirement_solutions_level",
      "portfolio_strategy_level"]

      let Second_column_skills = [
      "financial_audit_level",
      "tax_preparation_level",
      "consulting_level",
      "advisory_services_level",
      "compliance_level",
      "human_resources_level",
      "underwriting_level"
    ]
      let Third_column_skills = [
      "marketing_level",
      "sales_level",
      "financial_analysis_level",
      "derivatives_level",
      "manda_activity_level",
      "venture_capital_level",
      "client_relationship_level",
      "microsoft_office_level",
      "quickbooks_level",
      "bookkeeping_level",
      "tax_software_level",
      "it_level",
      "data_entry_level",
      "financial_statement_level",
      "financial_planning_level",
      "debt_consolidation_level",
      "sales_level",
      "web_development_level",
      "account_reconciliation_level",
      "budgeting_level",
      "forecasting_level",
      "corporate_reporting_level",
      "public_speaking_level",
      "analytical_writing_level",
      "cost_accounting_level",
      "federal_tax_law_level" ]


class Applicant_skill_form1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
        wealth_management_level: '',
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
      case 'wealth_management_level': this.setState({ wealth_management_level:level }); break;
      case 'investment_banking_level': this.setState({ investment_banking_level:level }); break;
      case 'asset_management_level': this.setState({ asset_management_level:level }); break;
      case 'institutional_securities_level': this.setState({ wealth_management_level:level }); break;
      case 'commercial_banking_level': this.setState({ commercial_banking_level:level }); break;
      case 'retirement_solutions_level': this.setState({ retirement_solutions_level:level }); break;
      case 'portfolio_strategy_level': this.setState({ portfolio_strategy_level:level }); break;
      case 'financial_audit_level': this.setState({ financial_audit_level:level }); break;
      case 'tax_preparation_level': this.setState({ tax_preparation_level:level }); break;
      case 'consulting_level': this.setState({ consulting_level:level }); break;
      case 'advisory_services_level': this.setState({ advisory_services_level:level }); break;
      case 'compliance_level': this.setState({ compliance_level:level }); break;
      case 'underwriting_level': this.setState({ underwriting_level:level }); break;
      case 'marketing_level': this.setState({ marketing_level:level }); break;
      case 'sales_level': this.setState({ sales_level:level }); break;
      case 'financial_analysis_level': this.setState({ financial_analysis_level:level }); break;
      case 'derivatives_level': this.setState({ derivatives_level:level }); break;
      case 'manda_activity_level': this.setState({ manda_activity_level:level }); break;
      case 'venture_capital_level': this.setState({ venture_capital_level:level }); break;
      case 'client_relationship_level': this.setState({ client_relationship_level:level }); break;
      case 'microsoft_office_level': this.setState({ microsoft_office_level:level }); break;
      case 'quickbooks_level': this.setState({ quickbooks_level:level }); break;
      case 'bookkeeping_level': this.setState({ bookkeeping_level:level }); break;
      case 'tax_software_level': this.setState({ tax_software_level:level }); break;
      case 'it_level': this.setState({ it_level:level }); break;
      case 'data_entry_level': this.setState({ data_entry_level:level }); break;
      case 'financial_planning_level': this.setState({ financial_planning_level:level }); break;
      case 'sales_level': this.setState({ sales_level:level }); break;
      case 'web_development_level': this.setState({ web_development_level:level }); break;
      case 'account_reconciliation_level': this.setState({ account_reconciliation_level:level }); break;
      case 'budgeting_level': this.setState({ budgeting_level:level }); break;
      case 'forecasting_level': this.setState({ forecasting_level:level }); break;
      case 'public_speaking_level': this.setState({ public_speaking_level:level }); break;
      case 'analytical_writing_level': this.setState({ analytical_writing_level:level }); break;
      case 'cost_accounting_level': this.setState({ cost_accounting_level:level }); break;
      case 'federal_tax_law_level': this.setState({ federal_tax_law_level:level }); break;
  }

  console.log(this.state)
}

  render(){


    var Firstcolumn_skills = First_column_skills.map( (el)=>{
      var text = el.replace(/_/g,' ')
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

    var Secondcolumn_skills = Second_column_skills.map( (el)=>{
      var text = el.replace(/_/g,' ')
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


    var Thirdcolumn_skills = Third_column_skills.map( (el)=>{
      var text = el.replace(/_/g,' ')
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
      </div>
    )}

}


export default Applicant_skill_form1
