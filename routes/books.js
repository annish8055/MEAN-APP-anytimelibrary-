const express = require('express');
const router = express.Router();
const book = require('../models/book');
const config = require('../config/database');

router.get('/booklist', (req, res, next)=>{
   book.getAllBooks((err,data)=>{
    if(err){
        res.json({success: false, msg:'no book found'});
    }else{
        res.json({success: true, msg:data});
    }
   });
   
});


router.post('/addbook', (req, res)=>{
    res.send("connected add book");
});


router.post('/deleteBook',(req, res, next)=>{
    console.log(req.body,"in delete book api");
 const id= req.body.id;
  book.deleteBook(id, (err, data)=>{
    if(err){
        res.json({success: false, msg:'failed'});
    }else{
        res.json({success: true, msg:'success'});
    }  
  });

});


module.exports = router;