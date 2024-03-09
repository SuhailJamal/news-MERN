const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const generateWebToken = require("./createJWT");
router.post("/", async (req, res) => {
  const { Email, Password } = req.query;
  const user = await userModel.findOne({ Email });
  if (user && (await bcrypt.compare(Password, user.Password))) {
    console.log("User found");
    res.json({token : generateWebToken(user._id),
                FirstName : user.FirstName,
                Email : user.Email
    
    });
  } else {
    console.log("User Not Found");
    res.send("User Not Found");
  }
});
module.exports = router;
