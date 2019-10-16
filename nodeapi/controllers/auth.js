const jwt = require('jsonwebtoken');
const User = require('../models/user');
const db = require('../config/database');
const expressJwt = require('express-jwt');

exports.signup = async (req, res) => {

   const userExists = await User.findOne({ email: req.body.email })
   if (userExists) return res.status(403).json({
      error: "email is already taken !"
   })
   const user = await new User(req.body)
   await user.save();
   res.status(200).json({ message: "Signup SuccessFull ! , Please You can Login Now" });

}

exports.signin = (req, res, next) => {

   //find user based on email
   const { _id, email, password } = req.body;
   User.findOne({ email }, (err, user) => {
      if (err || !user) {
         return res.status(401).json({
            error: 'user with that email does not exist . please signin'
         })
      }

      // if user is found makes sure the email an password match 
      ///create authenticate mothod in model and use here
      if (!user.authenticate(password)) {
         return res.status(401).json({
            error: 'Email and Password Do not match'
         })

      }
      //generate  token with user id and secret
      const token = jwt.sign({ _id: user._id }, db.JWT_SECRET)

      // persist the token as 't' in cookie with expiry date
      res.cookie('t', token, { expire: new Date() + 999 })

      // return response with User and Token to the fron End
      const { _id, name, email } = user
      return res.json({ token, user: { _id, email, name } })


   });


}

// signout method / function
exports.signout = (req, res, next) => {
   res.clearCookie('t')
   return res.json({ message: 'You have successfully logged out..!!' })
}

// requiresignin  protect route method
exports.requireSignin = expressJwt({
   secret: db.JWT_SECRET


})