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

server.use(express.static("Model"))
server.use(express.static("View"))

server.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/View/sign.html"))
  res.sendFile(path.join(__dirname + "/View/signUp.html"))
});


const mongoose = require("mongoose");

server.get("/", (req, res) => {
    res.send("Hello");
})

server.get("/post", (req, res) => {
    res.send("Hello, we are on post");
})

mongoose.connect('mongodb+srv://ChristianTelstad:Svinndal1@cluster0.oiiky.mongodb.net/test', () => console.log('connected to DB!'))

server.listen(4000)





