const Post = require('../models/posts');

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
   const post = new Post(req.body);
   post.save()
      .then(result => {
         res.status(200).json({
            post: result
         })
      })
}