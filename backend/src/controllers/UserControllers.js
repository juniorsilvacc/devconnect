const User = require('../models/User');

module.exports = {

  async store(req, res){

    const {name, username, password} = req.body;

    const userExists = await User.findOne({username})
    if(userExists){
      return res.status(400).json({message: "User already exists"});
    }

    const createdUser = await User.create({
      name,
      username,
      password
    });

    return res.status(200).json(createdUser);

  },

  async index(req, res){

    const allUser = await User.find();

    return res.status(200).json(allUser);

  }

}