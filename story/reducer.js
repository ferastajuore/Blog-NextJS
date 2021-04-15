import { combineReducers } from 'redux';
import { articleReducer } from './reducers';

const rootReducer = combineReducers({
	articles: articleReducer,
});

export default rootReducer;
