const express = require("express");
const dotenv = require("dotenv");
dotenv.config;
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db"); // Import the database connection function

const userRoutes = require("./routes/user.routes");

connectToDb(); // Connect to the database

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/users',userRoutes);

module.exports = app;
