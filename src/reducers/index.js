import { combineReducers } from 'redux';
import counter from './counter';
import login from './login';

const rootReducer = combineReducers({
    counter,
    login
});

export default rootReducer;
