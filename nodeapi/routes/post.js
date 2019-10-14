const postController = require('../controllers/posts');
const express = require('express');
const router = express.Router();
const validator = require('../validator');

router.get('/', postController.getPosts);

router.post('/posts', validator.createPostValidator, postController.createPost);

module.exports = router;
