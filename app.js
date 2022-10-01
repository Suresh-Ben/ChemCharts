//My requires --- js scripts made by me

//External requires
const express = require("express");
const ejs = require("ejs");

//requires init
const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));

//Variables
const port = 3000;

app.get("/", function(req, res) {
    res.render("index");
});


app.listen(port, function() {
    console.log("Server Started on port : " + port);
});
