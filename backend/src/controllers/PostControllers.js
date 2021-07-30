const Post = require('../models/Post');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

module.exports = {

  async store(req, res){

    const {author, place, description, hashtags} = req.body;
    const {filename: image} = req.file;
    const {user} = req.headers;

    //Mudando o type para jpg da imagem
    const [name] = image.split('.');
    const fileName = `${name}.jpg`;

    //Tratando a imagem para o frontend
    await sharp(req.file.path)
      .resize(500)
      .jpeg({quality: 70})
      .toFile(
        path.resolve(req.file.destination, 'resized', fileName)
      )
    
    //Apagando a imagem original
    fs.unlinkSync(req.file.path);

    const post = await Post.create({
      author,
      place,
      description, 
      hashtags,
      image: fileName,
      user
    });

    req.io.emit('post', post);

    return res.status(200).json({message: "Post Created Successfully", data: post});

  },

  async index(req, res){

    const posts = await Post.find().sort('-createdAt');

    return res.status(200).json(posts);

  }

}