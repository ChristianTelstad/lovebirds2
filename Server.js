//gemmer express-library i variabel
const express = require('express')
//initialiserer express-server
const server = express()
const port = 3000

//server aktiveres
server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})

const path = require("path");

server.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/View/sign.html"));
});

server.get("/signUp", function(req, res) {
  res.sendFile(path.join(__dirname + "/View/signUp.html"));
});



