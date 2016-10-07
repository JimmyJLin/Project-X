import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import HeaderMenu from '../../headermenu';
import Footer from '../../footer';
import $ from 'jquery'; // requires jQuery for AJAX request


class Applicant_profile extends Component {

  render(){
    return(
        <div id="applicant_profile">

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
                <div className="ui label">
                  Series 7 Certified
                </div>
                <div className="ui label">
                  CPA Completion
                </div>
                <div className="ui label">
                  Bachelors Accounting
                </div>
                <div className="ui label">
                  Entry Level
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ui divider"></div>

        {/*Profile Details*/}
        <div className="twelve wide column">
          <div className="ui equal width grid">
            <div className="column">
              <h2>Interested in Position in</h2>
              <div className="ui left aligned divided list">
                <div className="content">
                  <div className="ui label details">
                    Greater NYC
                  </div>
                  <div className="ui label details">
                    London
                  </div>
                  <div className="ui label details">
                    Boston
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <h2>Educations</h2>
              <div className="ui left aligned divided list">
                <div className="content">
                  <div className="ui label details">
                    Duke
                  </div>
                  <div className="ui label details">
                    MBA
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <h2>Previous Position</h2>
              <div className="ui left aligned divided list">
                <div className="content">
                  <div className="ui label details">
                    Auditor
                  </div>
                  <div className="ui label details">
                    Deloitte
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Applicant Key Search Tags */}
        <div className="twelve wide column">
          <h2>Key Search Tags</h2>
          <div className="ui equal width grid">
            <div className="column">
              <div className="ui label details">
                Accounting
              </div>
              <div className="ui label details">
                Series 7
              </div>
              <div className="ui label details">
                CPA
              </div>
            </div>
            <div className="column">
              <div className="ui label details">
                Bachelors Degree
              </div>
              <div className="ui label details">
                Mid level
              </div>
              <div className="ui label details">
                NYC, Boston, London
              </div>
            </div>

          </div>
        </div>

        {/* Match Button*/}
        <div className="ui two column centered grid">
          <button className="massive ui button">Match Your Dream Job Today</button>
        </div>


        </div>

    )
  }

}

// const user_id = localStorage.id
function getProfile(user_id){
  $.get({
    url : '/api/auth/'+user_id,
    data : data
  })
  .done((data) => {
    this.props.passProfileData(data.results);
  })
}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Applicant_profile);
