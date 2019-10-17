const { getPosts, createPost } = require('../controllers/posts');
const { requireSignin } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const express = require('express');
const router = express.Router();
const { createPostValidator } = require('../validator');

router.get('/', getPosts);
router.post('/posts/new/:userId', requireSignin, createPost, createPostValidator);

// any route containing: userId , my app will first Excecute userByid()
router.param('userId', userById);

module.exports = router;
