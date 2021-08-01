const User = require('../models/User');

module.exports = {

  async signin(req, res){

    const {email, password} = req.body;

    const validUsername = await User.findOne({email});

    if(!validUsername){
      return res.status(400).json({message: "E-mail does not exit"});
    }

    const validPassword = await User.findOne({
      password: password
    }).where({
      email: email
    });

    const loggedIn = validPassword;

    if(!loggedIn){
      return res.status(400).json({message: "Incorrect email or password"});
    }

    return res.status(200).json({message: "Success", data: loggedIn});

  },

}