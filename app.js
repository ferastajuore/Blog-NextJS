const express = require('express');
const next = require('next');
const morgan = require('morgan');
const errorHandler = require('./backend/controllers/errorController');
const articleRoute = require('./backend/routers/articleRoute');

const app = express();

const dev = process.env.NODE_ENV === 'development';
const nx = next({ dev });
const handle = nx.getRequestHandler();
nx.prepare();

// Development logging
if (dev) {
	app.use(morgan('dev')); // Extract logs
}

// Body parser
app.use(express.json());

// Routers
app.use('/api/v1/articles', articleRoute);

app.get('*', (req, res) => {
	return handle(req, res);
});

app.use(errorHandler);

module.exports = app;
