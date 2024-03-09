const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  FirstName: { type: String, required: [true, "Name is Required"] },
  SecondName: { type: String, required: [true, "Name is Required"] },
  Email: { type: String, required: [true, "Email is Required"], unique: true },
  Password: { type: String, required: [true, "Password is neccesary"] },
});
module.exports = mongoose.model("userModel", userSchema);
