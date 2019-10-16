
const { allUsers, userById, getUser } = require('../controllers/user');
const { requireSignin } = require('../controllers/auth');
const express = require('express');
const router = express.Router();

// get all users
router.get('/users', allUsers);
//get single users
router.get('/user/:userId', requireSignin, getUser);

// any route containing: userId , my app will first Excecute userByid()
router.param('userId', userById);


module.exports = router;