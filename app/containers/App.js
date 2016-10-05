import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HeaderMenu from '../components/headermenu';
import Footer from '../components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderMenu />

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
