const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //stores in req.body


app.get('/', function (req, res) {
  res.send('Welcome to my hotel.. How i can help you ?, We have list of menus')
})



//Import the router files
const personRoutes= require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');

//use the routers
app.use('/person',personRoutes); 
app.use('/menuItem',personRoutes);  

app.listen(3000,()=>{
    console.log('listening on port 3000');         
}) 