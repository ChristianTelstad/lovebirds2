
// Create a very simple class
class User {
    constructor(firstname, lastname, birthday, gender,email, password, CPR){
        this.firstName = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.password = password;
        this.CPR = CPR;
    }
}

// Find the buttom in the DOM
let button = document.getElementById("submit");
    
// We add an event listener
button.addEventListener("click", function(){
    let errorText = "";
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let birthday = document.getElementById("birthday").value;
    let CPR = document.getElementById("CPR").value;
    let gender = document.getElementById("gender").value;
    let password = document.getElementById("password").value;
            

    if(firstname == ""){
        errorText += "Fistname is empty\n";            
    }
    if(lastname == ""){
        errorText += "Fistname is empty\n";            
    }
    /*if(regExForEmail.test(String(email).toLowerCase())){
        errorText += "Email is not valid\n";
    }*/
    if(email == "") {
        errorText += "email plz"
    }
    if(birthday == "") {
        errorText += "Birthday is not valid or not in valid format\n";
    }
    if(CPR == "") {
        errorText += "Please submit a CPR\n";
    }
    if(gender == "") {
        errorText += "You need to input a valid gender. Either female or male\n";
    }
    if(password == "") {
        errorText += "Please submit password that is at least six chars \n";
    };

   // If we have errors we output them
   if(errorText != "") {
    document.getElementById("message").innerText = errorText;
        }else {
    let newUser = new User(firstname, lastname, birthday, gender, email, password, CPR);
    //denne funktion er på linje 138
    uploadUser(newUser)}
});