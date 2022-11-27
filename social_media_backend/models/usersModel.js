const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema(
    {   
      firstname:{type:String},
      lastname:{type:String},
      email:{type:String , unique:true},
      password:{type:String},
      gender:{type:String},
      birthday:{type:String}
    },
    {
      timestamps:true
    }
);
userSchema.statics.emailInUse = async function (email) {
  if(!email) throw new Error('Invalid Email');
  try{
    const user = await this.findOne({email})
    if(user) return false

    return true;
  }catch(error){
    console.log('error in emailInUse method',error.message)
    return false

  }
  
  
}
userSchema.methods.generateToken = function(user){
    const token = jwt.sign({_id:user._id

    },process.env.JWT_SECRET,{expiresIn:"30d"})
    return token
};
const User = mongoose.model("User", userSchema);

const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
      const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
      jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Invalid Token' });
        } else {
          req.user = decode;
          next();
        }
      });
    } else {
      res.status(401).send({ message: 'No Token' });
    }
  };
module.exports = {User,isAuth};