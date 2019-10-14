const postController = require('../controllers/posts');
const express = require('express');
const router = express.Router();

router.get('/', postController.getPosts);

router.post('/posts', postController.createPost);

module.exports = router;
