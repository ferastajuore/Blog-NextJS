import { GET_ALL_BLOGS, GET_BLOG, ADD_BLOG, UPDATE_BLOG, DELETE_BLOG } from '../../actions/types';

const initialState = {
	blogs: [],
	article: {},
};

const blogReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_BLOGS:
			return {
				...state,
				blogs: action.blogs,
			};

		case GET_BLOG:
			return {
				...state,
				article: action.payload,
			};

		default:
			return state;
	}
};

export default blogReducer;
