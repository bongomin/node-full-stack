exports.createPostValidator = (req, res, next) => {

   // title Validation
   req.check('title', 'Insert Tilte please..').notEmpty();
   req.check('title', 'Tiltle Must be between 4 to 150 characters').isLength({
      min: 4,
      max: 150
   });

   // body validation

   req.check('body', 'Fill in the body please..').notEmpty();
   req.check('title', 'Body Must be between 4 to 2000 characters').isLength({
      min: 4,
      max: 2000
   });

   // check for errors
   const errors = req.validationErrors()
   // if error show the first one as they appear
   if (errors) {
      const firstError = errors.map((error) => error.msg)[0]
      return res.status(400).json({ error: firstError })
   }
   // proceed to next middleware
   next();


}




exports.userSignupValidator = (req, res, next) => {

   // name is not empty
   req.check('name', 'please fill in the name....').notEmpty();
   // email is not null,valid and normalized
   req.check('email', 'email must be between 3 and 32 characters ')
      .matches(/.+\@.+\..+/)
      .withMessage('email must contain @')
      .isLength({
         min: 4,
         max: 2000
      })
   //check for passwords
   req.check('password', 'please fill in the password').notEmpty();
   req.check('password').isLength({
      min: 6
   })
      .withMessage('password must contain atleast 6 characters')
      .matches(/\d/)
      .withMessage(' Password must contain a number')

   // check for errors
   const errors = req.validationErrors()
   // if error show the first one as they appear
   if (errors) {
      const firstError = errors.map((error) => error.msg)[0]
      return res.status(400).json({ error: firstError })
   }
   // proceed to next middleware
   next();

}