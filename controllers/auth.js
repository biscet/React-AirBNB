const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config/config');
module.exports.login = async function(req, res) {
  const candidate = await User.findOne({'email': req.body.email}, (err)=>{
    if (err) console.log(err);
  });
  if(candidate){
    const passwordResault =
    bcrypt.compareSync(req.body.password, candidate.password);
    if(passwordResault){
      const token = jwt.sign({
        userId: candidate._id
      }, Buffer.from(config.jwt, 'base64'), {expiresIn: 60 * 60 * 60});
      res.cookie('Authorization', `${token}`,
          {maxAge: 60*60*60, httpOnly: true});
      res.cookie('Name', candidate.name)
      return res.status(200).json({
        success: true,
        id: candidate._id,
        room: candidate.room,
        name: candidate.name
      });
    } else {
      return res.status(401).json({
        success: false,
        message: 'Incorrect password'
      })
    }
  } else {
    res.status(400).json(
      {
        success: false,
        message: 'This email is not yet registered'
      }
    )
  }
}

module.exports.register = async function(req, res) {
  const candidate = await User.findOne({'email': req.body.email}, (err)=>{
    if (err) console.log(err);
  });
  if(candidate){
    res.status(400).json({
      success: false,
      message: 'This email is already registered'
    })
  } else {
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
      room: ''
    });
    try{
      await newUser.save();
      return res.status(201).json({
        success: true,
        id: newUser._id,
        name: newUser.name,
        room: newUser.room
      });
    } catch(e) {
      console.log(e);
      return;
    }
  }
}