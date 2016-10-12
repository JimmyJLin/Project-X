import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import HeaderMenu from '../../headermenu';
import Footer from '../../footer';


class Employer_profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company_name: '',
      company_address: '',
      company_city: '',
      company_state: '',
      company_zip: '',
      company_description: '',
      company_website: '',
      company_phone_number: '',
      company_email: '',
      company_size: '',
      company_industry: '',
      company_branch: '',
      company_logo: ''
    }

  }

  componentDidMount() {
   // this is where you'll get the data from the 'db'
   $.get('/api/employers/1').done( (data)=>{
      this.state.company_name = data[0].company_name;
      this.state.company_address = data[0].company_address;
      this.state.company_city = data[0].company_city;
      this.state.company_state = data[0].company_state;
      this.state.company_zip = data[0].company_zip;
      this.state.company_description = data[0].company_description;
      this.state.company_website = data[0].company_website;
      this.state.company_phone_number = data[0].company_phone_number;
      this.state.company_email = data[0].company_email;
      this.state.company_size = data[0].company_size;
      this.state.company_industry = data[0].company_industry;
      this.state.company_branch = data[0].company_branch;
      this.state.company_logo = data[0].company_logo;

      this.setState({
        employerProfile: this.state.employerProfile,
        company_name: this.state.company_name,
        company_address: this.state.company_address,
        company_city: this.state.company_city,
        company_state: this.state.company_state,
        company_zip: this.state.company_zip,
        company_description: this.state.company_description,
        company_website: this.state.company_website,
        company_phone_number: this.state.company_phone_number,
        company_email: this.state.company_email,
        company_size: this.state.company_size,
        company_industry: this.state.company_industry,
        company_branch: this.state.company_branch,
        company_logo: this.state.company_logo
      })

    })
  }

  render(){

    const loader = function(){
      return  <div className="ui active inverted dimmer"><div className="ui indeterminate medium text loader">Loading</div></div>
    }

    return(
        <div id="employer_profile">


          {/*{loader()}*/}

          {/* Profile Header */}
          <div className="ui grid">
            <div className="four wide column">
              <img className="ui small circular image" src={this.state.company_logo} alt="Company Logo"/>
            </div>
            <div className="twelve wide column">
              <div className="twelve wide column">
                <h3>{this.state.company_name}</h3>
              </div>

              <div className="ui divider"></div>

              <div className="twelve wide column">
                <div className="ui four middle aligned cards">
                  <div className="ui label">
                    {this.state.company_industry}
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
                      <div className="detail">{this.state.company_name}</div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui label details">
                      Company Website:
                      <div className="detail"><a href={this.state.company_website} target="_blank">{this.state.company_website}</a></div>
                    </div>
                  </div>
                </div>

                <div className="equal width row">

                  <div className="column">
                    <div className="ui label details">
                      Address:
                      <div className="detail">
                      {this.state.company_address}
                      <br/>
                      {this.state.company_city}, {this.state.company_state} {this.state.company_zip}
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui label details">
                      Branch Location:
                      <div className="detail">{this.state.company_branch}</div>
                    </div>
                  </div>
                </div>

                <div className="equal width row">
                  <div className="column">
                    <div className="ui label details">
                      Hiring Dept Email:
                      <div className="detail">{this.state.company_email}</div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui label details">
                      Industry:
                      <div className="detail">{this.state.company_industry}</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Post Job Button*/}
              <div className="ui two column left grid">
                <a href="/new">
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

        </div>

      </div>


    )
  }

}


function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Employer_profile);
