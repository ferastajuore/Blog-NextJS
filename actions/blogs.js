import axios from 'axios';
import { GET_ALL_BLOGS, GET_BLOG, ADD_BLOG, UPDATE_BLOG, DELETE_BLOG } from './types';

export const getAllBlogs = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/v1/blogs');
		const blogs = res.data.blogs;

		dispatch({ type: GET_ALL_BLOGS, blogs });
	} catch (error) {
		console.error(error);
	}
};

export const getBlog = (slug) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/v1/blogs/${slug}`);
		const payload = res.data.data;

		dispatch({ type: GET_BLOG, slug, payload });
	} catch (error) {
		console.error(error);
	}
};
