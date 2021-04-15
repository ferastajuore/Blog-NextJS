const Article = require('../models/articleModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

/**
 *  GET ALL ARTICLES
 */

exports.getAllArticle = catchAsync(async (req, res, next) => {
	const articles = await Article.find().sort({ title: 'asc' });

	res.status(200).json({
		message: 'Success',
		article: articles.length,
		articles,
	});
});

/**
 *  ADD ARTICLE
 */

exports.addArticle = catchAsync(async (req, res, next) => {
	const article = await Article.create(req.body);

	res.status(201).json({
		message: 'Success',
		data: article,
	});
});

/**
 *  GET ARTICLE WITH SLUG
 */

exports.getArticle = catchAsync(async (req, res, next) => {
	const article = await Article.findOne({ slug: req.params.slug });

	if (!article) {
		return next(new AppError('There is no article with this name', 400));
	}

	res.status(200).json({
		status: 'success',
		data: article,
	});
});

/**
 *  UPDATE ARTICLE WITH SLUG
 */

exports.updateArticle = catchAsync(async (req, res, next) => {
	const filter = { slug: req.params.slug };
	const data = { slug: req.body.title, ...req.body };

	const article = await Article.findOneAndUpdate(filter, data, {
		new: true,
		runValidators: true,
	});

	if (!article) {
		return next(new AppError('There is no article with this name', 400));
	}

	res.status(200).json({
		status: 'success',
		data: article,
	});
});

/**
 *  DELETE ARTICLE WITH SLUG
 */

exports.deleteArticle = catchAsync(async (req, res, next) => {
	const article = await Article.findOneAndDelete({ slug: req.params.slug });

	if (!article) {
		return next(new AppError('There is no article with this name', 400));
	}

	res.status(200).json({
		status: 'success',
		data: {},
	});
});
