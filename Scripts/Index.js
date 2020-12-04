
/*class bruger {
    constructor(id, firstname, lastname, birthday, email, gender, interest, username, password){
        this.id = id;
        this.firstname = firstname;
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

    let password = document.getElementById("password");
    password.addEventListener("keyup", function(){
        let password = document.getElementById("password").value;
        let errorText = "";

        if(password == "" || password.length < 6){
            errorText += "Please submit password that is at least six chars \n";
        }

        if(errorText != ""){
            document.getElementById("message").innerText = errorText;
        }else {
            document.getElementById("message").innerText = "Password is valid";
        }


    });

    // Find the buttom in the DOM
    let button = document.getElementById("submitButton");
    
    // We add an event listener
    button.addEventListener("click", function(){
        let errorText = "";
        let firstname = document.getElementById("firstname").value;
        let lastname = document.getElementById("lastname").value;
        let birthday = document.getElementById("birthday").value;
        let email = document.getElementById("email").value;
        let gender = document.getElementById("gender").value;
        let interest = document.getElementById("interest").value
        let username = document.getElementById("username").value
        let password = document.getElementById("password").value;
                

        if(firstname == ""){
            errorText += "Firstname is required\n";            
        }
        if(lastname == ""){
            errorText += "Lastname is required\n";            
        }
        /*if(regExForEmail.test(String(email).toLowerCase())){
            errorText += "Email is not valid\n";
        }
        if(email == ""){
            errorText += "Email is required"
        }
        if(password == ""){
            errorText += "Password has to be at least 6 characters\n";
        }
        
        // If we have errors we output them
        if(errorText != ""){
            document.getElementById("message").innerText = errorText;
        }else {
            let newbruger = new bruger(firstname, lastname, birthday, email, gender, interest, username, password);
            //denne funktion er på linje 138
            uploadUser(newbruger)
        }
    });


    let submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", function(){
        var xhttp = new XMLHttpRequest();
        //betyder når readystate skifter, sker der noget
        xhttp.onreadystatechange = function() {
            //4 er done, https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
            //status 200 er ok, alt gik fint
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                //når man får svar fra serveren. 
                alert(xhttp.responseText);
            }
        };
        xhttp.open("GET", "http://localhost:3000", true);
        xhttp.send();
    });
});
































/*function validatePasswordLenght() {

    if (password.value.length <= 8) {
        document.getElementById("passwordLenghtFeedback").style.color = "rgb(230, 5, 0)";
        event.preventDefault();
    }
    else {
        document.getElementById("passwordLenghtFeedback").style.color = "rgb(15, 173, 0)";
    }
}

function validatePasswordNumber() {

    if (/[0-9]/.test(password.value)) {
        document.getElementById("passwordNumberFeedback").style.color = "rgb(15, 173, 0)";
    }
    else {
        document.getElementById("passwordNumberFeedback").style.color = "rgb(230, 5, 0)";
        event.preventDefault();
    }  
}

function validatePasswordUpperCase() {

    if (/[A-Z]/.test(password.value)) {
        document.getElementById("passwordUpperCaseFeedback").style.color = "rgb(15, 173, 0)";
    }
    else {
        document.getElementById("passwordUpperCaseFeedback").style.color = "rgb(230, 5, 0)";
        event.preventDefault();
    }  
}

const storageInput = document.querySelector(".storage");
const text = document.querySelector(".text");
const button = document.querySelector(".button");*/
