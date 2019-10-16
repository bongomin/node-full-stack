const { signup, signin, signout } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const express = require('express');
const router = express.Router();
const { userSignupValidator } = require('../validator');

// signup Router
router.post('/signup', userSignupValidator, signup);
//signin route
router.post('/signin', signin);
//signuot
router.get('/signout', signout);

// any route containing: userId , my app will first Excecute userByid()
router.param('userId', userById);

module.exports = router;