const User = require('../models/User');

module.exports = {

  async store(req, res){

    const {name, username, email, password} = req.body;

    const userExists = await User.findOne({username})
    if(userExists){
      return res.status(400).json({message: "User already exists"});
    }

    const createdUser = await User.create({
      name,
      username,
      email,
      password
    });

    return res.status(200).json({message: "User Created Successfully", data: createdUser});

  },

  async index(req, res){

    const allUser = await User.find();

    return res.status(200).json({message: "Successful Listed User", data: allUser});

  }

}