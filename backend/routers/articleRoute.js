const express = require('express');
const articleControllers = require('../controllers/articleControllers.js');
const router = express.Router();

router.get('/', articleControllers.getAllArticle);
router.post('/', articleControllers.addArticle);
router.get('/:slug', articleControllers.getArticle);
router.patch('/:slug', articleControllers.updateArticle);
router.delete('/:slug', articleControllers.deleteArticle);

module.exports = router;
