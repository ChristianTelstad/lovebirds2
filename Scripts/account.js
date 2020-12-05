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

    var user;

    usernameinfo = document.getElementById("usernameinfo");
    firstnameinfo = document.getElementById("firstnameinfo")
    lastnameinfo = document.getElementById("lastnameinfo")
    ageinfo = document.getElementById("ageinfo");
    

    slet = document.getElementById("deleteUserbutton");
    slet.addEventListener("click", deleteuserButton)
    
    logout = document.getElementById("logoutUserbutton");
    logout.addEventListener("click", logoutUserButton)

    function deleteuserButton() {
        deleteUserProfile();
    }

    function logoutUserButton() {
        logoutUser();
    }

    getUser();
})


function getUser(){
    
    //Laver en fetch, see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
fetch('http://localhost:3000/loggedinUser', {
    method: 'GET', // or 'PUT'
  
}).then(res => res.json())
.then (data => {
    users = data;
    console.log(data)
    usernameinfo.innerHTML = data.username
    firstnameinfo.innerHTML = data.firstName
    lastnameinfo.innerHTML = data.lastname
    ageinfo.innerHTML = data.birthday
    }).catch(error => {
    console.log("FEJL" + error)
    })
}

function deleteUserProfile() {

     //Laver en fetch, see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
fetch('http://localhost:3000/deleteUser' + users.id, {
    method: 'DELETE', // or 'PUT'
    
}).then(res => {
    location.href="./sign.html"
    }).catch(error => {
    console.log("FEJL" + error)
    })
}

function logoutUser() {

    //Laver en fetch, see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
fetch('http://localhost:3000/logout', {
    method: 'DELETE', // or 'PUT'
   
 }).then(res => {
     location.href="./sign.html"
     }).catch(error => {
     console.log("FEJL" + error)
     })
}








