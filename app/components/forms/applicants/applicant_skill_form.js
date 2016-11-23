import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery'; // requires jQuery for AJAX request
import {browserHistory} from 'react-router';
import { Link } from 'react-router'

let industries = [];

class Applicant_skill_form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      wealth_management: '',
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
      book_keeping: '',
      tax_software: '',
      it: '',
      data_entry: '',
      financial_statement_analysis_analysis: '',
      financial_planning: '',
      debt_consolidation: '',
      sales: '',
      web_development: '',
      account_reconciliation: '',
      payroll_management: '',
      budgeting: '',
      forecasting: '',
      corporate_reporting: '',
      public_speaking: '',
      analytical_writing: '',
      cost_accounting: '',
      federal_tax_law: ''
    }

  }

  componentDidMount(){

    if(localStorage.getItem('isLoaded') !== 'yes'){
      localStorage.setItem('isLoaded', 'yes');
      window.location.reload(true)
    }

    window.setInterval(changeLoaded, 500)

    function changeLoaded(){
      localStorage.setItem('isLoaded', 'no');
    }

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }

  // handle posting skill / experiences
  handleSubmitData(e){
    e.preventDefault();
    let user_id = localStorage.id
    let data = {
      wealth_management: this.state.wealth_management,
      asset_management: this.state.asset_management,
      institutional_securities: this.state.institutional_securities,
      commercial_banking: this.state.commercial_banking,
      retirement_solutions: this.state.retirement_solutions,
      portfolio_strategy: this.state.portfolio_strategy,
      financial_audit: this.state.financial_audit,
      tax_preparation: this.state.tax_preparation,
      consulting: this.state.consulting,
      advisory_services: this.state.advisory_services,
      compliance: this.state.compliance,
      human_resources: this.state.human_resources,
      underwriting: this.state.underwriting,
      marketing: this.state.marketing,
      sales: this.state.sales,
      financial_analysis: this.state.financial_analysis,
      derivatives: this.state.derivatives,
      manda_activity: this.state.manda_activity,
      venture_capital: this.state.venture_capital,
      forensic_accounting: this.state.forensic_accounting,
      client_relations: this.state.client_relationship,
      microsoft_office: this.state.microsoft_office,
      quickbooks: this.state.quickbooks,
      book_keeping: this.state.book_keeping,
      tax_software: this.state.tax_software,
      it: this.state.it,
      data_entry: this.state.data_entry,
      financial_statement_analysis: this.state.financial_statement_analysis,
      financial_planning: this.state.financial_planning,
      debt_consolidation: this.state.debt_consolidation,
      sales: this.state.sales,
      web_development: this.state.web_development,
      account_reconciliation: this.state.account_reconciliation,
      payroll_management: this.state.payroll_management,
      budgeting: this.state.budgeting,
      forecasting: this.state.forecasting,
      corporate_reporting: this.state.corporate_reporting,
      public_speaking: this.state.public_speaking,
      analytical_writing: this.state.analytical_writing,
      cost_accounting: this.state.cost_accounting,
      federal_tax_law: this.state.federal_tax_law

    }

    var keys = Object.keys(data);
    console.log('this is the keys from inside HandleSubit for Experience', keys)

    var skillslevel = {
      user_id : this.props.auth.user.id,
    }

    var industrieslevel = {
      user_id : this.props.auth.user.id,
    }

    // function to post each key value pairs of skills & experiences to backend database
    for (var i = 0; i< keys.length; i++){
      if ( data[keys[i] ] !== '' && i <20 ){
       industrieslevel.industry_name = keys[i];
       industrieslevel.level = data[keys[i]];
          // console.log("data to submit", industrieslevel)
          postIndustryLevels(industrieslevel)
      } else if ( data[keys[i] ] !== '' && i >= 20 ){
       skillslevel.skill_name = keys[i];
       skillslevel.level = data[keys[i]];
          // console.log("data to submit", skillslevel)
          postSkillsLevels(skillslevel)

      };
    }
    // set timeout to accomodate slower compputer processing data, 4000 = 4 seconds
    window.setTimeout(this.redirect(), 4000)

  }


  redirect(){
    // alert("Applicant Experiences & Skills Added, Please press OK to continue")
    browserHistory.push('/applicant_profile')
  }


  // Industries functions
  handleWealthManagementEntryChange(e){
    e.preventDefault();

      this.setState({
        wealth_management: "0-2 years Entry Level"
      });
  }

  handleWealthManagementMidChange(e){
    e.preventDefault();

    this.setState({
      wealth_management: "2-5 years Mid Level"
    });
  }

  handleWealthManagementHighChange(e){
    e.preventDefault();

    this.setState({
      wealth_management: "5+ years High Level"
    });
  }

  handleInvestmentBankingEntryChange(e){
    e.preventDefault();

      this.setState({
        investment_banking: "0-2 years Entry Level"
      });

  }

  handleInvestmentBankingMidChange(e){
    e.preventDefault();

    this.setState({
      investment_banking: "2-5 years Mid Level"
    });
  }

  handleInvestmentBankingHighChange(e){
    e.preventDefault();

    this.setState({
      investment_banking: "5+ years High Level"
    });
  }

  handleAssetManagementEntryChange(e){
    e.preventDefault();

      this.setState({
        asset_management: "0-2 years Entry Level"
      });

  }

  handleAssetManagementMidChange(e){
    e.preventDefault();

    this.setState({
      asset_management: "2-5 years Mid Level"
    });
  }

  handleAssetManagementHighChange(e){
    e.preventDefault();

    this.setState({
      asset_management: "5+ years High Level"
    });
  }

  handleInstitutionalSecuritiesEntryChange(e){
    e.preventDefault();

      this.setState({
        institutional_securities: "0-2 years Entry Level"
      });

  }

  handleInstitutionalSecuritiesMidChange(e){
    e.preventDefault();

    this.setState({
      institutional_securities: "2-5 years Mid Level"
    });
  }

  handleInstitutionalSecuritiesHighChange(e){
    e.preventDefault();

    this.setState({
      institutional_securities: "5+ years High Level"
    });
  }

  handleCommercialBankingEntryChange(e){
    e.preventDefault();

      this.setState({
        commercial_banking: "0-2 years Entry Level"
      });

  }

  handleCommercialBankingMidChange(e){
    e.preventDefault();

    this.setState({
      commercial_banking: "2-5 years Mid Level"
    });
  }

  handleCommercialBankingHighChange(e){
    e.preventDefault();

    this.setState({
      commercial_banking: "5+ years High Level"
    });
  }

  handleRetirementSolutionsEntryChange(e){
    e.preventDefault();

      this.setState({
        retirement_solutions: "0-2 years Entry Level"
      });

  }

  handleRetirementSolutionsMidChange(e){
    e.preventDefault();

    this.setState({
      retirement_solutions: "2-5 years Mid Level"
    });
  }

  handleRetirementSolutionsHighChange(e){
    e.preventDefault();

    this.setState({
      retirement_solutions: "5+ years High Level"
    });
  }

  handlePortfolioStrategyEntryChange(e){
    e.preventDefault();

      this.setState({
        portfolio_strategy: "0-2 years Entry Level"
      });

  }

  handlePortfolioStrategyMidChange(e){
    e.preventDefault();

    this.setState({
      portfolio_strategy: "2-5 years Mid Level"
    });
  }

  handlePortfolioStrategyHighChange(e){
    e.preventDefault();

    this.setState({
      portfolio_strategy: "5+ years High Level"
    });
  }


  // Taxes functions
  handleFinancialAuditEntryChange(e){
    e.preventDefault();

      this.setState({
        financial_audit: "0-2 years Entry Level"
      });

  }

  handleFinancialAuditMidChange(e){
    e.preventDefault();

    this.setState({
      financial_audit: "2-5 years Mid Level"
    });
  }

  handleFinancialAuditHighChange(e){
    e.preventDefault();

    this.setState({
      financial_audit: "5+ years High Level"
    });
  }

  handleTaxPreparationEntryChange(e){
    e.preventDefault();

      this.setState({
        tax_preparation: "0-2 years Entry Level"
      });

  }

  handleTaxPreparationMidChange(e){
    e.preventDefault();

    this.setState({
      tax_preparation: "2-5 years Mid Level"
    });
  }

  handleTaxPreparationHighChange(e){
    e.preventDefault();

    this.setState({
      tax_preparation: "5+ years High Level"
    });
  }

  handleConsultingEntryChange(e){
    e.preventDefault();

      this.setState({
        consulting: "0-2 years Entry Level"
      });

  }

  handleConsultingMidChange(e){
    e.preventDefault();

    this.setState({
      consulting: "2-5 years Mid Level"
    });
  }

  handleConsultingHighChange(e){
    e.preventDefault();

    this.setState({
      consulting: "5+ years High Level"
    });
  }

  handleAdvisoryServicesEntryChange(e){
    e.preventDefault();

      this.setState({
        advisory_services: "0-2 years Entry Level"
      });

  }

  handleAdvisoryServicesMidChange(e){
    e.preventDefault();

    this.setState({
      advisory_services: "2-5 years Mid Level"
    });
  }

  handleAdvisoryServicesHighChange(e){
    e.preventDefault();

    this.setState({
      advisory_services: "5+ years High Level"
    });
  }

  handleComplianceEntryChange(e){
    e.preventDefault();

      this.setState({
        compliance: "0-2 years Entry Level"
      });

  }

  handleComplianceMidChange(e){
    e.preventDefault();

    this.setState({
      compliance: "2-5 years Mid Level"
    });
  }

  handleComplianceHighChange(e){
    e.preventDefault();

    this.setState({
      compliance: "5+ years High Level"
    });
  }

  handleHumanResourcesEntryChange(e){
    e.preventDefault();

      this.setState({
        human_resources: "0-2 years Entry Level"
      });

  }

  handleHumanResourcesMidChange(e){
    e.preventDefault();

    this.setState({
      human_resources: "2-5 years Mid Level"
    });
  }

  handleHumanResourcesHighChange(e){
    e.preventDefault();

    this.setState({
      human_resources: "5+ years High Level"
    });
  }

  handleUnderwritingEntryChange(e){
    e.preventDefault();

      this.setState({
        underwriting: "0-2 years Entry Level"
      });

  }

  handleUnderwritingMidChange(e){
    e.preventDefault();

    this.setState({
      underwriting: "2-5 years Mid Level"
    });
  }

  handleUnderwritingHighChange(e){
    e.preventDefault();

    this.setState({
      underwriting: "5+ years High Level"
    });
  }


  // Finanice Functions
  handleMarketingEntryChange(e){
    e.preventDefault();

      this.setState({
        marketing: "0-2 years Entry Level"
      });

  }

  handleMarketingMidChange(e){
    e.preventDefault();

    this.setState({
      marketing: "2-5 years Mid Level"
    });
  }

  handleMarketingHighChange(e){
    e.preventDefault();

    this.setState({
      marketing: "5+ years High Level"
    });
  }

  handleSalesEntryChange(e){
    e.preventDefault();

      this.setState({
        sales: "0-2 years Entry Level"
      });

  }

  handleSalesMidChange(e){
    e.preventDefault();

    this.setState({
      sales: "2-5 years Mid Level"
    });
  }

  handleSalesHighChange(e){
    e.preventDefault();

    this.setState({
      sales: "5+ years High Level"
    });
  }

  handleFinancialAnalysisEntryChange(e){
    e.preventDefault();

      this.setState({
        financial_analysis: "0-2 years Entry Level"
      });

  }

  handleFinancialAnalysisMidChange(e){
    e.preventDefault();

    this.setState({
      financial_analysis: "2-5 years Mid Level"
    });
  }

  handleFinancialAnalysisHighChange(e){
    e.preventDefault();

    this.setState({
      financial_analysis: "5+ years High Level"
    });
  }

  handleDerivativesEntryChange(e){
    e.preventDefault();

      this.setState({
        derivatives: "0-2 years Entry Level"
      });

  }

  handleDerivativesMidChange(e){
    e.preventDefault();

    this.setState({
      derivatives: "2-5 years Mid Level"
    });
  }

  handleDerivativesHighChange(e){
    e.preventDefault();

    this.setState({
      derivatives: "5+ years High Level"
    });
  }

  handleMandAActivityEntryChange(e){
    e.preventDefault();

      this.setState({
        manda_activity: "0-2 years Entry Level"
      });

  }

  handleMandAActivityeMidChange(e){
    e.preventDefault();

    this.setState({
      manda_activity: "2-5 years Mid Level"
    });
  }

  handleMandAActivityHighChange(e){
    e.preventDefault();

    this.setState({
      manda_activity: "5+ years High Level"
    });
  }

  handleVentureCapitalEntryChange(e){
    e.preventDefault();

      this.setState({
        venture_capital: "0-2 years Entry Level"
      });

  }

  handleVentureCapitalMidChange(e){
    e.preventDefault();

    this.setState({
      venture_capital: "2-5 years Mid Level"
    });
  }

  handleVentureCapitalHighChange(e){
    e.preventDefault();

    this.setState({
      venture_capital: "5+ years High Level"
    });
  }

  handleForensicAccountingEntryChange(e){
    e.preventDefault();

      this.setState({
        forensic_accounting: "0-2 years Entry Level"
      });

  }

  handleForensicAccountingMidChange(e){
    e.preventDefault();

    this.setState({
      forensic_accounting: "2-5 years Mid Level"
    });
  }

  handleForensicAccountingHighChange(e){
    e.preventDefault();

    this.setState({
      forensic_accounting: "5+ years High Level"
    });
  }



  // Techical skills
  handleClientRelationshipEntryChange(e){
    e.preventDefault();

      this.setState({
        client_relationship: "0-2 years Entry Level"
      });

  }

  handleClientRelationshipMidChange(e){
    e.preventDefault();

    this.setState({
      client_relationship: "2-5 years Mid Level"
    });
  }

  handleClientRelationshipHighChange(e){
    e.preventDefault();

    this.setState({
      client_relationship: "5+ years High Level"
    });
  }

  handleMicrosoftOfficeEntryChange(e){
    e.preventDefault();

      this.setState({
        microsoft_office: "0-2 years Entry Level"
      });

  }

  handleMicrosoftOfficeMidChange(e){
    e.preventDefault();

    this.setState({
      microsoft_office: "2-5 years Mid Level"
    });
  }

  handleMicrosoftOfficeHighChange(e){
    e.preventDefault();

    this.setState({
      microsoft_office: "5+ years High Level"
    });
  }

  handleQuickbooksEntryChange(e){
    e.preventDefault();

      this.setState({
        quickbooks: "0-2 years Entry Level"
      });

  }

  handleQuickbooksMidChange(e){
    e.preventDefault();

    this.setState({
      quickbooks: "2-5 years Mid Level"
    });
  }

  handleQuickbooksHighChange(e){
    e.preventDefault();

    this.setState({
      quickbooks: "5+ years High Level"
    });
  }

  handleBookkeepingEntryChange(e){
    e.preventDefault();

      this.setState({
        book_keeping: "0-2 years Entry Level"
      });

  }

  handleBookkeepingMidChange(e){
    e.preventDefault();

    this.setState({
      book_keeping: "2-5 years Mid Level"
    });
  }

  handleBookkeepingHighChange(e){
    e.preventDefault();

    this.setState({
      book_keeping: "5+ years High Level"
    });
  }

  handleTaxSoftwareEntryChange(e){
    e.preventDefault();

      this.setState({
        tax_software: "0-2 years Entry Level"
      });

  }

  handleTaxSoftwareMidChange(e){
    e.preventDefault();

    this.setState({
      tax_software: "2-5 years Mid Level"
    });
  }

  handleTaxSoftwareHighChange(e){
    e.preventDefault();

    this.setState({
      tax_software: "5+ years High Level"
    });
  }

  handleITEntryChange(e){
    e.preventDefault();

      this.setState({
        it: "0-2 years Entry Level"
      });

  }

  handleITMidChange(e){
    e.preventDefault();

    this.setState({
      it: "2-5 years Mid Level"
    });
  }

  handleITHighChange(e){
    e.preventDefault();

    this.setState({
      it: "5+ years High Level"
    });
  }

  handleDataEntryEntryChange(e){
    e.preventDefault();

      this.setState({
        data_entry: "0-2 years Entry Level"
      });

  }

  handleDataEntryMidChange(e){
    e.preventDefault();

    this.setState({
      data_entry: "2-5 years Mid Level"
    });
  }

  handleDataEntryHighChange(e){
    e.preventDefault();

    this.setState({
      data_entry: "5+ years High Level"
    });
  }


  // Taxes functions
  handleFinancialStatementAnalysisEntryChange(e){
    e.preventDefault();

      this.setState({
        financial_statement_analysis: "0-2 years Entry Level"
      });

  }

  handleFinancialStatementAnalysisEntryChange(e){
    e.preventDefault();

    this.setState({
      financial_statement_analysis: "2-5 years Mid Level"
    });
  }

  handleFinancialStatementAnalysisEntryChange(e){
    e.preventDefault();

    this.setState({
      financial_statement_analysis: "5+ years High Level"
    });
  }

  handleFinancialPlanningEntryChange(e){
    e.preventDefault();

      this.setState({
        financial_planning: "0-2 years Entry Level"
      });

  }

  handleFinancialPlanningMidChange(e){
    e.preventDefault();

    this.setState({
      financial_planning: "2-5 years Mid Level"
    });
  }

  handleFinancialPlanningHighChange(e){
    e.preventDefault();

    this.setState({
      financial_planning: "5+ years High Level"
    });
  }

  handleDebtConsolidationEntryChange(e){
    e.preventDefault();

      this.setState({
        debt_consolidation: "0-2 years Entry Level"
      });

  }

  handleDebtConsolidationMidChange(e){
    e.preventDefault();

    this.setState({
      debt_consolidation: "2-5 years Mid Level"
    });
  }

  handleDebtConsolidationHighChange(e){
    e.preventDefault();

    this.setState({
      debt_consolidation: "5+ years High Level"
    });
  }

  handleSalesEntryChange(e){
    e.preventDefault();

      this.setState({
        sales: "0-2 years Entry Level"
      });

  }

  handleSalesMidChange(e){
    e.preventDefault();

    this.setState({
      sales: "2-5 years Mid Level"
    });
  }

  handleSalesHighChange(e){
    e.preventDefault();

    this.setState({
      sales: "5+ years High Level"
    });
  }

  handleWebDevelopmentEntryChange(e){
    e.preventDefault();

      this.setState({
        web_development: "0-2 years Entry Level"
      });

  }

  handleWebDevelopmentMidChange(e){
    e.preventDefault();

    this.setState({
      web_development: "2-5 years Mid Level"
    });
  }

  handleWebDevelopmentHighChange(e){
    e.preventDefault();

    this.setState({
      web_development: "5+ years High Level"
    });
  }

  handleAccountReconciliationEntryChange(e){
    e.preventDefault();

      this.setState({
        account_reconciliation: "0-2 years Entry Level"
      });

  }

  handleAccountReconciliationMidChange(e){
    e.preventDefault();

    this.setState({
      account_reconciliation: "2-5 years Mid Level"
    });
  }

  handleAccountReconciliationHighChange(e){
    e.preventDefault();

    this.setState({
      account_reconciliation: "5+ years High Level"
    });
  }

  handlePayrollManagementEntryChange(e){
    e.preventDefault();

      this.setState({
        payroll_management: "0-2 years Entry Level"
      });

  }

  handlePayrollManagementMidChange(e){
    e.preventDefault();

    this.setState({
      payroll_management: "2-5 years Mid Level"
    });
  }

  handlePayrollManagementHighChange(e){
    e.preventDefault();

    this.setState({
      payroll_management: "5+ years High Level"
    });
  }


  // Finanice Functions
  handleBudgetingEntryChange(e){
    e.preventDefault();

      this.setState({
        budgeting: "0-2 years Entry Level"
      });

  }

  handleBudgetingMidChange(e){
    e.preventDefault();

    this.setState({
      budgeting: "2-5 years Mid Level"
    });
  }

  handleBudgetingHighChange(e){
    e.preventDefault();

    this.setState({
      budgeting: "5+ years High Level"
    });
  }

  handleForecastingEntryChange(e){
    e.preventDefault();

      this.setState({
        forecasting: "0-2 years Entry Level"
      });

  }

  handleForecastingMidChange(e){
    e.preventDefault();

    this.setState({
      forecasting: "2-5 years Mid Level"
    });
  }

  handleForecastingHighChange(e){
    e.preventDefault();

    this.setState({
      forecasting: "5+ years High Level"
    });
  }

  handleCorporateReportingEntryChange(e){
    e.preventDefault();

      this.setState({
        corporate_reporting: "0-2 years Entry Level"
      });

  }

  handleCorporateReportingMidChange(e){
    e.preventDefault();

    this.setState({
      corporate_reporting: "2-5 years Mid Level"
    });
  }

  handleCorporateReportingHighChange(e){
    e.preventDefault();

    this.setState({
      corporate_reporting: "5+ years High Level"
    });
  }

  handlePublicSpeakingEntryChange(e){
    e.preventDefault();

      this.setState({
        public_speaking: "0-2 years Entry Level"
      });

  }

  handlePublicSpeakingMidChange(e){
    e.preventDefault();

    this.setState({
      public_speaking: "2-5 years Mid Level"
    });
  }

  handlePublicSpeakingHighChange(e){
    e.preventDefault();

    this.setState({
      public_speaking: "5+ years High Level"
    });
  }

  handleAnalyticalWritingEntryChange(e){
    e.preventDefault();

      this.setState({
        analytical_writing: "0-2 years Entry Level"
      });

  }

  handleAnalyticalWritingMidChange(e){
    e.preventDefault();

    this.setState({
      analytical_writing: "2-5 years Mid Level"
    });
  }

  handleAnalyticalWritingHighChange(e){
    e.preventDefault();

    this.setState({
      analytical_writing: "5+ years High Level"
    });
  }

  handleCostAccountingEntryChange(e){
    e.preventDefault();

      this.setState({
        cost_accounting: "0-2 years Entry Level"
      });

  }

  handleMCostAccountingMidChange(e){
    e.preventDefault();

    this.setState({
      cost_accounting: "2-5 years Mid Level"
    });
  }

  handleCostAccountingHighChange(e){
    e.preventDefault();

    this.setState({
      cost_accounting: "5+ years High Level"
    });
  }

  handleFederalStateLawEntryChange(e){
    e.preventDefault();

      this.setState({
        federal_tax_law: "0-2 years Entry Level"
      });

  }

  handleFederalStateLawMidChange(e){
    e.preventDefault();

    this.setState({
      federal_tax_law: "2-5 years Mid Level"
    });
  }

  handleFederalStateLawHighChange(e){
    e.preventDefault();

    this.setState({
      federal_tax_law: "5+ years High Level"
    });
  }




  render(){
    return (
      <div id="applicant_profile_form">
        <div id="industry_experience">
          <h1> Do you hold Industry experience in any of the following areas? </h1>
          <div className="ui equal width grid stackable">
            <div className="column">
              <div className="ui vertical menu">

                {/* Wealth Management */}
                <div className="ui dropdown item">
                  <span>Wealth Management</span>
                  {this.state.wealth_management}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="wealth_management">
                    <option className="item" name="entry" onClick={this.handleWealthManagementEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleWealthManagementMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleWealthManagementHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Investment Banking */}
                <div className="ui dropdown item">
                  <span>Investment Banking</span>
                  {this.state.investment_banking}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="investment_banking">
                    <option className="item" name="entry" onClick={this.handleInvestmentBankingEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleInvestmentBankingMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleInvestmentBankingHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Asset Management */}
                <div className="ui dropdown item">
                  <span>Asset Management</span>
                  {this.state.asset_management}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="asset_management">
                    <option className="item" name="entry" onClick={this.handleAssetManagementEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleAssetManagementMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleAssetManagementHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Institutional Securities */}
                <div className="ui dropdown item">
                  <span>Institutional Securities</span>
                  {this.state.institutional_securities}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="institutional_securities">
                    <option className="item" name="entry" onClick={this.handleInstitutionalSecuritiesEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleInstitutionalSecuritiesMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleInstitutionalSecuritiesHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Commerical Banking */}
                <div className="ui dropdown item">
                  <span>Commerical Banking</span>
                  {this.state.commercial_banking}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="commercial_banking">
                    <option className="item" name="entry" onClick={this.handleCommercialBankingEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleCommercialBankingMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleCommercialBankingHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Retirement Solutions */}
                <div className="ui dropdown item">
                  <span>Retirement Solutions</span>
                  {this.state.retirement_solutions}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="retirement_solutions">
                    <option className="item" name="entry" onClick={this.handleRetirementSolutionsEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleRetirementSolutionsMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleRetirementSolutionsHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Portfolio Strategy */}
                <div className="ui dropdown item">
                  <span>Portfolio Strategy</span>
                  {this.state.portfolio_strategy}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="portfolio_strategy">
                    <option className="item" name="entry" onClick={this.handlePortfolioStrategyEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handlePortfolioStrategyMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handlePortfolioStrategyHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

              </div>
            </div>
            <div className="column">
              <div className="ui vertical menu">

                {/* Financial Audit */}
                <div className="ui dropdown item">
                  <span>Financial Audit</span>
                  {this.state.financial_audit}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="financial_audit">
                    <option className="item" name="entry" onClick={this.handleFinancialAuditEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleFinancialAuditMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleFinancialAuditHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Tax Preparation */}
                <div className="ui dropdown item">
                  <span>Tax Preparation</span>
                  {this.state.tax_preparation}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="tax_preparation">
                    <option className="item" name="entry" onClick={this.handleTaxPreparationEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleTaxPreparationMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleTaxPreparationHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Consulting */}
                <div className="ui dropdown item">
                  <span>Consulting</span>
                  {this.state.consulting}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="consulting">
                    <option className="item" name="entry" onClick={this.handleConsultingEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleConsultingMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleConsultingHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Advisory Services */}
                <div className="ui dropdown item">
                  <span>Advisory Services</span>
                  {this.state.advisory_services}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="advisory_services">
                    <option className="item" name="entry" onClick={this.handleAdvisoryServicesEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleAdvisoryServicesMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleAdvisoryServicesHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Compliance */}
                <div className="ui dropdown item">
                  <span>Compliance</span>
                  {this.state.compliance}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="compliance">
                    <option className="item" name="entry" onClick={this.handleComplianceEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleComplianceMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleComplianceHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Human Resources */}
                <div className="ui dropdown item">
                  <span>Human Resources</span>
                  {this.state.human_resources}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="human_resources">
                    <option className="item" name="entry" onClick={this.handleHumanResourcesEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleHumanResourcesMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleHumanResourcesHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Underwriting */}
                <div className="ui dropdown item">
                  <span>Underwriting</span>
                  {this.state.underwriting}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="underwriting">
                    <option className="item" name="entry" onClick={this.handleUnderwritingEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleUnderwritingMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleUnderwritingHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

              </div>
            </div>
            <div className="column">
              <div className="ui vertical menu">

                {/* Marketing */}
                <div className="ui dropdown item">
                  <span>Marketing</span>
                  {this.state.marketing}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="marketing">
                    <option className="item" name="entry" onClick={this.handleMarketingEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleMarketingMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleMarketingHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Sales */}
                <div className="ui dropdown item">
                  <span>Sales</span>
                  {this.state.sales}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="sales">
                    <option className="item" name="entry" onClick={this.handleSalesEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleSalesMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleSalesHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Financial Analysis */}
                <div className="ui dropdown item">
                  <span>Financial Analysis</span>
                  {this.state.financial_analysis}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="financial_analysis">
                    <option className="item" name="entry" onClick={this.handleFinancialAnalysisEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleFinancialAnalysisMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleFinancialAnalysisHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Derivatives */}
                <div className="ui dropdown item">
                  <span>Derivatives</span>
                  {this.state.derivatives}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="derivatives">
                    <option className="item" name="entry" onClick={this.handleDerivativesEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleDerivativesMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleDerivativesHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* M&A Activity */}
                <div className="ui dropdown item">
                  <span>M&A Activity</span>
                  {this.state.manda_activity}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="m&a_activity">
                    <option className="item" name="entry" onClick={this.handleMandAActivityEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleMandAActivityeMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleMandAActivityHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Venture Capital */}
                <div className="ui dropdown item">
                  <span>Venture Capital</span>
                  {this.state.venture_capital}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="venture_capital">
                    <option className="item" name="entry" onClick={this.handleVentureCapitalEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleVentureCapitalMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleVentureCapitalHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Forensic Accounting */}
                <div className="ui dropdown item">
                  <span>Forensic Accounting</span>
                  {this.state.forensic_accounting}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="forensic_accounting">
                    <option className="item" name="entry" onClick={this.handleForensicAccountingEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleForensicAccountingMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleForensicAccountingHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="areas_expertise">
          <h1> Select Your Skills / Areas of Expertise </h1>
          <div className="ui equal width grid stackable">
            <div className="column">
              <div className="ui vertical menu">

                {/* Client Relationship */}
                <div className="ui dropdown item">
                  <span>Client Relationship</span>
                  {this.state.client_relationship}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="client_relations">
                    <option className="item" name="entry" onClick={this.handleClientRelationshipEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleClientRelationshipMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleClientRelationshipHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* MicroSoft Office */}
                <div className="ui dropdown item">
                  <span>MicroSoft Office</span>
                  {this.state.microsoft_office}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="microsoft_office">
                    <option className="item" name="entry" onClick={this.handleMicrosoftOfficeEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleMicrosoftOfficeMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleMicrosoftOfficeHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Quickbooks */}
                <div className="ui dropdown item">
                  <span>Quickbooks</span>
                  {this.state.quickbooks}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="quickbooks">
                    <option className="item" name="entry" onClick={this.handleQuickbooksEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleQuickbooksMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleQuickbooksHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Book Keeping */}
                <div className="ui dropdown item">
                  <span>Book Keeping</span>
                  {this.state.book_keeping}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="book_keeping">
                    <option className="item" name="entry" onClick={this.handleBookkeepingEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleBookkeepingMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleBookkeepingHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Tax Software */}
                <div className="ui dropdown item">
                  <span>Tax Software</span>
                  {this.state.tax_software}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="tax_software">
                    <option className="item" name="entry" onClick={this.handleTaxSoftwareEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleTaxSoftwareMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleTaxSoftwareHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* IT */}
                <div className="ui dropdown item">
                  <span>IT</span>
                  {this.state.it}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="it">
                    <option className="item" name="entry" onClick={this.handleITEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleITMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleITHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Data Entry */}
                <div className="ui dropdown item">
                  <span>Data Entry</span>
                  {this.state.data_entry}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="data_entry">
                    <option className="item" name="entry" onClick={this.handleDataEntryEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleDataEntryMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleDataEntryHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

              </div>
            </div>
            <div className="column">
              <div className="ui vertical menu">

                {/* Financial Statement */}
                <div className="ui dropdown item">
                  <span>Financial Statement Analysis</span>
                  {this.state.financial_statement_analysis}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="financial_statement_analysis">
                    <option className="item" name="entry" onClick={this.handleFinancialStatementAnalysisEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleFinancialStatementAnalysisEntryChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleFinancialStatementAnalysisEntryChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Financial Planning */}
                <div className="ui dropdown item">
                  <span>Financial Planning</span>
                  {this.state.financial_planning}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="debt_consolidation">
                    <option className="item" name="entry" onClick={this.handleFinancialPlanningEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleFinancialPlanningMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleFinancialPlanningHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Debt Consolidation */}
                <div className="ui dropdown item">
                  <span>Debt Consolidation</span>
                  {this.state.debt_consolidation}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="debt_consolidation">
                    <option className="item" name="entry" onClick={this.handleDebtConsolidationEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleDebtConsolidationMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleDebtConsolidationHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Sales */}
                <div className="ui dropdown item">
                  <span>Sales</span>
                  {this.state.sales}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="sales">
                    <option className="item" name="entry" onClick={this.handleSalesEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleSalesMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleSalesHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Web Development */}
                <div className="ui dropdown item">
                  <span>Web Development</span>
                  {this.state.web_development}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="web_development">
                    <option className="item" name="entry" onClick={this.handleWebDevelopmentEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleWebDevelopmentMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleWebDevelopmentHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Account Reconciliation  */}
                <div className="ui dropdown item">
                  <span>Account Reconciliation</span>
                  {this.state.account_reconciliation}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="account_reconciliation">
                    <option className="item" name="entry" onClick={this.handleAccountReconciliationEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleAccountReconciliationMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleAccountReconciliationHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Payroll Management */}
                <div className="ui dropdown item">
                  <span>Payroll Management</span>
                  {this.state.payroll_management}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="payroll_management">
                    <option className="item" name="entry" onClick={this.handlePayrollManagementEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handlePayrollManagementMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handlePayrollManagementHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui vertical menu">

                {/* Budgeting */}
                <div className="ui dropdown item">
                  <span>Budgeting</span>
                  {this.state.budgeting}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="budgeting">
                    <option className="item" name="entry" onClick={this.handleBudgetingEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleBudgetingMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleBudgetingHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Forecasting */}
                <div className="ui dropdown item">
                  <span>Forecasting</span>
                  {this.state.forecasting}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="forecasting">
                    <option className="item" name="entry" onClick={this.handleForecastingEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleForecastingMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleForecastingHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Corporate Reporting */}
                <div className="ui dropdown item">
                  <span>Corporate Reporting</span>
                  {this.state.corporate_reporting}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="corporate_reporting">
                    <option className="item" name="entry" onClick={this.handleCorporateReportingEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleCorporateReportingMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleCorporateReportingHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Public Speaking */}
                <div className="ui dropdown item">
                  <span>Public Speaking</span>
                  {this.state.public_speaking}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="public_speaking">
                    <option className="item" name="entry" onClick={this.handlePublicSpeakingEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handlePublicSpeakingMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handlePublicSpeakingHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Analytical Writing */}
                <div className="ui dropdown item">
                  <span>Analytical Writing</span>
                  {this.state.analytical_writing}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="analytical_writing">
                    <option className="item" name="entry" onClick={this.handleAnalyticalWritingEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleAnalyticalWritingMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleAnalyticalWritingHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Cost Accounting */}
                <div className="ui dropdown item">
                  <span>Cost Accounting</span>
                  {this.state.cost_accounting}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="cost_accounting">
                    <option className="item" name="entry" onClick={this.handleCostAccountingEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleMCostAccountingMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleCostAccountingHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

                {/* Federal Tax Law */}
                <div className="ui dropdown item">
                  <span>Federal Tax Law</span>
                  {this.state.federal_tax_law}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="federal_tax_law">
                    <option className="item" name="entry" onClick={this.handleFederalStateLawEntryChange.bind(this)}> 0-2 years Entry Level</option>
                    <option className="item" name="mid" onClick={this.handleFederalStateLawMidChange.bind(this)}> 2-5 years Mid Level</option>
                    <option className="item" name="high" onClick={ this.handleFederalStateLawHighChange.bind(this)}> 5+ years High Level</option>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <br/>

        <button className="ui right floated blue button" onClick={this.handleSubmitData.bind(this)}>Activate Profile</button>

      </div>
    )
  }

}

// function to post Experience Data
function postIndustryLevels(data){
  // console.log('posted data postIndustryLevels', data)

  $.post('https://apex-database.herokuapp.com/api/applicants/new_industrylevels', data)
}

// function to post Skills Data
function postSkillsLevels(data){
  // console.log('posted data postSkillsLevels', data)

  $.post('https://apex-database.herokuapp.com/api/applicants/new_skillslevels', data)

}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Applicant_skill_form);
