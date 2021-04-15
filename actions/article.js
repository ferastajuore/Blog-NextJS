import axios from 'axios';
import {
	GET_ALL_ARTICLES,
	GET_ARTICLE,
	ADD_ARTICLE,
	UPDATE_ARTICLE,
	DELETE_ARTICLE,
} from './types';

export const getAllArticle = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/v1/articles');
		const articles = res.data.articles;

		dispatch({ type: GET_ALL_ARTICLES, articles });
	} catch (error) {
		console.error(error);
	}
};

export const getArticle = (slug) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/v1/articles/${slug}`);
		const payload = res.data.data;

		dispatch({ type: GET_ARTICLE, slug, payload });
	} catch (error) {
		console.error(error);
	}
};
