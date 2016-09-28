import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import HeaderMenu from '../components/headermenu';
import Footer from '../components/footer';

class Main extends Component {
  render() {
    return (
      <div className="intro">
        {/* Main Header Menu */}
        <HeaderMenu />

        <div id="main_display_image">
          <img src="images/img_placeholders/1080x500.jpg" alt="topImage"/>
        </div>

        <div id="main_display_text">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>

        <div id="main_display_links" className="ui grid">
          <div className="eight wide column">
            <h3>Applying?</h3>
            <button className="ui button">Begin Your Free Profile Today</button>
          </div>
          <div className="eight wide column">
            <h3>Posting?</h3>
            <button className="ui button">Register & Post Today</button>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Main);
