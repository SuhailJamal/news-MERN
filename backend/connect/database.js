const mongoose = require("mongoose");
const MongoDBConnnect = "mongodb+srv://user:Zom76jmQKK3hK45w@cluster0.mtkczpr.mongodb.net/";
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