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
      quickbooks_level: this.state.quickbooks_level_level,

    }

    console.log("Skill Datas for backend to consume", skillData)
  }

  // Industries functions
  handleWealthManagementEntryChange(e){
    e.preventDefault();

      this.setState({
        wealth_management_level: "Entry Level"
      });
  }

  handleWealthManagementMidChange(e){
    e.preventDefault();

    this.setState({
      wealth_management_level: "Mid Level"
    });
  }

  handleWealthManagementHighChange(e){
    e.preventDefault();

    this.setState({
      wealth_management_level: "High Level"
    });
  }

  handleInvestmentBankingEntryChange(e){
    e.preventDefault();

      this.setState({
        investment_banking_level: "Entry Level"
      });

  }

  handleInvestmentBankingMidChange(e){
    e.preventDefault();

    this.setState({
      investment_banking_level: "Mid Level"
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
        asset_management_level: "Entry Level"
      });

  }

  handleAssetManagementMidChange(e){
    e.preventDefault();

    this.setState({
      asset_management_level: "Mid Level"
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
        institutional_securities_level: "Entry Level"
      });

  }

  handleInstitutionalSecuritiesMidChange(e){
    e.preventDefault();

    this.setState({
      institutional_securities_level: "Mid Level"
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
        commercial_banking_level: "Entry Level"
      });

  }

  handleCommercialBankingMidChange(e){
    e.preventDefault();

    this.setState({
      commercial_banking_level: "Mid Level"
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
        retirement_solutions_level: "Entry Level"
      });

  }

  handleRetirementSolutionsMidChange(e){
    e.preventDefault();

    this.setState({
      retirement_solutions_level: "Mid Level"
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
        portfolio_strategy_level: "Entry Level"
      });

  }

  handlePortfolioStrategyMidChange(e){
    e.preventDefault();

    this.setState({
      portfolio_strategy_level: "Mid Level"
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
        financial_audit_level: "Entry Level"
      });

  }

  handleFinancialAuditMidChange(e){
    e.preventDefault();

    this.setState({
      financial_audit_level: "Mid Level"
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
        tax_preparation_level: "Entry Level"
      });

  }

  handleTaxPreparationMidChange(e){
    e.preventDefault();

    this.setState({
      tax_preparation_level: "Mid Level"
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
        consulting_level: "Entry Level"
      });

  }

  handleConsultingMidChange(e){
    e.preventDefault();

    this.setState({
      consulting_level: "Mid Level"
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
        advisory_services_level: "Entry Level"
      });

  }

  handleAdvisoryServicesMidChange(e){
    e.preventDefault();

    this.setState({
      advisory_services_level: "Mid Level"
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
        compliance_level: "Entry Level"
      });

  }

  handleComplianceMidChange(e){
    e.preventDefault();

    this.setState({
      compliance_level: "Mid Level"
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
        human_resources_level: "Entry Level"
      });

  }

  handleHumanResourcesMidChange(e){
    e.preventDefault();

    this.setState({
      human_resources_level: "Mid Level"
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
        underwriting_level: "Entry Level"
      });

  }

  handleUnderwritingMidChange(e){
    e.preventDefault();

    this.setState({
      underwriting_level: "Mid Level"
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
        marketing_level: "Entry Level"
      });

  }

  handleMarketingMidChange(e){
    e.preventDefault();

    this.setState({
      marketing_level: "Mid Level"
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
        sales_level: "Entry Level"
      });

  }

  handleSalesMidChange(e){
    e.preventDefault();

    this.setState({
      sales_level: "Mid Level"
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
        financial_analysis_level: "Entry Level"
      });

  }

  handleFinancialAnalysisMidChange(e){
    e.preventDefault();

    this.setState({
      financial_analysis_level: "Mid Level"
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
        derivatives_level: "Entry Level"
      });

  }

  handleDerivativesMidChange(e){
    e.preventDefault();

    this.setState({
      derivatives_level: "Mid Level"
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
        manda_activity_level: "Entry Level"
      });

  }

  handleMandAActivityeMidChange(e){
    e.preventDefault();

    this.setState({
      manda_activity_level: "Mid Level"
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
        venture_capital_level: "Entry Level"
      });

  }

  handleVentureCapitalMidChange(e){
    e.preventDefault();

    this.setState({
      venture_capital_level: "Mid Level"
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
        forensic_accounting_level: "Entry Level"
      });

  }

  handleForensicAccountingMidChange(e){
    e.preventDefault();

    this.setState({
      forensic_accounting_level: "Mid Level"
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
        client_relationship_level: "Entry Level"
      });

  }

  handleClientRelationshipMidChange(e){
    e.preventDefault();

    this.setState({
      client_relationship_level: "Mid Level"
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
        microsoft_office_level: "Entry Level"
      });

  }

  handleMicrosoftOfficeMidChange(e){
    e.preventDefault();

    this.setState({
      microsoft_office_level: "Mid Level"
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
        quickbooks_level: "Entry Level"
      });

  }

  handleQuickbooksMidChange(e){
    e.preventDefault();

    this.setState({
      quickbooks_level: "Mid Level"
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
        bookkeeping_level: "Entry Level"
      });

  }

  handleBookkeepingMidChange(e){
    e.preventDefault();

    this.setState({
      bookkeeping_level: "Mid Level"
    });
  }

  handleBookkeepingHighChange(e){
    e.preventDefault();

    this.setState({
      bookkeeping_level: "High Level"
    });
  }

  handleTaxSoftwareEntryChange(e){
    e.preventDefault();

      this.setState({
        tax_software_level: "Entry Level"
      });

  }

  handleTaxSoftwareMidChange(e){
    e.preventDefault();

    this.setState({
      tax_software_level: "Mid Level"
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
        it_level: "Entry Level"
      });

  }

  handleITMidChange(e){
    e.preventDefault();

    this.setState({
      it_level: "Mid Level"
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
        data_entry_level: "Entry Level"
      });

  }

  handleDataEntryMidChange(e){
    e.preventDefault();

    this.setState({
      portfolio_data_entry_levelstrategy_level: "Mid Level"
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
        financial_statement_level: "Entry Level"
      });

  }

  handleFinancialStatementMidChange(e){
    e.preventDefault();

    this.setState({
      financial_statement_level: "Mid Level"
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
        financial_planning_level: "Entry Level"
      });

  }

  handleFinancialPlanningMidChange(e){
    e.preventDefault();

    this.setState({
      financial_planning_level: "Mid Level"
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
        debt_consolidation_level: "Entry Level"
      });

  }

  handleDebtConsolidationMidChange(e){
    e.preventDefault();

    this.setState({
      debt_consolidation_level: "Mid Level"
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
        sales_level: "Entry Level"
      });

  }

  handleSalesMidChange(e){
    e.preventDefault();

    this.setState({
      sales_level: "Mid Level"
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
        web_development_level: "Entry Level"
      });

  }

  handleWebDevelopmentMidChange(e){
    e.preventDefault();

    this.setState({
      web_development_level: "Mid Level"
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
        account_reconciliation_level: "Entry Level"
      });

  }

  handleAccountReconciliationMidChange(e){
    e.preventDefault();

    this.setState({
      account_reconciliation_level: "Mid Level"
    });
  }

  handleAccountReconciliationHighChange(e){
    e.preventDefault();

    this.setState({
      account_reconciliation_level: "High Level"
    });
  }

  handleBudgetingEntryChange(e){
    e.preventDefault();

      this.setState({
        budgeting_level: "Entry Level"
      });

  }

  handleBudgetingMidChange(e){
    e.preventDefault();

    this.setState({
      budgeting_level: "Mid Level"
    });
  }

  handleBudgetingHighChange(e){
    e.preventDefault();

    this.setState({
      budgeting_level: "High Level"
    });
  }


  // Finanice Functions
  handleForecastingEntryChange(e){
    e.preventDefault();

      this.setState({
        forecasting_level: "Entry Level"
      });

  }

  handleForecastingMidChange(e){
    e.preventDefault();

    this.setState({
      forecasting_level: "Mid Level"
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
        corporate_reporting_level: "Entry Level"
      });

  }

  handleCorporateReportingMidChange(e){
    e.preventDefault();

    this.setState({
      corporate_reporting_level: "Mid Level"
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
        public_speaking_level: "Entry Level"
      });

  }

  handlePublicSpeakingMidChange(e){
    e.preventDefault();

    this.setState({
      public_speaking_level: "Mid Level"
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
        analytical_writing_level: "Entry Level"
      });

  }

  handleAnalyticalWritingMidChange(e){
    e.preventDefault();

    this.setState({
      analytical_writing_level: "Mid Level"
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
        cost_accounting_level: "Entry Level"
      });

  }

  handleMCostAccountingMidChange(e){
    e.preventDefault();

    this.setState({
      cost_accounting_level: "Mid Level"
    });
  }

  handleCostAccountingHighChange(e){
    e.preventDefault();

    this.setState({
      manda_activity_level: "High Level"
    });
  }

  handleFederalStateLawEntryChange(e){
    e.preventDefault();

      this.setState({
        federal_tax_law_level: "Entry Level"
      });

  }

  handleFederalStateLawMidChange(e){
    e.preventDefault();

    this.setState({
      federal_tax_law_level: "Mid Level"
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
                  Wealth Management
                  <i className="dropdown icon"></i>
                  <div className="menu" name="wealth_management">
                    <option className="item" name="entry_level" onClick={this.handleWealthManagementEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleWealthManagementMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleWealthManagementHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Investment Banking */}
                <div className="ui dropdown item">
                  Investment Banking
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

                {/* Wealth Management */}
                <div className="ui dropdown item">
                  Wealth Management
                  <i className="dropdown icon"></i>
                  <div className="menu" name="wealth_management">
                    <option className="item" name="entry_level" onClick={this.handleWealthManagementEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleWealthManagementMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleWealthManagementHighChange.bind(this)}> 5+ years</option>
                  </div>
                </div>

                {/* Investment Banking */}
                <div className="ui dropdown item">
                  Investment Banking
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
                    <option className="item" name="entry_level" onClick={this.handleCommercialBankingEntryChange.bind(this)}> 0-2 years</option>
                    <option className="item" name="mid_level" onClick={this.handleCommercialBankingMidChange.bind(this)}> 2-5 years</option>
                    <option className="item" name="high_level" onClick={ this.handleCommercialBankingHighChange.bind(this)}> 5+ years</option>
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
