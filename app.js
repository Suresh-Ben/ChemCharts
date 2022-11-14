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
