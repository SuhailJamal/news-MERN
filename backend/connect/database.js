const mongoose = require("mongoose");
require("dotenv").config(path = "../.env");
const MongoDBConnnect = process.env.MongoDBurl;
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      MongoDBConnnect
    );
    console.log("Database Succesfully Connected")
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;