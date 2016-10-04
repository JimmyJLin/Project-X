import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from 'store/configureStore';

import App from 'containers/App';
import Main from 'containers/Main';
import About_us from 'containers/about_us';
import Applicant_login from 'components/user_auth/applicant_login';
import Employer_login from 'components/user_auth/employer_login';
import Applicant_profile_form from 'components/forms/applicant_profile_form';
import Employer_profile_form from 'components/forms/employer_profile_form';
import Applicant_profile from 'components/profiles/applicant/applicant_profile';
import Employer_profile from 'components/profiles/employer/employer_profile';
import Post_job from 'components/jobs/post_job';

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/about_us" component={About_us} />
        {/* Applicant / Employer User Auth */}
        <Route path="/applicant_login" component={Applicant_login} />
        <Route path="/employer_login" component={Employer_login} />

        {/* Applicant & Employer Profile Forms */}
        <Route path="/applicant_profile_form" component={Applicant_profile_form} />
        <Route path="/employer_profile_form" component={Employer_profile_form} />

        {/* Applicant & Employer Profile*/}
        <Route path="/applicant_profile" component={Applicant_profile} />
        <Route path="/employer_profile" component={Employer_profile} />

        {/* Post New Job */}
        <Route path="/new" component={Post_job} />

        <IndexRoute component={Main} />
      </Route>
    </Router>
  );
};
