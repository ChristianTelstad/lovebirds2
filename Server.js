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

server.get("/", function (req, res) {
  res.sendFile(path.join(path.resolve() + "/View/signup.html"))
  res.sendFile(path.join(path.resolve() + "/View/sign.html"))
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
    res.json(users.find((users) => {
      return req.params.id == users.id;
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


//PETER DREYER REFFERENCE 
server.post("/userLogin", (req, res) => {
  console.log('hej');
  users = JSON.parse(fs.readFileSync('users.json'));
  console.log(users)
    for(var i=0; i<users.length; i++){
      console.log(req.body.loginUsername)
      console.log(req.body.loginPassword)
        if(req.body.loginUsername == users[i].username && req.body.loginPassword == users[i].password){
            console.log("DET VIRKER");
            var jsonData = JSON.stringify(users[i]);
            fs.writeFile("loggedinUser.json", jsonData, function (err) {
              if (err) {
                console.log(err);
                console.log("FEJL")
                res.json("FAILED") 
              }
            });
            res.json(users[i])
            return
        }
      }          
});

server.post("/updateUser", (req, res) => {
  console.log(1)

  // fs.readFile('./users.json', "utf8", (err, data) => {
  //   users = JSON.parse(data);
  //   req.body.id = users.length + 1;
  //   users.push(req.body);
  //   var jsonData = JSON.stringify(users);
  //     fs.writeFile("./users.json", jsonData, function (err) {
  //       if (err) {
  //         console.log(err);
  //       }
  //     });
  //     res.sendStatus(200);
  // });
});

// server.get("/updateUser", (req, res) => {
//   fs.readFile('./loggedinUser.json', (err, data) => {
//     var users = JSON.parse(data);
//     res.json(users);
//   })
// })

server.get("/loggedinUser", (req, res) => {
  fs.readFile('./loggedinUser.json', (err, data) => {
    var users = JSON.parse(data);
    res.json(users);
  })
})

server.delete("/logout", (req, res) => {
    fs.writeFile("loggedinUser.json", JSON.stringify ({"msg" : "out"}), function (err) {
        if (err) {
          console.log(err);
        } else {
          res.send('logged out')
        }     
      })
});

server.delete("/deleteUser:id", (req, res) => {
  fs.readFile('./users.json', "utf8", (err, data) => {
    users = JSON.parse(data);
    var deleteindex = users.findIndex((users) => users.id==+ req.params.id)
    console.log(deleteindex)
    if(deleteindex >= 0) {
      users.splice(deleteindex, 1);
      var jsonData = JSON.stringify(users);
      fs.writeFile("users.json", jsonData, function (err) {
        if (err) {
          console.log(err);}
      });
      fs.writeFile("loggedinUser.json", null, function (err) {
        if (err) {
          console.log(err);
        }      
      })
      console.log("deleted")
      res.sendStatus(300);
    } else {
      console.log("error deleting")
      res.sendStatus(600);
    }
  });
});

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

/*server.delete("/logout", (req, res) => {
  fs.readFile('./loggedinUser.json', "utf8", (err, data) => {
    users = JSON.parse(data);
    var removeindex = users.findIndex((user) => user.id ==+ req.params.id)
    console.log(removeindex)
    if(removeindex >= 0) {
      users.splice(removeindex, 1);
      fs.writeFile("loggedinUser.json", {}, function (err) {
        if (err) {
          console.log(err);
        }      
      })
      console.log("LOGGED OUT")
      res.sendStatus(300);
    } else {
      console.log("CAN'T LOG OUT")
      res.sendStatus(600);
    }
  });
});*/









