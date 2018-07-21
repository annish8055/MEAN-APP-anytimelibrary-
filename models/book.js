const mongoose = require('mongoose');
const config = require('../config/database');

const BookSchema = mongoose.Schema({
    isbn: {
        type:String
        },
  title: {
         type:String
         },
  subtitle: {
             type:String
            },
  author: {
           type:String
          },
  published: {
              type:String
             },
  publisher: {
              type:String
             },
  pages:{
         type:String
        },
  description: {
                type:String
               },
   image: {
          type:String
         },
  genre:{
         type:String
        },
  quantity: {
             type:String
            }
});

const book = module.exports = mongoose.model('Book', BookSchema);

module.exports.getAllBooks = function(callback){
    
    book.find({}, (err, data)=>{
        console.log("in book data",data);
        if(err) throw err;
        else{
           callback(null,data);
        }
    })
}

module.exports.deleteBook = function(id,callback){
    console.log("in delete book api function");
    book.findByIdAndRemove(id,(err,result)=>{
        if(err) throw err;
        console.log(result);
        callback(null, "success");
    })
}
