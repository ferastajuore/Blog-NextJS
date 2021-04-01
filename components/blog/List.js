import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAllBlogs } from '../../actions/blogs';
import ItemBlog from './Item';

const list = ({ blogs, getAllBlogs }) => {
	useEffect(() => {
		getAllBlogs();
	}, []);

	return blogs === undefined ? (
		<h2>Looding...</h2>
	) : (
		<div className="columns is-mobile is-multiline is-centered">
			{blogs.length !== 0 ? (
				blogs.map((blog) => (
					<div className="column is-half" key={blog._id}>
						<ItemBlog blog={blog} />
					</div>
				))
			) : (
				<p>There isn't blog</p>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	blogs: state.blogs.blogs,
});

const mapDispatchToProps = {
	getAllBlogs,
};

export default connect(mapStateToProps, mapDispatchToProps)(list);
