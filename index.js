require('./course')
const express = require('express'); //
const mongoose = require('mongoose');
// mongoose.set("useNewUrlParser", true);
// mongoose.set("useUnifiedTopology", true);

mongoose.connect("mongodb://localhost/mongoose", () => {console.log("connected to DB")});
const app = express();

app.listen(8080, () => console.log("Server Started"));
app.get("/", (req, res) => {res.send("hola putos!")})

//installed : express , mongoose , nodemon , validator , slugify