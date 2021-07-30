const User = require('../models/User');

module.exports = {

  async signin(req, res){

    const {username, password} = req.body;

    const validUsername = await User.findOne({username});

    if(!validUsername){
      return res.status(400).json({message: "User does not exit"});
    }

    const validPassword = await User.findOne({
      password: password
    }).where({
      username: username
    });

    const loggedIn = validPassword;

    return res.status(200).json({message: "Success", data: loggedIn});

  },

}