const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema({
   title: {
      type: String,
      required: 'Title is required',
      minlength: 4,
      maxlength: 150
   },
   body: {
      type: String,
      required: 'Title is required',
      minlength: 4,
      maxlength: 250

   }

});

module.exports = mongoose.model('Post', postSchema);