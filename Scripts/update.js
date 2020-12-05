class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
}

document.addEventListener("DOMContentLOADED", function () {

    var updatebutton = document.getElementById("updatebutton")
    var newusernameinput = document.getElementById("username");
    var changepasswordinput = document.getElementById("changepassword");
    var confirmpasswordinput = document.getElementById("confirmpassword");

    updatebutton.addEventListener("click", updatefunction);

    function updatefunction () {
        var username = newusernameinput.value
        var password = changepasswordinput.value
        var password = confirmpasswordinput.value

    let user = new User (1, username, password)

    console.log("WORKS");
    update(user)
    }

    updateUser();
})

function updateUser(){
    
    //Laver en fetch, see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
fetch('http://localhost:3000/updateUser', {
    method: 'GET', // or 'PUT'
  
}).then(res => res.json())
.then (data => {
    users = data;
    console.log(data)
    location.href="./update.html"
    }).catch(error => {
    console.log("FEJL" + error)
    })
}


