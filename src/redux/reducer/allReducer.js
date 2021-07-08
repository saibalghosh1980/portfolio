import loginReducer from "./loginReducer";
import {combineReducers} from 'redux';

const allReducer=combineReducers({
    loginReducer: loginReducer
});

export default allReducer;