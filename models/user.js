const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//user Schema
const UserSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
         type:String,
         require:true
    },
    password:{
        type:String,
        require:true
   },
    role:{
        type:String,
        require:true
   }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
 User.findById(id,callback);//mongoose function
}

module.exports.getUserByEmail = function(email, callback){
    const query = {email: email}
    User.findOne(query,callback);//mongoose function
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt)=>{
        if(err) throw err;
      bcrypt.hash(newUser.password, salt, (err, hash)=>{
          newUser.password = hash;
          newUser.save(callback);
      })
    })
}

module.exports.comparePassword = function(userPassword, hash, callback){
 bcrypt.compare(userPassword, hash, (err, isMatch)=>{
   if(err) throw err;
   callback(null, isMatch);
 });
}

module.exports.getAllUsers = function(callback){    
    User.find({}, (err, data)=>{
        console.log("in users data",data);
        if(err) throw err;
        else{
           callback(null,data);
        }
    })
}