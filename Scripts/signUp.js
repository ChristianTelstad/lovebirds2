// Create a very simple class
class User {
    constructor(id, firstname, lastname, gender, birthday, email, password){
        this.id = id;
        this.firstName = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.password = password;
    }
}


document.addEventListener("DOMContentLoaded", function() {


    var submitbutton = document.getElementById("submitbutton");
    var firstNameinput = document.getElementById("firstNameinput");
    var lastNameinput = document.getElementById("lastNameinput");
    var birthdayinput = document.getElementById("birthdayinput");
    var emailinput = document.getElementById("emailinput");
    var genderinput = document.getElementById("genderinput");
    var passwordinput = document.getElementById("passwordinput");
    
    submitbutton.addEventListener ("click", submitfunction);
    
    function submitfunction(){
    var firstName = firstNameinput.value;
    var lastName = lastNameinput.value;
    var birthday= birthdayinput.value;
    var email= emailinput.value;
    var gender= genderinput.value;
    var password= passwordinput.value;
    
    // var user= new User(username, birthday, gender, email, password);
        
    // hardcoder ny user ud fra model-klasse
    let user = new User(1, firstName, lastName, birthday, email, gender, password);
    
     console.log("hej"); 
     uploadUser(user)
    }
    });

    function uploadUser(user){
    
        //Laver en fetch, see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    fetch('http://localhost:3001/createUser', {
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
