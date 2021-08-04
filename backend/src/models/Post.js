const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  user:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
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
  likes: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  }]
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);