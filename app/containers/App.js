import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HeaderMenu from '../components/headermenu';
import Footer from '../components/footer';

class App extends Component {

  render() {
    const { isAuthenticated } = this.props.auth;

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
  return {
    auth: state.auth
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}



export default connect(mapStateToProps)(App);
