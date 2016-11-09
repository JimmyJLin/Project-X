import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';

class ErrorPage extends Component {

  render(){
    return(

      <div id="error_page">

        <div className="ui two column centered stackable grid">
          <div className="column">

            <img className="ui image large" src="images/img_placeholders/ghosty.png" alt="ghostly"/>

          </div>
          <div className="column">

            <h1 id="error_404">404</h1>
            <h1>Page Not Found ... Boo</h1>
            <br/>
            <Link to="/" >Go to the front page --></Link>

          </div>

        </div>

      </div>

    )
  }

}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(ErrorPage);
