const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');//this allows us to make api call from different domain name
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to dataBase
mongoose.connect(config.database);
//on connection to database
mongoose.connection.on('connected',()=>{
console.log("connected to dataBase",config.database);
});
mongoose.connection.on('error',(err)=>{
    console.log("connected FAILED dataBase",err);
});

const app = express();
const users = require('./routes/users');
const books = require('./routes/books');
//port number
const port = 3000;

// CORS middleware
app.use(cors());

//set Satatic Folder
app.use(express.static(path.join(__dirname,'client')));

//body parser middleware
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users',users);
app.use('/books',books);

//route for home page not gonna be used in the backend
app.get('/',(req,res)=>{
res.send("NOT KNOWN");
});

//start sertver
app.listen(port, ()=>{
    console.log("server started on port ->",port);
});