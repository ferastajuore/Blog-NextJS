const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const articleRoute = require('./backend/routers/articleRoute');

dotenv.config({ path: './config.env' });

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT;
const app = next({ dev });

const handle = app.getRequestHandler();

// Connact To the MONGOOSE Local
const DB = process.env.DATABASE_LOCAL;
mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})
	.then(() => console.log('DB connaction successful'));

app.prepare()
	.then(() => {
		const server = express();

		server.get('/api/v1/blogs123', (req, res) => {
			res.status(200).json({ text: 'test' });
		});

		server.use('/api/v1/blogs', articleRoute);

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(port, (err) => {
			if (err) throw err;
			console.log(`> Ready on http://localhost:${port}`);
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
