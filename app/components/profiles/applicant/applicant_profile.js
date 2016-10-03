import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import HeaderMenu from '../../headermenu';
import Footer from '../../footer';


class Applicant_profile extends Component {

  render(){
    return(
        <div id="applicant_profile">

        <HeaderMenu />

        {/* Profile Header */}
        <div className="ui grid">
          <div className="four wide column">
            <img className="ui small circular image" src="/images/img_placeholders/150x150.jpg" alt="Profile Picture"/>
          </div>
          <div className="twelve wide column">
            <div className="twelve wide column">
              <h2>Don Swanson: CPA</h2>
            </div>

            <div className="ui divider"></div>

            <div className="twelve wide column">
              <div className="ui four middle aligned cards">
                  <button className="ui button">Series 7 Certified</button>
                  <button className="ui button">CPA Completion</button>
                  <button className="ui button">Bachelors Accounting</button>
                  <button className="ui button">Entry Level</button>
              </div>
            </div>
          </div>
        </div>

        <div className="ui divider"></div>

        {/*Profile Details*/}
        <div className="ui three column centered grid">
          <div className="three column row centered">
            <div className="column">
              <h2>Interested in Position in</h2>
              <div className="ui left aligned divided list">
                <div className="content">
                  <button className=" fluid ui button">Greater NYC Area</button>
                  <button className=" fluid ui button">London</button>
                  <button className=" fluid ui button">Boston</button>
                </div>
              </div>
            </div>

            <div className="column">
              <h2>Educations</h2>
              <div className="ui left aligned divided list">
                <div className="content">
                  <button className=" fluid ui button">Duke University</button>
                  <button className=" fluid ui button">MBA</button>
                </div>
              </div>
            </div>

            <div className="column">
              <h2>Previous Position</h2>
              <div className="ui left aligned divided list">
                <div className="content">
                  <button className=" fluid ui button">Auditor</button>
                  <button className=" fluid ui button">Deloitte</button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Applicant Key Search Tags */}
        <div className="ui two column centered grid">
          <h2>Key Search Tags</h2>
          <div className="four column centered row">
            <div className="column">
              <button className=" fluid ui button">Accounting</button>
              <button className=" fluid ui button">Series 7</button>
              <button className=" fluid ui button">CPA</button>
            </div>
            <div className="column">
              <button className=" fluid ui button">Bachelors Degree</button>
              <button className=" fluid ui button">2 years work experience</button>
              <button className=" fluid ui button">NYC, Boston, London</button>
            </div>

          </div>
        </div>

        {/* Match Button*/}
        <div className="ui two column centered grid">
          <button className="massive ui button">Match Your Dream Job Today</button>
        </div>

        <Footer />

        </div>

    )
  }

}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Applicant_profile);
