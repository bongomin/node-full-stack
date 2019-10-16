const { getPosts, createPost } = require('../controllers/posts');
const { requireSignin } = require('../controllers/auth');
const express = require('express');
const router = express.Router();
const { createPostValidator } = require('../validator');

router.get('/', requireSignin, getPosts);

router.post('/posts', createPostValidator, createPost);

module.exports = router;
