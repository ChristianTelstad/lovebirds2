/* class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
}

document.addEventListener("DOMContentLOADED", function () {

    var updatebutton = document.getElementById("updatebutton");
    var newusernameinput = document.getElementById("usernameinfo");
    var firstnameinput = document.getElementById("firstnameinfo");
    var lastnameinput = document.getElementById("lastnameinfo");
    var ageinput = document.getElementById("ageinfo");
    var passwordinput= document.getElementById("passinfo");

    updatebutton.addEventListener("click", updatefunction);

    function updatefunction () {
        var username = newusernameinput.value
        var firstname = firstnameinput.value
        var lastname = lastnameinput.value
        var birthday = ageinput.value
        var password = passwordinput.value

    let user = new User (1, username, firstname, lastname, birthday, password, password)

    console.log("WORKS");
    update(user)
    }

    updateUser();
})


function update(updateUser) {

fetch('http://localhost:3000/updateUser', {
  method: 'GET', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updateUser),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}
*/