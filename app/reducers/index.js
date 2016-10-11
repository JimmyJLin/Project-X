import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Child Reducers.
import questions from 'reducers/questions';
import questionDetail from 'reducers/questionDetail';
import auth from './auth_reducer';

const rootReducer = combineReducers({
    questions,
    questionDetail,
    auth,
    routing: routerReducer }
);



// import { combineReducers } from 'redux';
// import { reducer as form } from 'redux-form';
// import questions from 'reducers/questions';
// import questionDetail from 'reducers/questionDetail';
// import auth from './auth_reducer';
//
// const rootReducer = combineReducers({
//   questions,
//   questionDetail,
//   form,
//   auth,
// });

export default rootReducer;


/// We pass initial state to root Reducers
// We have to create default state for everything and import here!
// https://github.com/hughfdjackson/immutable
