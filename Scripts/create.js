
class User {
  constructor(id, firstname, lastname, birthday, email, gender, interest, username, password){
      this.id = id;
      this.firstName = firstname;
      this.lastname = lastname;
      this.birthday = birthday;
      this.email = email;
      this.gender = gender;
      this.interest = interest;
      this.username = username;
      this.password = password;
  }
}

document.addEventListener("DOMContentLoaded", function() {


    var submitButton = document.getElementById("submitButton");
    var firstnameinput = document.getElementById("firstname");
    var lastnameinput = document.getElementById("lastname");
    var birthdayinput = document.getElementById("birthday");
    var emailinput = document.getElementById("email");
    gender = document.getElementById("gender");
    interest = document.getElementById("interest");
    var usernameinput = document.getElementById("username");
    var passwordinput = document.getElementById("password");
    
    //.onclick = function () { alert('hello!'); };
    
submitButton.addEventListener("click", submitfunction);
    
    function submitfunction (){
    var firstname = firstnameinput.value;
    var lastname = lastnameinput.value;
    var birthday = birthdayinput.value;
    var email = emailinput.value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var interest = document.querySelector('input[name="interest"]:checked').value;
    var username = usernameinput.value;
    var password = passwordinput.value;

        
    //hardcoder ny user ud fra model-klasse

    let user = new User(1, firstname, lastname, birthday, email, gender, interest, username, password);
    
     console.log("User Uploaded"); 
     uploadUser(user)
    }
});

    function uploadUser(user){
    
        //Laver en fetch, see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    fetch('http://localhost:3000/createUser', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
      
    }).then(response =>{
      console.log(response)
    }).catch(error=>{
      console.log(error)
    })
    }



//var mongoose = require('mongoose');

//var userSchema = new mongoose.Schema({
    //username: {type: String, unique: true},
    //password: {type: String},
    //firstname: String,
    //lastname: String
//})

//var user = mongoose.model('myuser', userSchema);

//module.exports = user;
