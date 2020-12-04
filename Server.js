import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

//initialiserer express-server
const server = express();
const port = 3000;

var users = [];

//Path til HTML
server.use(express.static("Model"));
server.use(express.static("View"));
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(cors());

server.get("/", function(req, res) {
  res.sendFile(path.join(path.resolve() + "/View/signup.html"))
});

server.get("/users", (req, res) => {
  fs.readFile('./users.json', "utf8", (err, data) => {
    users = JSON.parse(data);
    res.json(users);
  });
});

server.get("/users/:id", (req, res) => {
  fs.readFile('./users.json', "utf8", (err, data) => {
    users = JSON.parse(data);
    res.json(users.find((user) => {
      return req.params.id == user.id;
    }));
  });
});

server.post("/createUser", (req, res) => {
  fs.readFile('./users.json', "utf8", (err, data) => {
    users = JSON.parse(data);
    req.body.id = users.length + 1;
    users.push(req.body);
    var jsonData = JSON.stringify(users);
      fs.writeFile("./users.json", jsonData, function (err) {
        if (err) {
          console.log(err);
        }
      });
      res.sendStatus(200);
  });
});

server.delete("/deleteUser/:id", (req, res) => {
  fs.readFile('./users.json', "utf8", (err, data) => {
    users = JSON.parse(data);
    var deleteindex = users.findIndex((user) => user.id==+ req.params.id)
    console.log(deleteindex)
    if(deleteindex > 0) {
      users.splice(deleteindex, 1)
      var jsonData = JSON.stringify(users)
      fs.writeFile("users.json", jsonData, function (err) {
        if (err) {
          console.log(err);
        }
      });
      res.sendStatus(200);
    }
  });
});



function login (req, res, next){
  console.log('hej');
  let user = JSON.parse(fs.readFileSync('./users.json'))
  
      for(var i=0; i<user.length; i++){
          if(req.body.loginusername == user[i].username && req.body.loginpassword == user[i].password){
              console.log("DET VIRKER")
              res.json(user)
          } else {
              console.log("FEJL")
              res.json("Fuckingshit")
      } 
  } 
}


//server.post 

//server aktiveres
server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
});




//connect to mongoDB
//const mongoose = require("mongoose");
//require('dotenv/config');

//mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true }, { useUnifiedTopology: true },() => console.log('Connected to DB!'))
//tester om vi er connected ordentligt 
//mongoose.connection.once('open', function(){ 
  //console.log('Connection has been made, get going!');
//}).on('error', function(error){
  //console.log('Connection error', error)
//});









