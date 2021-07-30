const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  user:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true
  },
  author: {
    type: String,
  },
  place: {
    type: String,
  },
  description: {
    type: String,
  },
  hashtags: {
    type: String,
  },
  image: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  }

}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);