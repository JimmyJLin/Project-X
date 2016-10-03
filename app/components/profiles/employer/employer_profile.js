import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import HeaderMenu from '../../headermenu';
import Footer from '../../footer';


class Employer_profile extends Component {

  render(){
    return(
        <div id="employer_profile">

        <HeaderMenu />

        {/* Profile Header */}
        <div className="ui grid">
          <div className="four wide column">
            <img className="ui small circular image" src="/images/img_placeholders/150x150.jpg" alt="Company Logo"/>
          </div>
          <div className="twelve wide column">
            <div className="twelve wide column">
              <h3>USB Investment Bank</h3>
            </div>

            <div className="ui divider"></div>

            <div className="twelve wide column">
              <div className="ui four middle aligned cards">
                <div className="ui label">
                  Multinational Financial Firm
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ui divider"></div>

        {/* Employer Details */}
        <div className="ui grid">

          <div className="twelve wide column">
            <h3>Company Information</h3>
            <div className="ui equal width grid">
              <div className="equal width row">
                <div className="column">
                  <div className="ui label details">
                    Company Name:
                    <div className="detail">UBS</div>
                  </div>
                </div>
                <div className="column">
                  <div className="ui label details">
                    Company Website:
                    <div className="detail"><a href="www.ubs.com" target="_blank">www.ubs.com</a></div>
                  </div>
                </div>
              </div>

              <div className="equal width row">

                <div className="column">
                  <div className="ui label details">
                    Branch Location:
                    <div className="detail">New York</div>
                  </div>
                </div>
                <div className="column">
                  <div className="ui label details">
                    Industry:
                    <div className="detail">Finance</div>
                  </div>
                </div>
              </div>

              <div className="equal width row">
                <div className="column">
                  <div className="ui label details">
                    Hiring Dept Email:
                    <div className="detail"><a href="mailto:hire@ubs.com ">hire@ubs.com</a></div>
                  </div>
                </div>
                <div className="column">
                </div>
              </div>

            </div>

            {/* Post Job Button*/}
            <div className="ui two column left grid">
              <a href="#">
                <button className="massive ui button">Post Job Today!</button>
              </a>
            </div>

          </div>

          <div className="four wide column">
            <div className="ui segment">
              <h3>Job Postings: </h3>
                <div className="ui middle aligned divided list">

                  <div className="item">
                    <div className="right floated content">
                      <a href="#">1</a>
                    </div>
                    <div className="content">Open</div>
                  </div>

                  <div className="item">
                    <div className="right floated content">
                      <a href="#">0</a>
                    </div>
                    <div className="content">Paused</div>
                  </div>

                  <div className="item">
                    <div className="right floated content">
                      <a href="#">0</a>
                    </div>
                    <div className="content">Closed</div>
                  </div>

                </div>
              <h3>Applicants: </h3>
              <div className="ui middle aligned divided list">

                <div className="item">
                  <div className="right floated content">
                    <a href="#">312</a>
                  </div>
                  <div className="content">Compatible matches</div>
                </div>

                <div className="item">
                  <div className="right floated content">
                    <a href="#">25</a>
                  </div>
                  <div className="content">Engaged</div>
                </div>

                <div className="item">
                  <div className="right floated content">
                    <a href="#">10</a>
                  </div>
                  <div className="content">Rejected</div>
                </div>

                <div className="item">
                  <div className="right floated content">
                    <a href="#">5</a>
                  </div>
                  <div className="content">Interviewed</div>
                </div>

                <div className="item">
                  <div className="right floated content">
                    <a href="#">0</a>
                  </div>
                  <div className="content">Hired</div>
                </div>

                <div className="item">
                  <div className="right floated content">
                    <a href="#">287</a>
                  </div>
                  <div className="content">Remaining</div>
                </div>

            </div>
          </div>
        </div>

        <Footer />

        </div>
      </div>

    )
  }

}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Employer_profile);
