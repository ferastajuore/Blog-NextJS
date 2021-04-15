import {
	GET_ALL_ARTICLES,
	GET_ARTICLE,
	ADD_ARTICLE,
	UPDATE_ARTICLE,
	DELETE_ARTICLE,
} from '../../actions/types';

const initialState = {
	articles: [],
	article: {},
};

const articleReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_ARTICLES:
			return {
				...state,
				articles: action.articles,
			};

		case GET_ARTICLE:
			return {
				...state,
				article: action.payload,
			};

		default:
			return state;
	}
};

export default articleReducer;
