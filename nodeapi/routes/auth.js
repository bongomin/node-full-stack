const { signup, signin } = require('../controllers/auth');
const express = require('express');
const router = express.Router();
const { userSignupValidator } = require('../validator');


router.post('/signup', userSignupValidator, signup);

router.post('/signin', signin);

module.exports = router;