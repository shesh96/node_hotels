const mongoose = require('mongoose');
// Define the MongoDB connection URL
const mongoURL =  'mongodb://127.0.0.1:27017/hotels' // 'hotel is name of databse , also can change'

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

