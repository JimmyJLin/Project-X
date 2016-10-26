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
      wealth_management_levl: '',
      industries: [
        {
          id: "1",
          name: "Wealth Management",
          value: "wealth_management"
        },
        {
          id: "2",
          name: "Investment Banking",
          value: "investment_banking"
        },
        {
          id: "3",
          name: "Asset Management",
          value: "asset_management"
        },
        {
          id: "4",
          name: "Institutional Securities",
          value: "institutional_securities"
        },
        {
          id: "5",
          name: "Commercial Banking",
          value: "commercial_banking"
        },
        {
          id: "6",
          name: "Retirement Solutions",
          value: "retirement_solutions"
        },
        {
          id: "7",
          name: "Wealth Management",
          value: "portfolio_strategy"
        }
      ]
    }

  }


  handleWealthManagementEntryChange(e){
    e.preventDefault();
    console.log("handleWealthManagementEntryChange clicked")

      this.setState({
        wealth_management_levl: "Entry Level"
      });

  }

  handleWealthManagementMidChange(e){
    e.preventDefault();
    console.log("handleWealthManagementMidChange clicked")

    this.setState({
      wealth_management_levl: "Mid Level"
    });
  }

  handleWealthManagementHighChange(e){
    e.preventDefault();
    console.log("handleWealthManagementHighChange clicked")

    this.setState({
      wealth_management_levl: "High Level"
    });
  }


  render(){
      let industryData = this.state.industries
      let industryExperience = industryData.map(function(industry){

      return <div className="ui dropdown item">
              {industry.name}
              <i className="dropdown icon"></i>
              <div key={industry.id} className="menu" name={industry.name} value={`this.state.${industry}`}>
                <option className="item" name="entry_level" value={`this.state.${industry}_entry_level`} onClick={ `this.handle${industry}EntryChange.bind(this)`}> 0-2 years</option>
                <option className="item" name="mid_level" value="Mid Level" value={`this.state.${industry}_mid_level`} onClick={`this.handle${industry}MidChange.bind(this)`}> 2-5 years</option>
                <option className="item" name="high_level" value="High Level" value={`this.state.${industry}_high_level`} onClick={ `this.handle${industry}HighChange.bind(this)`}> 5+ years</option>
              </div>
            </div>
    })

    return (
      <div id="applicant_profile_form">
        <div id="industry_experience">
          <h1> Do you hold Industry experience in any of the following areas? </h1>
          <div className="three fields">
            <div className="field">
              <div className="ui vertical menu">

                {industryExperience}

              </div>
            </div>
            <div className="field">

            </div>
            <div className="field">

            </div>
          </div>
        </div>

        <div>
          <h1> Select Your Skills / Areas of Expertise </h1>

        </div>

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
