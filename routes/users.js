//All our users routes
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

//Register
//Since we are using users files we don't need to put /user/register it is going to get included automatically
router.post('/register',(req, res, next)=>{
    console.log(req.body);
  let newUser = new User({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      role:"user"
  });

  User.addUser(newUser, (err, user)=>{
if(err){
    res.json({success: false, msg:'failed to add user'});
}else{
    res.json({success: true, msg:'new user added'});
}
  });

});

//Authenticate
router.post('/authenticate',(req, res, next)=>{
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
User.getUserByEmail(email, (err, user)=>{
 if(err) throw err;

 if(!user){
     return res.json({success: false, msg: 'user not found'});
 }

 User.comparePassword(password, user.password, (err, isMatch)=>{
    if(err) throw err;

    if(isMatch){
         const token = jwt.sign(user.toJSON(), config.secret, {
             expiresIn:604800 //1 week
         });
         res.json({
             success:true,
             token: 'JWT '+token,
             user:{
                 id: user._id,
                 name:user.name,
                 email:user.email,
                 role:user.role               
             }
         });
    }else{
        res.json({success:false, msg:'Wrong password'});
    }
 });
});
    
});

//profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
    res.json({user: req.user});
});

//AllUsers
router.get('/allusers', (req, res, next)=>{
    User.getAllUsers((err,data)=>{
     if(err){
         res.json({success: false, msg:'no user found'});
     }else{
         res.json({success: true, msg:data});
     }
    });
    
 });
 

// //Validate
// router.get('/validate',(req, res, next)=>{
//     res.send("validate");
// });

module.exports = router;