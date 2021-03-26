import connectDB from './dbConnect';
import Article from './models/articleModel';

const handler = async (req, res) => {
	const { method } = req;

	switch (method) {
		case 'GET':
			try {
				const article = await Article.find();

				res.status(200).json({
					message: 'Success',
					articles: article.length,
					blogs: article,
				});
			} catch (error) {
				res.status(400).json({
					message: 'Fail',
					error: error,
				});
			}
			break;

		case 'POST':
			try {
				const article = await Article.create(req.body);

				res.status(201).json({
					message: 'Success',
					data: article,
				});
			} catch (error) {
				res.status(400).json({
					message: 'Fail',
					error: error,
				});
			}
			break;

		default:
			res.status(400).json({ message: false });
			break;
	}
};

export default connectDB(handler);
