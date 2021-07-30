const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
  user:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true
  },
  post: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Post',
    required: true
  }
  
});

module.exports = mongoose.model('Like', LikeSchema);