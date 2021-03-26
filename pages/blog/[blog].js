import React from 'react';

import { useRouter } from 'next/router';
import Article from '../../components/blog/Article';

export const blogID = () => {
	const router = useRouter();
	const { blog } = router.query;

	return blog === undefined ? (
		<h2>Looding...</h2>
	) : (
		<div className="container">
			<Article blogID={blog} />
		</div>
	);
};

export default blogID;
