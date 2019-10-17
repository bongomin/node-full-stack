
const { allUsers, userById, getUser, updateUser, deleteUser } = require('../controllers/user');
const { requireSignin } = require('../controllers/auth');
const express = require('express');
const router = express.Router();


router.get('/users', allUsers);
router.get('/user/:userId', requireSignin, getUser);
router.put('/user/:userId', requireSignin, updateUser);
router.delete('/user/:userId', requireSignin, deleteUser);

// any route containing: userId , my app will first Excecute userByid()
router.param('userId', userById);


module.exports = router;