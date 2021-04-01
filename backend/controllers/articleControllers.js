const Article = require('../models/articleModel');

/**
 *  GET ALL ARTICLES
 */

exports.getAllArticle = async (req, res) => {
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
};

/**
 *  ADD ARTICLE
 */

exports.addArticle = async (req, res) => {
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
};

/**
 *  GET ARTICLE WITH SLUG
 */

exports.getArticle = async (req, res) => {
	try {
		const article = await Article.findOne({ slug: req.params.slug });

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
};
