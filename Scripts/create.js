
class User {
  constructor(id, firstname, lastname, birthday, email, gender, password){
      this.id = id;
      this.firstName = firstname;
      this.lastname = lastname;
      this.birthday = birthday;
      this.email = email;
      this.gender = gender;
      this.password = password;
  }
}

document.addEventListener("DOMContentLoaded", function() {


    var submitbutton = document.getElementById("submitbutton");
    var firstnameinput = document.getElementById("firstname");
    var lastnameinput = document.getElementById("lastname");
    var birthdayinput = document.getElementById("birthday");
    var emailinput = document.getElementById("email");
    var genderinput = document.getElementById("gender");
    var passwordinput = document.getElementById("password");
    
    //.onclick = function () { alert('hello!'); };
    
    function submitfunction (){
    var firstname = firstnameinput.value;
    var lastname = lastnameinput.value;
    var birthday = birthdayinput.value;
    var email = emailinput.value;
    var gender = genderinput.value;
    var password = passwordinput.value;

    submitButton.addEventListener("click", submitfunction);
    
    // var user= new User(username, birthday, gender, email, password);
        
    // hardcoder ny user ud fra model-klasse

    let user = new User(1, firstname, lastname, gender, birthday, email, password);
    
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
