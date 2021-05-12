import { combineReducers } from 'redux';
import root from 'modules/root';
import e9s from 'modules/e9s';

const rootReducer = combineReducers({ root, e9s });
export default rootReducer;
