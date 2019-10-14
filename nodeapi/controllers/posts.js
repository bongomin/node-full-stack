const Post = require('../models/posts');

exports.getPosts = (req, res) => {
   res.json({
      "posts": [
         { title: 'post one ' },
         { title: 'post two ' }
      ]
   })
}


exports.createPost = (req, res) => {
   const post = new Post(req.body);
   post.save()
      .then(result => {
         res.status(200).json({
            post: result
         })
      })


}