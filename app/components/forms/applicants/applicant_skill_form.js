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
      book_keeping_level: '',
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

  handleSubmitData(e){
    e.preventDefault();

    let skillData = {
      wealth_management: this.state.wealth_management_level,
      asset_management: this.state.asset_management_level,
      institutional_securities: this.state.institutional_securities_level,
      commercial_banking: this.state.commercial_banking_level,
      retirement_solutions: this.state.retirement_solutions_level,
      portfolio_strategy: this.state.portfolio_strategy_level,
      financial_audit: this.state.financial_audit_level,
      tax_preparation: this.state.tax_preparation_level,
      consulting: this.state.consulting_level,
      advisory_services: this.state.advisory_services_level,
      compliance: this.state.compliance_level,
      human_resources: this.state.human_resources_level,
      underwriting: this.state.underwriting_level,
      marketing: this.state.marketing_level,
      sales: this.state.sales_level,
      financial_analysis: this.state.financial_analysis_level,
      derivatives: this.state.derivatives_level,
      manda_activity: this.state.manda_activity_level,
      venture_capital: this.state.venture_capital_level,
      forensic_accounting: this.state.forensic_accounting_level,
      client_relations: this.state.client_relationship_level,
      microsoft_office: this.state.microsoft_office_level,
      quickbooks: this.state.quickbooks_level,
      book_keeping: this.state.book_keeping_level,
      tax_software: this.state.tax_software_level,
      it: this.state.it_level,
      data_entry: this.state.data_entry_level,
      financial_statement: this.state.financial_statement_level,
      financial_planning: this.state.financial_planning_level,
      debt_consolidation: this.state.debt_consolidation_level,
      sales: this.state.sales_level,
      web_development: this.state.web_development_level,
      account_reconciliation: this.state.account_reconciliation_level,
      payroll_management: this.state.payroll_management_level,
      budgeting: this.state.budgeting_level,
      forecasting: this.state.forecasting_level,
      corporate_reporting: this.state.corporate_reporting_level,
      public_speaking: this.state.public_speaking_level,
      analytical_writing: this.state.analytical_writing_level,
      cost_accounting: this.state.cost_accounting_level,
      federal_tax_law: this.state.federal_tax_law_level
    }

    console.log("Skill Datas for backend to consume", skillData)
  }

  // Industries functions
  handleWealthManagementEntryChange(e){
    e.preventDefault();

      this.setState({
        wealth_management_level: "0-2 years"
      });
  }

  handleWealthManagementMidChange(e){
    e.preventDefault();

    this.setState({
      wealth_management_level: "2-5 years"
    });
  }

  handleWealthManagementHighChange(e){
    e.preventDefault();

    this.setState({
      wealth_management_level: "5+ years"
    });
  }

  handleInvestmentBankingEntryChange(e){
    e.preventDefault();

      this.setState({
        investment_banking_level: "0-2 years"
      });

  }

  handleInvestmentBankingMidChange(e){
    e.preventDefault();

    this.setState({
      investment_banking_level: "2-5 years"
    });
  }

  handleInvestmentBankingHighChange(e){
    e.preventDefault();

    this.setState({
      investment_banking_level: "High Level"
    });
  }

  handleAssetManagementEntryChange(e){
    e.preventDefault();

      this.setState({
        asset_management_level: "0-2 years"
      });

  }

  handleAssetManagementMidChange(e){
    e.preventDefault();

    this.setState({
      asset_management_level: "2-5 years"
    });
  }

  handleAssetManagementHighChange(e){
    e.preventDefault();

    this.setState({
      asset_management_level: "High Level"
    });
  }

  handleInstitutionalSecuritiesEntryChange(e){
    e.preventDefault();

      this.setState({
        institutional_securities_level: "0-2 years"
      });

  }

  handleInstitutionalSecuritiesMidChange(e){
    e.preventDefault();

    this.setState({
      institutional_securities_level: "2-5 years"
    });
  }

  handleInstitutionalSecuritiesHighChange(e){
    e.preventDefault();

    this.setState({
      institutional_securities_level: "High Level"
    });
  }

  handleCommercialBankingEntryChange(e){
    e.preventDefault();

      this.setState({
        commercial_banking_level: "0-2 years"
      });

  }

  handleCommercialBankingMidChange(e){
    e.preventDefault();

    this.setState({
      commercial_banking_level: "2-5 years"
    });
  }

  handleCommercialBankingHighChange(e){
    e.preventDefault();

    this.setState({
      commercial_banking_level: "High Level"
    });
  }

  handleRetirementSolutionsEntryChange(e){
    e.preventDefault();

      this.setState({
        retirement_solutions_level: "0-2 years"
      });

  }

  handleRetirementSolutionsMidChange(e){
    e.preventDefault();

    this.setState({
      retirement_solutions_level: "2-5 years"
    });
  }

  handleRetirementSolutionsHighChange(e){
    e.preventDefault();

    this.setState({
      retirement_solutions_level: "High Level"
    });
  }

  handlePortfolioStrategyEntryChange(e){
    e.preventDefault();

      this.setState({
        portfolio_strategy_level: "0-2 years"
      });

  }

  handlePortfolioStrategyMidChange(e){
    e.preventDefault();

    this.setState({
      portfolio_strategy_level: "2-5 years"
    });
  }

  handlePortfolioStrategyHighChange(e){
    e.preventDefault();

    this.setState({
      portfolio_strategy_level: "High Level"
    });
  }


  // Taxes functions
  handleFinancialAuditEntryChange(e){
    e.preventDefault();

      this.setState({
        financial_audit_level: "0-2 years"
      });

  }

  handleFinancialAuditMidChange(e){
    e.preventDefault();

    this.setState({
      financial_audit_level: "2-5 years"
    });
  }

  handleFinancialAuditHighChange(e){
    e.preventDefault();

    this.setState({
      financial_audit_level: "High Level"
    });
  }

  handleTaxPreparationEntryChange(e){
    e.preventDefault();

      this.setState({
        tax_preparation_level: "0-2 years"
      });

  }

  handleTaxPreparationMidChange(e){
    e.preventDefault();

    this.setState({
      tax_preparation_level: "2-5 years"
    });
  }

  handleTaxPreparationHighChange(e){
    e.preventDefault();

    this.setState({
      tax_preparation_level: "High Level"
    });
  }

  handleConsultingEntryChange(e){
    e.preventDefault();

      this.setState({
        consulting_level: "0-2 years"
      });

  }

  handleConsultingMidChange(e){
    e.preventDefault();

    this.setState({
      consulting_level: "2-5 years"
    });
  }

  handleConsultingHighChange(e){
    e.preventDefault();

    this.setState({
      consulting_level: "High Level"
    });
  }

  handleAdvisoryServicesEntryChange(e){
    e.preventDefault();

      this.setState({
        advisory_services_level: "0-2 years"
      });

  }

  handleAdvisoryServicesMidChange(e){
    e.preventDefault();

    this.setState({
      advisory_services_level: "2-5 years"
    });
  }

  handleAdvisoryServicesHighChange(e){
    e.preventDefault();

    this.setState({
      advisory_services_level: "High Level"
    });
  }

  handleComplianceEntryChange(e){
    e.preventDefault();

      this.setState({
        compliance_level: "0-2 years"
      });

  }

  handleComplianceMidChange(e){
    e.preventDefault();

    this.setState({
      compliance_level: "2-5 years"
    });
  }

  handleComplianceHighChange(e){
    e.preventDefault();

    this.setState({
      compliance_level: "High Level"
    });
  }

  handleHumanResourcesEntryChange(e){
    e.preventDefault();

      this.setState({
        human_resources_level: "0-2 years"
      });

  }

  handleHumanResourcesMidChange(e){
    e.preventDefault();

    this.setState({
      human_resources_level: "2-5 years"
    });
  }

  handleHumanResourcesHighChange(e){
    e.preventDefault();

    this.setState({
      human_resources_level: "High Level"
    });
  }

  handleUnderwritingEntryChange(e){
    e.preventDefault();

      this.setState({
        underwriting_level: "0-2 years"
      });

  }

  handleUnderwritingMidChange(e){
    e.preventDefault();

    this.setState({
      underwriting_level: "2-5 years"
    });
  }

  handleUnderwritingHighChange(e){
    e.preventDefault();

    this.setState({
      underwriting_level: "High Level"
    });
  }


  // Finanice Functions
  handleMarketingEntryChange(e){
    e.preventDefault();

      this.setState({
        marketing_level: "0-2 years"
      });

  }

  handleMarketingMidChange(e){
    e.preventDefault();

    this.setState({
      marketing_level: "2-5 years"
    });
  }

  handleMarketingHighChange(e){
    e.preventDefault();

    this.setState({
      marketing_level: "High Level"
    });
  }

  handleSalesEntryChange(e){
    e.preventDefault();

      this.setState({
        sales_level: "0-2 years"
      });

  }

  handleSalesMidChange(e){
    e.preventDefault();

    this.setState({
      sales_level: "2-5 years"
    });
  }

  handleSalesHighChange(e){
    e.preventDefault();

    this.setState({
      sales_level: "High Level"
    });
  }

  handleFinancialAnalysisEntryChange(e){
    e.preventDefault();

      this.setState({
        financial_analysis_level: "0-2 years"
      });

  }

  handleFinancialAnalysisMidChange(e){
    e.preventDefault();

    this.setState({
      financial_analysis_level: "2-5 years"
    });
  }

  handleFinancialAnalysisHighChange(e){
    e.preventDefault();

    this.setState({
      financial_analysis_level: "High Level"
    });
  }

  handleDerivativesEntryChange(e){
    e.preventDefault();

      this.setState({
        derivatives_level: "0-2 years"
      });

  }

  handleDerivativesMidChange(e){
    e.preventDefault();

    this.setState({
      derivatives_level: "2-5 years"
    });
  }

  handleDerivativesHighChange(e){
    e.preventDefault();

    this.setState({
      derivatives_level: "High Level"
    });
  }

  handleMandAActivityEntryChange(e){
    e.preventDefault();

      this.setState({
        manda_activity_level: "0-2 years"
      });

  }

  handleMandAActivityeMidChange(e){
    e.preventDefault();

    this.setState({
      manda_activity_level: "2-5 years"
    });
  }

  handleMandAActivityHighChange(e){
    e.preventDefault();

    this.setState({
      manda_activity_level: "High Level"
    });
  }

  handleVentureCapitalEntryChange(e){
    e.preventDefault();

      this.setState({
        venture_capital_level: "0-2 years"
      });

  }

  handleVentureCapitalMidChange(e){
    e.preventDefault();

    this.setState({
      venture_capital_level: "2-5 years"
    });
  }

  handleVentureCapitalHighChange(e){
    e.preventDefault();

    this.setState({
      venture_capital_level: "High Level"
    });
  }

  handleForensicAccountingEntryChange(e){
    e.preventDefault();

      this.setState({
        forensic_accounting_level: "0-2 years"
      });

  }

  handleForensicAccountingMidChange(e){
    e.preventDefault();

    this.setState({
      forensic_accounting_level: "2-5 years"
    });
  }

  handleForensicAccountingHighChange(e){
    e.preventDefault();

    this.setState({
      forensic_accounting_level: "High Level"
    });
  }



  // Techical skills
  handleClientRelationshipEntryChange(e){
    e.preventDefault();

      this.setState({
        client_relationship_level: "0-2 years"
      });

  }

  handleClientRelationshipMidChange(e){
    e.preventDefault();

    this.setState({
      client_relationship_level: "2-5 years"
    });
  }

  handleClientRelationshipHighChange(e){
    e.preventDefault();

    this.setState({
      client_relationship_level: "High Level"
    });
  }

  handleMicrosoftOfficeEntryChange(e){
    e.preventDefault();

      this.setState({
        microsoft_office_level: "0-2 years"
      });

  }

  handleMicrosoftOfficeMidChange(e){
    e.preventDefault();

    this.setState({
      microsoft_office_level: "2-5 years"
    });
  }

  handleMicrosoftOfficeHighChange(e){
    e.preventDefault();

    this.setState({
      microsoft_office_level: "High Level"
    });
  }

  handleQuickbooksEntryChange(e){
    e.preventDefault();

      this.setState({
        quickbooks_level: "0-2 years"
      });

  }

  handleQuickbooksMidChange(e){
    e.preventDefault();

    this.setState({
      quickbooks_level: "2-5 years"
    });
  }

  handleQuickbooksHighChange(e){
    e.preventDefault();

    this.setState({
      quickbooks_level: "High Level"
    });
  }

  handleBookkeepingEntryChange(e){
    e.preventDefault();

      this.setState({
        book_keeping_level: "0-2 years"
      });

  }

  handleBookkeepingMidChange(e){
    e.preventDefault();

    this.setState({
      book_keeping_level: "2-5 years"
    });
  }

  handleBookkeepingHighChange(e){
    e.preventDefault();

    this.setState({
      book_keeping_level: "High Level"
    });
  }

  handleTaxSoftwareEntryChange(e){
    e.preventDefault();

      this.setState({
        tax_software_level: "0-2 years"
      });

  }

  handleTaxSoftwareMidChange(e){
    e.preventDefault();

    this.setState({
      tax_software_level: "2-5 years"
    });
  }

  handleTaxSoftwareHighChange(e){
    e.preventDefault();

    this.setState({
      tax_software_level: "High Level"
    });
  }

  handleITEntryChange(e){
    e.preventDefault();

      this.setState({
        it_level: "0-2 years"
      });

  }

  handleITMidChange(e){
    e.preventDefault();

    this.setState({
      it_level: "2-5 years"
    });
  }

  handleITHighChange(e){
    e.preventDefault();

    this.setState({
      it_level: "High Level"
    });
  }

  handleDataEntryEntryChange(e){
    e.preventDefault();

      this.setState({
        data_entry_level: "0-2 years"
      });

  }

  handleDataEntryMidChange(e){
    e.preventDefault();

    this.setState({
      data_entry_level: "2-5 years"
    });
  }

  handleDataEntryHighChange(e){
    e.preventDefault();

    this.setState({
      data_entry_level: "High Level"
    });
  }


  // Taxes functions
  handleFinancialStatementEntryChange(e){
    e.preventDefault();

      this.setState({
        financial_statement_level: "0-2 years"
      });

  }

  handleFinancialStatementMidChange(e){
    e.preventDefault();

    this.setState({
      financial_statement_level: "2-5 years"
    });
  }

  handleFinancialStatementHighChange(e){
    e.preventDefault();

    this.setState({
      financial_statement_level: "High Level"
    });
  }

  handleFinancialPlanningEntryChange(e){
    e.preventDefault();

      this.setState({
        financial_planning_level: "0-2 years"
      });

  }

  handleFinancialPlanningMidChange(e){
    e.preventDefault();

    this.setState({
      financial_planning_level: "2-5 years"
    });
  }

  handleFinancialPlanningHighChange(e){
    e.preventDefault();

    this.setState({
      financial_planning_level: "High Level"
    });
  }

  handleDebtConsolidationEntryChange(e){
    e.preventDefault();

      this.setState({
        debt_consolidation_level: "0-2 years"
      });

  }

  handleDebtConsolidationMidChange(e){
    e.preventDefault();

    this.setState({
      debt_consolidation_level: "2-5 years"
    });
  }

  handleDebtConsolidationHighChange(e){
    e.preventDefault();

    this.setState({
      debt_consolidation_level: "High Level"
    });
  }

  handleSalesEntryChange(e){
    e.preventDefault();

      this.setState({
        sales_level: "0-2 years"
      });

  }

  handleSalesMidChange(e){
    e.preventDefault();

    this.setState({
      sales_level: "2-5 years"
    });
  }

  handleSalesHighChange(e){
    e.preventDefault();

    this.setState({
      sales_level: "High Level"
    });
  }

  handleWebDevelopmentEntryChange(e){
    e.preventDefault();

      this.setState({
        web_development_level: "0-2 years"
      });

  }

  handleWebDevelopmentMidChange(e){
    e.preventDefault();

    this.setState({
      web_development_level: "2-5 years"
    });
  }

  handleWebDevelopmentHighChange(e){
    e.preventDefault();

    this.setState({
      web_development_level: "High Level"
    });
  }

  handleAccountReconciliationEntryChange(e){
    e.preventDefault();

      this.setState({
        account_reconciliation: "0-2 years"
      });

  }

  handleAccountReconciliationMidChange(e){
    e.preventDefault();

    this.setState({
      account_reconciliation_level: "2-5 years"
    });
  }

  handleAccountReconciliationHighChange(e){
    e.preventDefault();

    this.setState({
      account_reconciliation_level: "High Level"
    });
  }

  handlePayrollManagementEntryChange(e){
    e.preventDefault();

      this.setState({
        payroll_management_level: "0-2 years"
      });

  }

  handlePayrollManagementMidChange(e){
    e.preventDefault();

    this.setState({
      payroll_management_level: "2-5 years"
    });
  }

  handlePayrollManagementHighChange(e){
    e.preventDefault();

    this.setState({
      payroll_management_level: "High Level"
    });
  }


  // Finanice Functions
  handleBudgetingEntryChange(e){
    e.preventDefault();

      this.setState({
        budgeting_level: "0-2 years"
      });

  }

  handleBudgetingMidChange(e){
    e.preventDefault();

    this.setState({
      budgeting_level: "2-5 years"
    });
  }

  handleBudgetingHighChange(e){
    e.preventDefault();

    this.setState({
      budgeting_level: "High Level"
    });
  }

  handleForecastingEntryChange(e){
    e.preventDefault();

      this.setState({
        forecasting_level: "0-2 years"
      });

  }

  handleForecastingMidChange(e){
    e.preventDefault();

    this.setState({
      forecasting_level: "2-5 years"
    });
  }

  handleForecastingHighChange(e){
    e.preventDefault();

    this.setState({
      forecasting_level: "High Level"
    });
  }

  handleCorporateReportingEntryChange(e){
    e.preventDefault();

      this.setState({
        corporate_reporting: "0-2 years"
      });

  }

  handleCorporateReportingMidChange(e){
    e.preventDefault();

    this.setState({
      corporate_reporting_level: "2-5 years"
    });
  }

  handleCorporateReportingHighChange(e){
    e.preventDefault();

    this.setState({
      corporate_reporting_level: "High Level"
    });
  }

  handlePublicSpeakingEntryChange(e){
    e.preventDefault();

      this.setState({
        public_speaking_level: "0-2 years"
      });

  }

  handlePublicSpeakingMidChange(e){
    e.preventDefault();

    this.setState({
      public_speaking_level: "2-5 years"
    });
  }

  handlePublicSpeakingHighChange(e){
    e.preventDefault();

    this.setState({
      public_speaking_level: "High Level"
    });
  }

  handleAnalyticalWritingEntryChange(e){
    e.preventDefault();

      this.setState({
        analytical_writing_level: "0-2 years"
      });

  }

  handleAnalyticalWritingMidChange(e){
    e.preventDefault();

    this.setState({
      analytical_writing_level: "2-5 years"
    });
  }

  handleAnalyticalWritingHighChange(e){
    e.preventDefault();

    this.setState({
      analytical_writing_level: "High Level"
    });
  }

  handleCostAccountingEntryChange(e){
    e.preventDefault();

      this.setState({
        cost_accounting_level: "0-2 years"
      });

  }

  handleMCostAccountingMidChange(e){
    e.preventDefault();

    this.setState({
      cost_accounting_level: "2-5 years"
    });
  }

  handleCostAccountingHighChange(e){
    e.preventDefault();

    this.setState({
      cost_accounting_level: "High Level"
    });
  }

  handleFederalStateLawEntryChange(e){
    e.preventDefault();

      this.setState({
        federal_tax_law_level: "0-2 years"
      });

  }

  handleFederalStateLawMidChange(e){
    e.preventDefault();

    this.setState({
      federal_tax_law_level: "2-5 years"
    });
  }

  handleFederalStateLawHighChange(e){
    e.preventDefault();

    this.setState({
      federal_tax_law_level: "High Level"
    });
  }




  render(){
    //   let industryData = this.state.industries
    //   let industryExperience = industryData.map(function(industry){
    //
    //   return <div className="ui dropdown item">
    //           {industry.name}
    //           <i className="dropdown icon"></i>
    //           <div key={industry.id} className="menu" name={industry.name}>
    //             <option className="item" name="entry_level" onClick={ `this.handle${industry.value}EntryChange.bind(this)`}> 0-2 years</option>
    //             <option className="item" name="mid_level" onClick={`this.handle${industry.value}MidChange.bind(this)`}> 2-5 years</option>
    //             <option className="item" name="high_level" onClick={ `this.handle${industry.value}HighChange.bind(this)`}> 5+ years</option>
    //           </div>
    //         </div>
    // })

    return (
      <div id="applicant_profile_form">
        <div id="industry_experience">
          <h1> Do you hold Industry experience in any of the following areas? </h1>
          <div className="ui equal width grid">
            <div className="column">
              <div className="ui vertical menu">

                {/* Wealth Management */}
                <div className="ui dropdown item">
                  <span>Wealth Management</span>
                  {this.state.wealth_management_level}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="wealth_management">
                    <option className="item" name="entry_level" onClick={this.handleWealthManagementEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleWealthManagementMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleWealthManagementHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Investment Banking */}
                <div className="ui dropdown item">
                  Investment Banking : {this.state.investment_banking_level}
                  <i className="dropdown icon"></i>
                  <div className="menu" name="investment_banking">
                    <option className="item" name="entry_level" onClick={this.handleInvestmentBankingEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleInvestmentBankingMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleInvestmentBankingHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Asset Management */}
                <div className="ui dropdown item">
                  Asset Management
                  <i className="dropdown icon"></i>
                  <div className="menu" name="asset_management">
                    <option className="item" name="entry_level" onClick={this.handleAssetManagementEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleAssetManagementMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleAssetManagementHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Institutional Securities */}
                <div className="ui dropdown item">
                  Institutional Securities
                  <i className="dropdown icon"></i>
                  <div className="menu" name="institutional_securities">
                    <option className="item" name="entry_level" onClick={this.handleInstitutionalSecuritiesEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleInstitutionalSecuritiesMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleInstitutionalSecuritiesHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Commerical Banking */}
                <div className="ui dropdown item">
                  Commerical Banking
                  <i className="dropdown icon"></i>
                  <div className="menu" name="commercial_banking">
                    <option className="item" name="entry_level" onClick={this.handleCommercialBankingEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleCommercialBankingMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleCommercialBankingHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Retirement Solutions */}
                <div className="ui dropdown item">
                  Retirement Solutions
                  <i className="dropdown icon"></i>
                  <div className="menu" name="retirement_solutions">
                    <option className="item" name="entry_level" onClick={this.handleRetirementSolutionsEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleRetirementSolutionsMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleRetirementSolutionsHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Portfolio Strategy */}
                <div className="ui dropdown item">
                  Portfolio Strategy
                  <i className="dropdown icon"></i>
                  <div className="menu" name="portfolio_strategy">
                    <option className="item" name="entry_level" onClick={this.handlePortfolioStrategyEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handlePortfolioStrategyMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handlePortfolioStrategyHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

              </div>
            </div>
            <div className="column">
              <div className="ui vertical menu">

                {/* Financial Audit */}
                <div className="ui dropdown item">
                  Financial Audit
                  <i className="dropdown icon"></i>
                  <div className="menu" name="financial_audit">
                    <option className="item" name="entry_level" onClick={this.handleFinancialAuditEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleFinancialAuditMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleFinancialAuditHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Tax Preparation */}
                <div className="ui dropdown item">
                  Tax Preparation
                  <i className="dropdown icon"></i>
                  <div className="menu" name="tax_preparation">
                    <option className="item" name="entry_level" onClick={this.handleTaxPreparationEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleTaxPreparationMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleTaxPreparationHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Consulting */}
                <div className="ui dropdown item">
                  Consulting
                  <i className="dropdown icon"></i>
                  <div className="menu" name="consulting">
                    <option className="item" name="entry_level" onClick={this.handleConsultingEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleConsultingMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleConsultingHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Advisory Services */}
                <div className="ui dropdown item">
                  Advisory Services
                  <i className="dropdown icon"></i>
                  <div className="menu" name="advisory_services">
                    <option className="item" name="entry_level" onClick={this.handleAdvisoryServicesEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleAdvisoryServicesMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleAdvisoryServicesHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Compliance */}
                <div className="ui dropdown item">
                  Compliance
                  <i className="dropdown icon"></i>
                  <div className="menu" name="compliance">
                    <option className="item" name="entry_level" onClick={this.handleComplianceEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleComplianceMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleComplianceHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Human Resources */}
                <div className="ui dropdown item">
                  Human Resources
                  <i className="dropdown icon"></i>
                  <div className="menu" name="human_resources">
                    <option className="item" name="entry_level" onClick={this.handleHumanResourcesEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleHumanResourcesMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleHumanResourcesHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Underwriting */}
                <div className="ui dropdown item">
                  Underwriting
                  <i className="dropdown icon"></i>
                  <div className="menu" name="underwriting">
                    <option className="item" name="entry_level" onClick={this.handleUnderwritingEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleUnderwritingMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleUnderwritingHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

              </div>
            </div>
            <div className="column">
              <div className="ui vertical menu">

                {/* Marketing */}
                <div className="ui dropdown item">
                  Marketing
                  <i className="dropdown icon"></i>
                  <div className="menu" name="marketing">
                    <option className="item" name="entry_level" onClick={this.handleMarketingEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleMarketingMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleMarketingHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Sales */}
                <div className="ui dropdown item">
                  Sales
                  <i className="dropdown icon"></i>
                  <div className="menu" name="sales">
                    <option className="item" name="entry_level" onClick={this.handleSalesEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleSalesMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleSalesHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Financial Analysis */}
                <div className="ui dropdown item">
                  Financial Analysis
                  <i className="dropdown icon"></i>
                  <div className="menu" name="financial_analysis">
                    <option className="item" name="entry_level" onClick={this.handleFinancialAnalysisEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleFinancialAnalysisMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleFinancialAnalysisHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Derivatives */}
                <div className="ui dropdown item">
                  Derivatives
                  <i className="dropdown icon"></i>
                  <div className="menu" name="derivatives">
                    <option className="item" name="entry_level" onClick={this.handleDerivativesEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleDerivativesMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleDerivativesHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* M&A Activity */}
                <div className="ui dropdown item">
                  M&A Activity
                  <i className="dropdown icon"></i>
                  <div className="menu" name="m&a_activity">
                    <option className="item" name="entry_level" onClick={this.handleMandAActivityEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleMandAActivityeMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleMandAActivityHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Venture Capital */}
                <div className="ui dropdown item">
                  Venture Capital
                  <i className="dropdown icon"></i>
                  <div className="menu" name="venture_capital">
                    <option className="item" name="entry_level" onClick={this.handleVentureCapitalEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleVentureCapitalMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleVentureCapitalHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Forensic Accounting */}
                <div className="ui dropdown item">
                  Forensic Accounting
                  <i className="dropdown icon"></i>
                  <div className="menu" name="forensic_accounting">
                    <option className="item" name="entry_level" onClick={this.handleForensicAccountingEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleForensicAccountingMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleForensicAccountingHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div id="areas_expertise">
          <h1> Select Your Skills / Areas of Expertise </h1>
          <div className="ui equal width grid">
            <div className="column">
              <div className="ui vertical menu">

                {/* Client Relationship */}
                <div className="ui dropdown item">
                  Client Relationship
                  <i className="dropdown icon"></i>
                  <div className="menu" name="client_relations">
                    <option className="item" name="entry_level" onClick={this.handleClientRelationshipEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleClientRelationshipMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleClientRelationshipHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* MicroSoft Office */}
                <div className="ui dropdown item">
                  MicroSoft Office
                  <i className="dropdown icon"></i>
                  <div className="menu" name="microsoft_office">
                    <option className="item" name="entry_level" onClick={this.handleMicrosoftOfficeEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleMicrosoftOfficeMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleMicrosoftOfficeHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Quickbooks */}
                <div className="ui dropdown item">
                  Quickbooks
                  <i className="dropdown icon"></i>
                  <div className="menu" name="quickbooks_level">
                    <option className="item" name="entry_level" onClick={this.handleQuickbooksEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleQuickbooksMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleQuickbooksHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Book Keeping */}
                <div className="ui dropdown item">
                  Book Keeping
                  <i className="dropdown icon"></i>
                  <div className="menu" name="book_keeping">
                    <option className="item" name="entry_level" onClick={this.handleBookkeepingEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleBookkeepingMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleBookkeepingHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Tax Software */}
                <div className="ui dropdown item">
                  Tax Software
                  <i className="dropdown icon"></i>
                  <div className="menu" name="tax_software">
                    <option className="item" name="entry_level" onClick={this.handleTaxSoftwareEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleTaxSoftwareMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleTaxSoftwareHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* IT */}
                <div className="ui dropdown item">
                  IT
                  <i className="dropdown icon"></i>
                  <div className="menu" name="it">
                    <option className="item" name="entry_level" onClick={this.handleITEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleITMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleITHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Data Entry */}
                <div className="ui dropdown item">
                  Data Entry
                  <i className="dropdown icon"></i>
                  <div className="menu" name="data_entry">
                    <option className="item" name="entry_level" onClick={this.handleDataEntryEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleDataEntryMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleDataEntryHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

              </div>
            </div>
            <div className="column">
              <div className="ui vertical menu">

                {/* Financial Statement */}
                <div className="ui dropdown item">
                  Financial Statement
                  <i className="dropdown icon"></i>
                  <div className="menu" name="financial_statement">
                    <option className="item" name="entry_level" onClick={this.handleFinancialStatementEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleFinancialStatementMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleFinancialStatementHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Financial Planning */}
                <div className="ui dropdown item">
                  Financial Planning
                  <i className="dropdown icon"></i>
                  <div className="menu" name="debt_consolidation">
                    <option className="item" name="entry_level" onClick={this.handleFinancialPlanningEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleFinancialPlanningMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleFinancialPlanningHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Debt Consolidation */}
                <div className="ui dropdown item">
                  Debt Consolidation
                  <i className="dropdown icon"></i>
                  <div className="menu" name="debt_consolidation">
                    <option className="item" name="entry_level" onClick={this.handleDebtConsolidationEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleDebtConsolidationMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleDebtConsolidationHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Sales */}
                <div className="ui dropdown item">
                  Sales
                  <i className="dropdown icon"></i>
                  <div className="menu" name="sales">
                    <option className="item" name="entry_level" onClick={this.handleSalesEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleSalesMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleSalesHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Web Development */}
                <div className="ui dropdown item">
                  Web Development
                  <i className="dropdown icon"></i>
                  <div className="menu" name="web_development">
                    <option className="item" name="entry_level" onClick={this.handleWebDevelopmentEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleWebDevelopmentMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleWebDevelopmentHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Account Reconciliation  */}
                <div className="ui dropdown item">
                  Account Reconciliation
                  <i className="dropdown icon"></i>
                  <div className="menu" name="account_reconciliation">
                    <option className="item" name="entry_level" onClick={this.handleAccountReconciliationEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleAccountReconciliationMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleAccountReconciliationHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Payroll Management */}
                <div className="ui dropdown item">
                  Payroll Management
                  <i className="dropdown icon"></i>
                  <div className="menu" name="payroll_management">
                    <option className="item" name="entry_level" onClick={this.handlePayrollManagementEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handlePayrollManagementMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handlePayrollManagementHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

              </div>
            </div>
            <div className="column">
              <div className="ui vertical menu">

                {/* Budgeting */}
                <div className="ui dropdown item">
                  Budgeting
                  <i className="dropdown icon"></i>
                  <div className="menu" name="budgeting">
                    <option className="item" name="entry_level" onClick={this.handleBudgetingEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleBudgetingMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleBudgetingHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Forecasting */}
                <div className="ui dropdown item">
                  Forecasting
                  <i className="dropdown icon"></i>
                  <div className="menu" name="forecasting">
                    <option className="item" name="entry_level" onClick={this.handleForecastingEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleForecastingMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleForecastingHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Corporate Reporting */}
                <div className="ui dropdown item">
                  Corporate Reporting
                  <i className="dropdown icon"></i>
                  <div className="menu" name="corporate_reporting">
                    <option className="item" name="entry_level" onClick={this.handleCorporateReportingEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleCorporateReportingMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleCorporateReportingHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Public Speaking */}
                <div className="ui dropdown item">
                  Public Speaking
                  <i className="dropdown icon"></i>
                  <div className="menu" name="public_speaking">
                    <option className="item" name="entry_level" onClick={this.handlePublicSpeakingEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handlePublicSpeakingMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handlePublicSpeakingHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Analytical Writing */}
                <div className="ui dropdown item">
                  Analytical Writing
                  <i className="dropdown icon"></i>
                  <div className="menu" name="analytical_writing">
                    <option className="item" name="entry_level" onClick={this.handleAnalyticalWritingEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleAnalyticalWritingMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleAnalyticalWritingHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Cost Accounting */}
                <div className="ui dropdown item">
                  Cost Accounting
                  <i className="dropdown icon"></i>
                  <div className="menu" name="cost_accounting">
                    <option className="item" name="entry_level" onClick={this.handleCostAccountingEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleMCostAccountingMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleCostAccountingHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Federal Tax Law */}
                <div className="ui dropdown item">
                  Federal Tax Law
                  <i className="dropdown icon"></i>
                  <div className="menu" name="federal_tax_law">
                    <option className="item" name="entry_level" onClick={this.handleFederalStateLawEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleFederalStateLawMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleFederalStateLawHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <br/>

        <button className="ui right floated blue button" onClick={this.handleSubmitData.bind(this)}>Active Profile</button>

      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Applicant_skill_form);
