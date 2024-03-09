const jwt = require("jsonwebtoken");
const generateWebToken = (id) =>
  jwt.sign({ id }, "HELLO WORLD", { expiresIn: "5d" });
module.exports = generateWebToken;
