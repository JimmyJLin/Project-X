import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import $ from 'jquery'; // requires jQuery for AJAX request
import auth from '../../../actions/authActions'
import {browserHistory} from 'react-router';

class Applicant_profile extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }

  }

  componentDidMount() {

  }

  render(){

    return(
        <div id="applicant_profile">

          {/* Header */}
          <div className="ui stackable grid">
            <div className="four wide column">
              <div className="ui center aligned basic segment">
                <img className="ui small circular center image" src="images/img_placeholders/150x150.jpg" alt="Profile Picture"/>
              </div>
            </div>
            <div className="twelve wide column">
              <div className="ui equal width grid">
                <div id="left_panel" className="column">
                  <h2>Jimmy Lin</h2>
                </div>
                <div id="right_panel" className="column">
                  <h2>MBA</h2>
                  <h2>Pace University</h2>
                </div>
              </div>
            </div>
          </div>

          <div className="ui divider"></div>
          {/* Contact Info, Inteted in Positions Education & Previous Experiences */}

          <div className="ui equal width stackable grid">
            <div className="column">
              <h4>contact info</h4>

              <div className="content">
                <div className="ui label details">
                  <p>Email: jimmylin@gmail.com</p>
                </div>
                <div className="ui label details">
                  <p>Phone: 212-555-5555 </p>
                </div>
                <div className="ui label details">
                  <p>LinkedIn: profilelinkhere</p>
                </div>
              </div>

              <br/>
            </div>
            <div className="column">
              <h4>Intested in Position In</h4>
              <div className="content">
                <div className="ui label details">
                  <p>Position 1</p>
                </div>
                <div className="ui label details">
                  <p>Position 2</p>
                </div>
                <div className="ui label details">
                  <p>Position 3</p>
                </div>
              </div>
            </div>
            <div className="column">
              <h4> Education </h4>
              <div className="content">
                <div className="ui label details">
                  <p>Pace Univeristy</p>
                  <p>MBA - 2014</p>
                </div>
                <div className="ui label details">
                  <p>Pace Univeristy</p>
                  <p>Bachelors Degree - 2004</p>
                </div>
              </div>
            </div>
            <div className="column">
              <h4> Previous Positions</h4>

              <div className="ui left aligned divided list">
                <div className="content">
                  <div className="ui label details">
                    <p>Company A : Title</p>
                    <p>2012 - 2014</p>
                  </div>
                  <div className="ui label details">
                  <p>Company B : Title</p>
                  <p>2010 - 2012</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ui divider"></div>
          {/* Bio */}
          <div id="bio" className="twelve wide column">
            <h2>Bio</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>


          <div className="ui divider"></div>
          {/* Experience In */}
          <div className="twelve wide column">
            <h2>Experience:</h2>

            <div className="ui horizontal list centered aligned middle">
              <div className="item search_tags">
                <div className="ui label details">Equity Market</div>
                <div className="ui label details">Marketing</div>
                <div className="ui label details">Accounting</div>
                <div className="ui label details">Financial Statement</div>
              </div>
            </div>

          </div>



          <div className="ui divider"></div>
          {/* Skills */}
          <div className="twelve wide column">
            <h2>Skills: </h2>

            <div className="ui horizontal list centered aligned middle">
              <div className="item search_tags">
                <div className="ui label details">Skill 1</div>
                <div className="ui label details">Skill 2</div>
                <div className="ui label details">Skill 3</div>
                <div className="ui label details">Skill 4</div>
              </div>
            </div>

          </div>


          <div className="ui divider"></div>
          {/* Interested In Working In */}
          <div className="twelve wide column">
            <h2>Interested in Working in: </h2>

            <div className="ui horizontal list centered aligned middle">
              <div className="item search_tags">
                <div className="ui label details">New York</div>
                <div className="ui label details">London</div>
                <div className="ui label details">Paris</div>
                <div className="ui label details">Los Angeles</div>
              </div>
            </div>

          </div>


          <div className="ui divider"></div>
          {/* Additional Links , PDF Download, Languages */}
          <div className="ui equal width stackable grid">
            <div className="column">
              <h4>Additional Links</h4>
              <div className="ui left aligned divided list">
                <div className="content">
                  <div className="ui label details">
                    Linke 1
                  </div>
                  <div className="ui label details">
                    Linke 2
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <h4>Resume</h4>
              <div className="ui center aligned basic segment">
                <a href="images/jimmy_lin_resume.pdf" className="item" target="_blank"><i className="icon download large blue" target="_blank"></i>Download Resume</a>
              </div>
            </div>
            <div className="column">
              <h4> Languages </h4>
              <div className="ui left aligned divided list">
                <div className="content">
                  <div className="ui label details">
                    Chinese
                  </div>
                  <div className="ui label details">
                    Spanish
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div className="ui divider"></div>
          {/* Optional Information */}
          <div className="twelve wide column">
            <h2>Optional Information:</h2>
            <p> This section doesn't make sense, where are we getting these data </p>
            <div className="ui horizontal list centered aligned middle">
              <div className="item search_tags">
                <div className="ui label details">Country of Citizenship</div>
                <div className="ui label details">Interested in Travel for work?</div>
                <div className="ui label details">Prefer Working</div>
                <div className="ui label details">Prefer</div>
              </div>
            </div>

          </div>


          {/* Match Button*/}
          <div className="ui two column centered grid">
            <Link to="/list_match">
              <button className="massive ui button">Match Your Dream Job Today</button>
            </Link>
          </div>
        </div>

    )
  }

}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Applicant_profile);
