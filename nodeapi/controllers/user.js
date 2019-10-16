const User = require('../models/user');

exports.userById = (req, res, next, id) => {
   User.findById(id).exec((err, user) => {
      if (err || !user) return res.status(400).json({ user: "user not found ! " })

   })

   req.profile = user ///adds profile object with profile info
   next()
}

exports.hasAuthorization = (req, res, next) => {
   const authorized = req.profile && req.auth && req.profile._id == req.auth._id
   if (!authorized) {
      res.status(403).json({ error: 'user is not authorised to perform this action ' })
   }
}