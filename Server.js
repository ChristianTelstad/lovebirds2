//gemmer express-library i variabel
const express = require('express')
//connect to mongoDB
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

mongoose.connect('mongodb+srv://ChristianTelstad:Svinndal1@cluster0.oiiky.mongodb.net/Cluster0?retryWrites=true&w=majority', { useNewUrlParser: true}, () => console.log('Connected to DB!'))
//tester om vi er connected ordentligt 
mongoose.connection.once('open', function(){ 
  console.log('Connection has been made, get going!');
}).on('error', function(error){
  console.log('Connection error', error)
});

//server aktiveres
server.listen(port, () => {
  console.log(`Server-applikation lytter på http://localhost:${port}`)
})







