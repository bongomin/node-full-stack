const User = require('../models/user');

exports.signup = async (req, res) => {

   const userExists = await User.findOne({ email: req.body.email })
   if (userExists) return res.status(403).json({
      error: "email is already taken !"
   })
   const user = await new User(req.body)
   await user.save();
   res.status(200).json({ message: "Signup SuccessFull ! , Please You can Login Now" });

}
