class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
}

    var user = null;

    document.addEventListener("DOMContentLoaded", function () {

    var submitbutton = document.getElementById("form-button");
    var usernameinput = document.getElementById("lusername");
    var passwordinput = document.getElementById("lpassword");


    submitbutton.addEventListener("click", loginfunction);
    

    function loginfunction() {
        var username = usernameinput.value;
        var password = passwordinput.value;


    let user = new User(1, username, password);

        console.log("FEJL");
        login(user)
    }

    alreadyLoggedIn();

});


function login(user){
    
    //Laver en fetch, see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
fetch('http://localhost:3000/userLogin', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
  
    }).then(res => res.json())
    .then (data => {
    if(data!= "CORRECT"){
      location.href="../View/account.html"
    } else {
      alert("Username or Password incorrect")} 
        console.log(data)
    }).catch(error=>{
     console.log("FEJL" + error)
})
}

function getUser() {

    //Laver en fetch, see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    return fetch('http://localhost:3000/loggedinUser', {
        method: 'GET', // or 'PUT'

    }).then(response => response.json())
        .then(data => {
            user = data;
            console.log(data)
            return user
        }).catch(error => {
            console.log("FEJL" + error)
        })
}

async function alreadyLoggedIn(){
    user = await getUser();
    console.log(user)
    if (user.msg != "Out"){
        console.log ("LOGGED IN THANK GOD")
        //location.href="./account.html"
    }
    console.log("FEJL")
}
