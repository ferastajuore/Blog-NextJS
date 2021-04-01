const express = require('express');
const articleControllers = require('../controllers/articleControllers.js');
const router = express.Router();

router.get('/', articleControllers.getAllArticle);
router.post('/', articleControllers.addArticle);
router.get('/:slug', articleControllers.getArticle);

module.exports = router;
