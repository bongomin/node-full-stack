const { signup } = require('../controllers/auth');
const express = require('express');
const router = express.Router();
const { userSignupValidator } = require('../validator');


router.post('/signup', userSignupValidator, signup);

module.exports = router;