const express = require("express");
const app = express();
const connectDB = require("./connect/database");
const signUpRouter = require("./controller/userSignUp");
const logInRouter = require("./controller/userLogIn");
const currentRouter = require("./controller/currentUser");
require("dotenv").config();
const Port = 8000;

connectDB();
app.get("/", (req, res) => {
  res.send("hello bro");
});

app.use("/api/signup", signUpRouter);
app.use("/api/login", logInRouter);
app.use("/api/current", currentRouter);

app.listen(Port, () => {
  console.log(`App started successfully on PORT ${Port}`);
});
