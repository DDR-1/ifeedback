const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

mongoose.set("strictQuery", false);

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
  
const url = process.env.URL;
const client = new MongoClient(url);

const connectionParams = {
useNewUrlParser: true,
useUnifiedTopology: true,
dbName : "iFeedback",
};

mongoose
.connect(url, connectionParams)
.then(() => {
console.log("Connected to the database ");
})
.catch((err) => {
console.error(`Error connecting to the database. ${err}`);
});

var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
  
module.exports = db;