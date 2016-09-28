import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from 'store/configureStore';

import App from 'containers/App';
import Main from 'containers/Main';
import About_us from 'containers/about_us';
import Applicant_login from 'components/user_auth/applicant_login';
import Employer_login from 'components/user_auth/employer_login';

// import Questions from 'containers/Questions';
// import Question from 'containers/Question';

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/about_us" component={About_us} />
        <Route path="/applicant_login" component={Applicant_login} />
        <Route path="/employer_login" component={Employer_login} />
        {/*<Route path="questions" component={Questions} />
        <Route path="questions/:id" component={Question} />*/}
        <IndexRoute component={Main} />
      </Route>
    </Router>
  );
};
