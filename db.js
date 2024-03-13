const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL
//const mongoURL=process.env.MONGODB_URL_LOCAL;// 'hotel is name of databse , also can change'
const mongoURL= process.env.MONGODB_URL;// This connection for just for Local mongodb enviroment 


// Set up MongoDB connection
mongoose.connect(mongoURL);

// Get the default coneection 
// Mongoose maintains a defult connection object representing the mongoDB connection
const db=mongoose.connection;   

// Define event listenrs for database connnection 

db.on('connected',()=>{ 
    console.log('connected to MongoDB server');    
});

db.on('error',(err)=>{
    console.log('connected to MongoDB error', err);
});

db.on('disconnected',()=>{
    console.log( ' MongoDB disconnected '); 
});
 
// Export the database connection
module.exports = db;   

