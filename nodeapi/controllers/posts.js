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
   // console.log('The body is: ', req.body);
   post.save((err, results) => {
      if (err) {
         return res.status(400).json({
            error: err
         })

      }
      res.status(200).json({
         post: results
      })
   })


}