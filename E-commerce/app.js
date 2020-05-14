const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
require('dotenv/config');




app.get("/",(req,res) =>
{
   res.json({"message": "this is E-commerce API"});
   
})
require('./routes/routes.js');
 //database connection

mongoose.connect(process.env.DB_CONNECTION,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
},
() => console.log('connected to db'));







app.listen(5500);
