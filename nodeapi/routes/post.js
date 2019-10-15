const { getPosts, createPost } = require('../controllers/posts');
const express = require('express');
const router = express.Router();
const { createPostValidator } = require('../validator');

router.get('/', getPosts);

router.post('/posts', createPostValidator, createPost);

module.exports = router;
