const Post = require('../models/Post');

module.exports = {

  async liked(req, res){
    const {id} = req.params;
    const {user} = req.headers;

    const likedPost = await Post.findById(id);
    if(!likedPost){
      return res.status(400).json({message: "Post does not exist"});
    }

    if(likedPost.likes.includes(user)){
      return res.status(400).json({message: "Post already liked"});
    }

    likedPost.likes.push(user);
    await likedPost.save();

    req.io.emit('like', post);

    return res.status(200).json({message: "Liked post", data: likedPost});
  },
  async noLiked(req, res){

    const {id} = req.params;
    const {user} = req.headers;

    const noLikedPost = await Post.findById(id);
    if(!noLikedPost){
      return res.status(400).json({message: "Post does not exist"});
    }

    if(!noLikedPost.likes.includes(user)){
      return res.status(400).json({message: "Post not liked yet"});
    }

    noLikedPost.likes.pull(user);
    await noLikedPost.save();

    req.io.emit('like', post);

    return res.status(200).json({message: "Not liked post", data: noLikedPost});

  }

};