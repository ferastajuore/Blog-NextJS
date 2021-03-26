const express = require('express');
const next = require('next');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT;
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare()
	.then(() => {
		const server = express();

		server.get('/api/v1/blogs', (req, res) => {
			res.status(200).json({ text: 'test' });
		});

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
