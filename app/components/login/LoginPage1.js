import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
        <br/><br/><br/><br/><br/><br/>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default LoginPage;