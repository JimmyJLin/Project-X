import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from 'store/configureStore';

import App from 'containers/App';
import Main from 'containers/Main';
import About_us from 'containers/about_us';
import Applicant_login from 'components/user_auth/applicant_login';
import Employer_login from 'components/user_auth/employer_login';

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/about_us" component={About_us} />
        <Route path="/applicant_login" component={Applicant_login} />
        <Route path="/employer_login" component={Employer_login} />
        <IndexRoute component={Main} />
      </Route>
    </Router>
  );
};
