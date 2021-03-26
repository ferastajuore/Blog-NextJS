import axios from 'axios';
import { GET_ALL_BLOGS, GET_BLOG, ADD_BLOG, UPDATE_BLOG, DELETE_BLOG } from './types';

export const getAllBlogs = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/blogAPI');
		const blogs = res.data.blogs;

		dispatch({ type: GET_ALL_BLOGS, blogs });
	} catch (error) {
		console.error(error);
	}
};

export const getBlog = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/${id}`);
		const payload = res.data.data;

		dispatch({ type: GET_BLOG, id, payload });
	} catch (error) {
		console.error(error);
	}
};
