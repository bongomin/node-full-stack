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