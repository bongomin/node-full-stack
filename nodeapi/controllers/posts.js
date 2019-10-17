const Post = require('../models/posts');
const formidable = require('formidable');
const fs = require('fs');

// getting all posts from the database

exports.getPosts = (req, res) => {
   const post = Post.find().select(' id title body')
      .then((posts) => {
         res.status(200).json({ posts: posts });
      })
      .catch((err) => console.log(err));
};

// posting data /posts to the database
exports.createPost = (req, res) => {

   const form = formidable.IncomingForm();
   form.keepExtensions = true
   form.parse(req, (err, fields, files) => {
      if (err) {
         return res.status(400).json({
            error: "Image Could Not be Uploaded....."
         })
      }
      let post = new Post(fields)

      req.profile.hashed_password = undefined
      req.profile.salt = undefined
      req.profile.postedBy = undefined

      post.postedBy = req.profile  ///trying to get post postedBy user
      if (files.photo) {
         post.photo.data = fs.readFileSync(files.photo.path)
         post.photo.contentType = files.photo.type
      }
      post.save((err, results) => {
         if (err) {
            return res.status(400).json({
               error: err
            })
         }
         res.json(results)
      })
   })



   // const post = new Post(req.body);
   // post.save()
   //    .then(result => {
   //       res.status(200).json({
   //          post: result
   //       })
   //    })
}