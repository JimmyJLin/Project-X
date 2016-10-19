import React from 'react';
import { connect } from 'react-redux';
import Applicant_profile_form from './applicant_profile_form';
import { postOneApplicant } from '../../actions/applicantActions';

class NewApplicant extends React.Component {
  render() {
        const { postOneApplicant } = this.props;
    return (
      <div>
        <Applicant_profile_form
           postOneApplicant = {postOneApplicant} />
      </div>
    );
  }
}


NewApplicant.propTypes = {
  postOneApplicant: React.PropTypes.func.isRequired
}


export default connect(null, { postOneApplicant })(NewApplicant);
