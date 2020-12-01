//gemmer express-library i variabel
const express = require('express')
//initialiserer express-server
const server = express()
const port = 5501

var path = require("path");


//server aktiveres
server.listen(port, () => {
    console.log(`Server-applikation lytter på http://localhost:${port}`)
  })

