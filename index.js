// require("./course");
const express = require("express"); //
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//Routes
const courseRoutes = require("./routes/courseRoutes");
const { json } = require("express");

//cannect to db
connectDB();
dotenv.config();

const app = express();
app.use(express.json({ limit: "10kb" }));

// app.use("/", courseRoutes);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server Started ${port}`);
});

//installed : express , mongoose , nodemon , validator , slugify, dotenv
