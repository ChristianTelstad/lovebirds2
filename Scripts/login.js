
var objpeople = [
    {
        username: "Chris",
        password: "123"
    },
    {
        username: "Mo",
        password: "pik"
    },
    {
        username: "Phil",
        password: "skunk"
    }
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i = 0; i < objpeople.lenght; i++) {
        if(username == objpeople[i].username && password == objpeople[i].password)
        {
            console.log(username + "is logged in!")
        }
    }
}















//login(username, password) {
    //let userAccepted = this.User
    //.filter (x => x.username === username)
    //.filter (y => y.password === password);
    
    //if(userAccepted && userAccepted.lenght === 1) {
        //localStorage.setItem('currentUser', JSON.stringify({ index: "1", name: userAccepted[0].username}))
        //return Observable.of(null);
    //}
    //currentUser(){
        //return JSON.parse(localStorage.getItem('currentUser'))
    //}
    
    //logOut(){
        //return localStorage.setItem('currentUser', null);
        //}
//}

