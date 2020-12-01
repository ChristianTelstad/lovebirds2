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


