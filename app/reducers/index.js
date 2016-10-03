import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import questions from 'reducers/questions';
import questionDetail from 'reducers/questionDetail';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  questions,
  questionDetail,
  form,
  auth: authReducer
});

export default rootReducer;
