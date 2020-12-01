function validatePasswordLenght() {

    if (password.value.length <= 8) {
        document.getElementById("passwordLenghtFeedback").style.color = "rgb(248, 191, 191)";
        event.preventDefault();
    }
    else {
        document.getElementById("passwordLenghtFeedback").style.color = "#bdfcc7";
    }
}


function validatePasswordNumber() {

    if (/[0-9]/.test(password.value)) {
        document.getElementById("passwordNumberFeedback").style.color = "#bdfcc7";
    }
    else {
        document.getElementById("passwordNumberFeedback").style.color = "rgb(248, 191, 191)";
        event.preventDefault();
    }  
}


function validatePasswordUpperCase() {

    if (/[A-Z]/.test(password.value)) {
        document.getElementById("passwordUpperCaseFeedback").style.color = "#bdfcc7";
    }
    else {
        document.getElementById("passwordUpperCaseFeedback").style.color = "rgb(248, 191, 191)";
        event.preventDefault();
    }  
}

const storageInput = document.querySelector(".storage");
const text = document.querySelector(".text");
const button = document.querySelector(".button");

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
    let ssn = document.getElementById("ssn").value;
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
    if(email == ""){
        errorText += "email plz"
    }
    if(birthday == "") {
        errorText += "Birthday is not valid or not in valid format\n";
    }
    if(ssn == ""){
        errorText += "Please submit a CPR\n";
    }
    if(gender == ""){
        errorText += "You need to input a valid gender. Either female or male\n";
    }
    if(password == ""){
        errorText += "Please submit password that is at least six chars \n";
    };

   // If we have errors we output them
   if(errorText != ""){
    document.getElementById("message").innerText = errorText;
        }else {
    let newUser = new User(firstname, lastname, birthday, gender, email, password, ssn);
    //denne funktion er på linje 138
    uploadUser(newUser)}
});
