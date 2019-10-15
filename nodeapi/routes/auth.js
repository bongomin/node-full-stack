const { signup } = require('../controllers/auth');
const express = require('express');
const router = express.Router();
//const validator = require('../validator');


router.post('/signup', signup);

module.exports = router;