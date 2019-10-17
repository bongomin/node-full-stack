const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// destructuring Object Schema in Mongo db
const { ObjectId } = mongoose.Schema;


const postSchema = new Schema({
   title: {
      type: String,
      required: true,

   },
   body: {
      type: String,
      required: true,


   },
   photo: {
      data: Buffer,
      contentType: String

   },

   postedBy: {            ///note : how to relate from tables or Schemas . remember postedBy is also in the User Schema   ///so relationship is done by objectId and User Schema name
      type: ObjectId,
      ref: "User"            //User modal name

   },
   created: {
      type: Date,
      default: Date.now
   }

});

module.exports = mongoose.model('Post', postSchema);