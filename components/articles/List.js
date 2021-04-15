import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAllArticle } from '../../actions/article';
import ItemArticle from './Item';

const list = ({ articles, getAllArticle }) => {
	useEffect(() => {
		getAllArticle();
	}, []);

	return articles === undefined ? (
		<h2>Looding...</h2>
	) : (
		<div className="columns is-mobile is-multiline is-centered">
			{articles.length !== 0 ? (
				articles.map((article) => (
					<div className="column is-half" key={article._id}>
						<ItemArticle article={article} />
					</div>
				))
			) : (
				<article className="message is-info">
					<div className="message-body">
						<strong>There isn't Article !!!</strong>
					</div>
				</article>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	articles: state.articles.articles,
});

const mapDispatchToProps = {
	getAllArticle,
};

export default connect(mapStateToProps, mapDispatchToProps)(list);
