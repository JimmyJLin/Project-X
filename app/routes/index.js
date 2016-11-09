import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from 'store/configureStore';

import requireAuth from '../utils/requireAuth';
import requireAuth_emp from '../utils/requireAuth_emp';

// main
import App from 'containers/App';
import Main from 'containers/Main';
import Admin from 'admin/admin'
import ErrorPage from 'components/menus/error'

// Footer
import Terms_and_conditions from 'components/menus/terms_and_conditions'

// forms
import Applicant_profile_form from 'components/forms/applicants/applicant_profile_form';
import Applicant_skill_form from 'components/forms/applicants/applicant_skill_form';

import Employer_profile_form from 'components/forms/employers/employer_profile_form';

// profiles
import Applicant_profile from 'components/profiles/applicant/applicant_profile';
import Employer_profile from 'components/profiles/employer/employer_profile';


// user auth
import SignupPage from 'components/user_auth/signup/SignupPage';
import SignupPage_emp from 'components/user_auth/signup/SignupPage_emp';
import Login_page from 'components/user_auth/login/login_page';
import LoginPage_emp from 'components/user_auth/login/LoginPage_emp';

// employer jobs
import Post_job from 'components/jobs/post_job';
import List_jobs from 'components/jobs/list_jobs';
import Archived_jobs from 'components/jobs/archived_jobs';
import Job from 'components/jobs/job';

// applicant / employer matching
import List_match from 'components/applicants/list_match';
import List_matched_applicants from 'components/applicants/list_matched_applicants';
import Matched_applicant from 'components/applicants/matched_applicant_profile';
import List_matched_employers from 'components/applicants/list_matched_employers';
import Matched_employer from 'components/applicants/matched_employer_profile';
import List_applicants_applied from 'components/applicants/list_applicants_applied'


ErrorPage
export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        {/* Admin Page for Gareth */}
        <Route path="/admin" component={Admin} />
        <Route path="/error" component={ErrorPage} />

        {/* Applicant / Employer User Auth */}
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={Login_page} />
        <Route path="/employer_signup" component={SignupPage_emp} />
        <Route path="/employer_login" component={LoginPage_emp} />


        {/* Applicant & Employer Profile Forms */}
        <Route path="/applicant_profile_form" component={requireAuth(Applicant_profile_form)} />
        <Route path="/Applicant_skill_form" component={requireAuth(Applicant_skill_form)} />

        <Route path="/employer_profile_form" component={requireAuth_emp(Employer_profile_form)} />

        {/* Applicant & Employer Profile*/}
        <Route path="/applicant_profile" component={Applicant_profile} />
        <Route path="/employer_profile" component={Employer_profile} />

        {/* Post New Job */}
        <Route path="/new" component={Post_job} />
        <Route path="/list_jobs" component={List_jobs} />
        <Route path="/archived_jobs" component={Archived_jobs} />
        <Route path="/jobs/job_details/:id" component={Job} />

        {/* Matching */}
        <Route path="/list_matched_applicants" component={List_matched_applicants} />
        <Route path="/Matched_applicant/:id" component={Matched_applicant} />
        <Route path="/list_matched_employers/:id" component={Matched_employer} />
        <Route path="/list_applicants_applied/:job_id" component={List_applicants_applied} />


        <Route path="/list_match" component={List_match} />
        <Route path="/list_matched/job/:id" component={Job} />


        {/* footer */}
        <Route path="/terms_and_conditions" component={Terms_and_conditions} />

        <IndexRoute component={Main} />
      </Route>
    </Router>
  );
};
