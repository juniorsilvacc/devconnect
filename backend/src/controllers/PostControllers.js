const Post = require('../models/Post');

module.exports = {

  async store(req, res){

    const {author, place, description, hashtags} = req.body;
    const {filename: image} = req.file;
    const {user} = req.headers;

    const post = await Post.create({
      author,
      place,
      description, 
      hashtags,
      image,
      user
    })

    return res.status(200).json({message: "Post Created Successfully", data: post});

  },

  async index(req, res){

    const posts = await Post.find().sort('-createdAt');

    return res.status(200).json(posts);

  }

}