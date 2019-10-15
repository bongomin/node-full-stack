const { getPosts, createPost } = require('../controllers/posts');
const express = require('express');
const router = express.Router();
const validator = require('../validator');

router.get('/', getPosts);

router.post('/posts', validator.createPostValidator, createPost);

module.exports = router;
