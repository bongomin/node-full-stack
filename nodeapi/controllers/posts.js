exports.getPosts = (req, res) => {
   res.json({
      "posts": [
         { title: 'post one ' },
         { title: 'post two ' }
      ]
   })
}
