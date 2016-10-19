import axios from 'axios';
import $ from 'jquery'; // requires jQuery for AJAX request

import { SET_APPLICANT_PROFILE, DELETE_APPLICANT_DETAILS,UPDATE_APPLICANT_DETAILS } from './types';

export function setApplicantUserProfile(applicant) {
  return {
    type: SET_APPLICANT_PROFILE,
    applicant
  };
}


export function postOneApplicant(applicantProfileData){
  return dispatch => {
  console.log('postOneApplicant Function data: ', applicantProfileData)

  axios.post(`/api/applicants`, applicantProfileData).then(res => {
      console.log('Applicant Profile Data Posted to postOneApplicant - returned data: ', res.data)
      // set the applicant state
      dispatch(setApplicantUserProfile(res.data));
    })
 }
}
