const mongoose = require('mongoose');
const slugify = require('slugify');

const articleShema = new mongoose.Schema({
	title: {
		type: String,
		trem: true,
		required: [true, 'A title must have a name'],
		maxlength: [40, 'A title name must have less or equal 40 characters'],
		minlength: [5, 'A title name must have more or equal 5 characters'],
	},
	slug: String,
	description: {
		type: String,
		trem: true,
		required: [true, 'A description must have some text'],
		minlength: [10, 'A title name must have more or equal 10 characters'],
	},
	writer: {
		type: String,
		trem: true,
		required: [true, 'A writer must have some name'],
	},
	data: {
		type: Date,
		default: Date.now(),
	},
});

// DOCUMENT MIDDLEWARE for document in mongodb run befour an actual evant(save)
articleShema.pre('save', function (next) {
	this.slug = slugify(this.title, { lower: true });
	next();
});

const Article = mongoose.model('Article', articleShema);

module.exports = Article;
