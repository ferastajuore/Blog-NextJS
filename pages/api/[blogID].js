import connectDB from './dbConnect';
import Article from './models/articleModel';

const handlerID = async (req, res) => {
	const { method } = req;
	const { blogID } = req.query;

	switch (method) {
		case 'GET':
			try {
				const article = await Article.findById(blogID);

				res.status(200).json({
					status: 'success',
					data: article,
				});
			} catch (error) {
				res.status(400).json({
					message: 'Fail',
					error: 'No article found with that ID',
				});
			}
			break;

		default:
			res.status(400).json({ message: false });
			break;
	}
};

export default connectDB(handlerID);
