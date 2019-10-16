
const { allUsers, userById } = require('../controllers/user');
const express = require('express');
const router = express.Router();

// get all users
router.get('/users', allUsers);

// any route containing: userId , my app will first Excecute userByid()
router.param('userId', userById);

module.exports = router;