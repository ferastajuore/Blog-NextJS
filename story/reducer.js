import { combineReducers } from 'redux';
import { blogReducer } from './reducers';

const rootReducer = combineReducers({
	blogs: blogReducer,
});

export default rootReducer;
