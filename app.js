//My requires --- js scripts made by me

//External requires
const express = require("express");

//requires init
const app = express();

//Variables
const port = 3000;

app.get("/", function(req, res){
  res.send("Hello, User");
});


app.listen(port, function(){
  console.log("Server Started on port : " + port);
});
