const userModel = require("../models/userModel");
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware")
router.get("/",authMiddleware, async (req, res) => {
//  const Email = req.user.Email;
console.log(req.user)
  try {
    const user = await userModel.findById(req.user._id);
    if (!user) {
      console.log("Error in finding the user");
      res.status(404).json({ Error: "Error finding the user" });
    } else {
      res.status(200).json({
        Email: user.Email,
        FirstName: user.FirstName,
      });
    }
  } catch (err) {
    
    res.status(500).json({error : err})
  }
});
module.exports = router;
