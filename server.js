const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //stores in req.body
//env file
const PORT=process.env.PORT||3000;


app.get('/', function (req, res) {
  res.send('Welcome to my hotel.. How i can help you ?, We have list of menus')
})


//Import the router files
const personRoutes= require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');

//use the routers
app.use('/person',personRoutes);  
app.use('/menuItem',menuItemRoutes) ;  


app.listen(PORT,()=>{
    console.log('listening on port 3000');         
}) 