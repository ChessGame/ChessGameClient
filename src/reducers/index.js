import { combineReducers } from 'redux';
import counter from './counter';
import aboutMe from './AboutMePage';
import changeLog from './ChangeLogPage';
import blog from './BlogPage';
import index from './indexPage';

const rootReducer = combineReducers({
    counter,
    index,
    blog,
    changeLog,
    aboutMe
});

export default rootReducer;
