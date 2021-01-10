import {combineReducers} from 'redux';

import haveInterestsReducer from './haveInterests';
import userInterestsReducer from './userinterets';
import loginReducer from './loginReducer';
import userDataReducer from './userDataReducer';
import googleLoginReducer from "./googleLoginReducer";

const allReducer = combineReducers({
    haveInterestsReducer: haveInterestsReducer,
    userInterestsReducer: userInterestsReducer,
    loginReducer: loginReducer,
    userDataReducer: userDataReducer,
    googleLoginReducer:googleLoginReducer
});

export default allReducer;