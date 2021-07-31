const User = require('../models/User');
const Post = require('../models/Post');

module.exports = {
  async index(req, res) {

    const {id} = req.params;

    const userInfo = await User.findById(id);
    if(!userInfo){
      return res.status(400).json({message: "User does not exist"});
    }
    
    const userPosts = await Post.find({user: id});

    return res.status(200).json({message: "User found", userInfo, userPosts});

  }
}