const { MongoClient } = require('mongodb');
let mongoose = require("mongoose");
require("dotenv").config();


const mongoLiveURI = process.env.MONGO_LIVE_URL;
// const mongoLiveURI = 'mongodb+srv://mehul8299:shaurya%401995@cluster0.pqsblny.mongodb.net/';



const connectToMongo = async () => {
  // Connecting to database using connection string  
  mongoose
    .connect( mongoLiveURI, 
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }
    )
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Database connection error", err);
    });
};

exports.connection = connectToMongo;
