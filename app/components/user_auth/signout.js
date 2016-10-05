import React, {Component} from 'react';
import {browserHistory} from 'react-router';

export default class Logout extends Component {
  render() {
    return (
      <div className="item">
        <button className="navText"><h2 onClick={this.handleLogout}>Logout</h2></button>
      </div>
    )
  }

  handleLogout(event) {
    event.preventDefault();
    delete localStorage.token;
    browserHistory.push('/'); // redirects to home
    window.location.assign("/")
  }
}
