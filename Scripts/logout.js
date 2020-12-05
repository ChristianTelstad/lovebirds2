
server.delete("/deleteUser:id", (req, res) => {
    fs.readFile('./users.json', "utf8", (err, data) => {
      users = JSON.parse(data);
      var deleteindex = users.findIndex((user) => user.id==+ req.params.id)
      console.log(deleteindex)
      if(deleteindex >= 0) {
        users.splice(deleteindex, 1);
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