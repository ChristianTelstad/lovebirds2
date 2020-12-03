//gemmer express-library i variabel
const express = require('express')
const mongoose = require("mongoose");
//initialiserer express-server
const server = express()
const port = 3000

const path = require("path");

server.use(express.static("Model"))
server.use(express.static("View"))

server.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/View/sign.html"))
});

mongoose.connect('mongodb+srv://ChristianTelstad:Svinndal1@cluster0.oiiky.mongodb.net/test', { useNewUrlParser: true}, () => console.log('connected to DB!'))

//server aktiveres
server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})







