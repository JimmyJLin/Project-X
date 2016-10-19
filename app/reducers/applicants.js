import { SET_APPLICANT_PROFILE } from '../actions/types';

const initialState = {
  applicant: {}
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_APPLICANT_PROFILE:
      return {
        applicant: action.applicant
      };
    default: return state;
  }
}
