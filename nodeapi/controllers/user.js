const User = require('../models/user');
const _ = require('lodash');

exports.userById = (req, res, next, id) => {
   User.findById(id).exec((err, user) => {
      if (err || !user) {
         return res.status(400).json({ user: "user not found ! " })
      }
      req.profile = user ///adds profile object with profile info
      next();
   })

}

exports.hasAuthorization = (req, res, next) => {
   const authorized = req.profile && req.auth && req.profile._id == req.auth._id
   if (!authorized) {
      res.status(403).json({ error: 'user is not authorised to perform this action ' })
   }
}


//show all users
exports.allUsers = (req, res) => {
   User.find((err, users) => {
      if (err) {
         return res.status(400).json({ err: err })
      }
      res.json({ users: users })

   }).select('_id name email updated created')
}

// get single User
exports.getUser = (req, res) => {
   req.profile.hashed_password = undefined
   req.profile.salt = undefined

   return res.json(req.profile);

}

//profile Update

exports.updateUser = (req, res) => {
   let user = req.profile
   user = _.extend(user, req.body)  //extend mutate source object
   user.updated = Date.now()
   user.save((err) => {
      if (err) {
         return res.status(400).json({
            error: 'you are not authorised to access this action'
         })
      }
      user.hashed_password = undefined
      user.salt = undefined
      res.json({ user })

   })
}

// delete user.

exports.deleteUser = (req, res) => {
   const user = req.profile;
   user.remove((err, user) => {
      if (err) {
         return res.status(400).json({
            error: err
         })
      }
      res.json({ message: "user deleted successfully..." })
   })

}