const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  comment: { type: String, required: true },
  postId: { type: String, required: true },
  cretedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },

});

module.exports = mongoose.model("commentSchema" , commentSchema)