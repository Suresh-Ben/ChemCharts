//My requires --- js scripts made by me
const tempConverter = require(__dirname + '/requires/page_requires/temperature-conv.js');

//External requires
require('dotenv').config();
const express = require("express");
const ejs = require("ejs");
const mysql = require('mysql');

//requires init
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { orgin: "*"}});

//settings view
app.set('view engine', 'ejs');
app.use(express.static("public"));

//sensitive Variables
const port = process.env.PORT;
var client = mysql.createConnection({
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASS
});

//Home-page
app.get("/", function(req, res) {
    res.render("index", {pageOption : 1});
});

//Pages
app.get("/:topic", function(req, res) {
    let request = req.params.topic;
    let href = request.substring(request.length-5, request.length);

    //conversions
    if(href == "-conv")
      res.render("pages/convs/" + request, {pageOption : 0});
    else if(href == "graph")
      res.render("pages/graphs/" + request, {pageOption : 0});

});

//Graphs

//server connection
server.listen(port, function() {
  console.log("Server Started on port : " + port);
});

//*********//
//socket.io
io.on('connection', function(socket) {

  socket.on('load-home',()=>{

    //collecting graphs data
    let sql = "SELECT * FROM Data.graphs";
    client.query(sql, (err, result)=>{
      io.to(socket.id).emit('load-graphs', result);
    });

    //Collecting conversions data
    sql = "SELECT * FROM Data.conv";
    client.query(sql, (err, result)=>{
      io.to(socket.id).emit('load-conv', result);
    });

  });

//conversions
  //temperature Conversion
  socket.on('convert-temp', (data)=>{
    let convertion = tempConverter(data);
    io.to(socket.id).emit("converted-temperature", convertion);
  });

//Graphs
});
