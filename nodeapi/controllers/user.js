const User = require('../models/user');

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
   return res.json(req.profile);

}