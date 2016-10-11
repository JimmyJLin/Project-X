import * as ActionType from 'actions/questions'
import Immutable from 'immutable'


export default function(state = {}, action) {
  switch(action.type) {
    case ActionType.AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case ActionType.UNAUTH_USER:
      return { ...state, authenticated: false };
    case ActionType.AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
