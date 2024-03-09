const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, "HELLO WORLD");
      console.log(decoded)
      req.user = await userModel.findOne({Email : decoded.id}).select('-Password');
      if(!req.user){
        res.status(404).json({Error : "Try block req.use not found"})
      }
      next();
    } catch (err) {
      console.log("Token authentication Failed");
      res.status(500).json(err);
      if (!token) {
        res.status(401).json({ Error: "Error finding token" });
      }
    }
  } else {
    res.status(404).json({ Error: "Else part executed" });
  }
};
module.exports = protect;
