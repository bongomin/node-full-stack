const { signup, signin, signout } = require('../controllers/auth');
const express = require('express');
const router = express.Router();
const { userSignupValidator } = require('../validator');

// signup Router
router.post('/signup', userSignupValidator, signup);
//signin route
router.post('/signin', signin);
//signuot
router.get('/signout', signout);

module.exports = router;