//gemmer express-library i variabel
const express = require('express')
//initialiserer express-server
const server = express()
const port = 3000

var path = require("path");

server.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "DATING/View/sign.html"));
  res.sendFile(path.join(__dirname + "DATING/View/signUp.html"))
});

//server aktiveres
server.listen(port, () => {
    console.log(`Server-applikation lytter på http://localhost:${port}`)
  })

