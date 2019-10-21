const Post = require('../models/posts');
const formidable = require('formidable');
const fs = require('fs');

//post by id

exports.postById = (req, res, next, id) => {
   Post.findById(id)
      .populate('postedBy', '_id name')
      .exec((err, post) => {
         if (err || !post) {
            return res.status(400).json({ error: err })
         }
         req.post = post
         next()


      })

}

// getting all posts from the database
exports.getPosts = (req, res, next) => {
   const post = Post.find()
      .populate('postedBy', '_d name')  //getting postedBy person by use of populate method
      .select(' id title body')
      .then((posts) => {
         res.status(200).json({ posts: posts });
      })
      .catch((err) => console.log(err));
};

// posting data /posts to the database
exports.createPost = (req, res, next) => {

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



   // get posts by a user


}

exports.postsByUser = (req, res, next) => {
   Post.find({ postedBy: req.profile._id })
      .populate('postedBy', "_id name")
      .sort('_created')
      .exec((err, posts) => {
         if (err) {
            return res.status(400).json({
               err: err
            });
         }
         res.json({ posts })

      });
};

exports.isPoster = (req, res, next) => {
   let isPoster = req.post && req.auth && req.post.postedBy._id == req.auth._id;
   if (!isPoster) {
      return res.status(403).json({
         error: "user is not authorized"
      });
   }
   next()
};



exports.deletePost = (req, res, next) => {
   let post = req.post;
   post.remove((err, post) => {
      if (err) {
         return res.status(400).json({
            error: err
         });
      }
      res.json({
         message: "Post Deleted SuccessFully"
      });

   });
};