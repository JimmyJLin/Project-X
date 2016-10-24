import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MainMenu from '../components/menus/main_menu';
import Footer from '../components/menus/footer';

class App extends Component {

  render() {


    return (
      <div>
        <MainMenu />

          {this.props.children}

        <Footer />

      </div>
    );
  }
}




function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
