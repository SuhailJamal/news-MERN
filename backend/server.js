const express = require("express");
const app = express();
const connectDB = require("./connect/database");
const signUpRouter = require("./controller/userSignUp");
const logInRouter = require("./controller/userLogIn");
const currentRouter = require("./controller/currentUser");
const homeRouter = require("./routes/home");
const politicsRouter = require("./routes/politics");
const sportsRouter = require("./routes/sports");
const techRouter = require("./routes/tech");
require("dotenv").config();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const Port =  process.env.PORT || 5000;

connectDB();
app.get("/", (req, res) => {
  res.send("hello bro");
});

app.use("/api/signup", signUpRouter);
app.use("/api/login", logInRouter);
app.use("/api/current", currentRouter);
app.use('/api/news/home',homeRouter)
app.use('/api/news/politics',politicsRouter)
app.use('/api/news/sports',sportsRouter)
app.use('/api/news/tech',techRouter)
app.listen(Port, () => {
  console.log(`App started successfully on PORT ${Port}`);
});
