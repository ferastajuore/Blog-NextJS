import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getArticle } from '../../actions/article';
import BlogIMG from '../../assets/img/blogIMG.jpg';

export const Article = ({ getArticle, articleSlug, article }) => {
	useEffect(() => {
		getArticle(articleSlug);
	}, []);

	return (
		<div className="card">
			<div className="card-image image is-3by2">
				<img src={BlogIMG} alt="Placeholder image" />
			</div>
			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<p className="title is-4">{article.title}</p>
						<p className="subtitle is-6">{article.writer}</p>
					</div>
				</div>

				<div className="content">
					{article.description}
					<br />
					<br />
					<time className="subtitle is-6" dateTime="2016-1-1">
						12:00 AM - 1 Jan 2021
					</time>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	article: state.articles.article,
});

const mapDispatchToProps = {
	getArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
