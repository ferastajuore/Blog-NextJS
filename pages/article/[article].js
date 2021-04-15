import React from 'react';

import { useRouter } from 'next/router';
import Article from '../../components/articles/Article';

export const articleID = () => {
	const router = useRouter();
	const { article } = router.query;

	return article === undefined ? (
		<h2>Looding...</h2>
	) : (
		<div className="container">
			<Article articleSlug={article} />
		</div>
	);
};

export default articleID;
