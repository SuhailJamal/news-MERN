const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const generateWebToken = require("./createJWT")

router.post("/", async (req, res) => {
  try {
    const { FirstName, SecondName, Email, Password } = req.query;
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(Password, salt);
    const ans = await userModel.create({
      FirstName,
      SecondName,
      Email,
      Password: hashedPassword,
    });
    res.status(200).json(ans);
  } catch (err) {
    res.json({
      Error : err
    })
  }
});
module.exports = router;
