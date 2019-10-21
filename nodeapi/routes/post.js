const { getPosts, createPost, postsByUser, postById, isPoster, updatePost, deletePost } = require('../controllers/posts');
const { requireSignin } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const express = require('express');
const router = express.Router();
const { createPostValidator } = require('../validator');
const _ = require('lodash');

router.get('/posts', getPosts);
router.get('/posts/by/:userId', requireSignin, postsByUser);
router.post('/posts/new/:userId', requireSignin, createPost, createPostValidator);
router.put('/post/:postId', requireSignin, isPoster, updatePost);
router.delete('/post/:postId', requireSignin, isPoster, deletePost);


// any route containing: userId , my app will first Excecute userByid()
router.param('userId', userById);

// any route containing: postById , my app will first Excecute postByid()
router.param('postId', postById);


module.exports = router;
