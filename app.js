//My requires --- js scripts made by me
const tempConverter = require(__dirname + '/requires/page_requires/temperature-conv.js');

//External requires
require('dotenv').config();
const express = require("express");
const ejs = require("ejs");

//requires init
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { orgin: "*"}});

app.set('view engine', 'ejs');
app.use(express.static("public"));

//Variables
const port = process.env.PORT;

//Home-page
app.get("/", function(req, res) {
    res.render("index", {pageOption : 1});
});

//Conversions
app.get("/temperature-conv", function(req, res) {
    res.render("pages/temperature-conv", {pageOption : 0});
});

//Graphs


//server connection
server.listen(port, function() {
  console.log("Server Started on port : " + port);
});


//**********//
//Databases





//*********//
//socket.io
io.on('connection', function(socket) {

//conversions
  //temperature Conversion
  socket.on('convert-temp', (data)=>{
    let convertion = tempConverter(data);
    io.to(socket.id).emit("converted-temperature", convertion);
  });

//Graphs
});
