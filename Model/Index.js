// Create a very simple class
class User {
    constructor(firstname, lastname, birthday, gender,email, password, CPR ){
        this.firstName = firstname;
        this.lastname = lastname;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.password = password;
        this.CPR = CPR;}
}

// Construct the object
// We only want to do something when the dom is loaded
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
        if(email == ""){
            errorText += "email plz"
        }
        if(birthday == "") {
            errorText += "Birthday is not valid or not in valid format\n";
        }
        if(CPR == ""){
            errorText += "Please submit a CPR\n";
        }
        if(gender == ""){
            errorText += "You need to input a valid gender. Either female or male\n";
        }
        if(password == ""){
            errorText += "Please submit password that is at least six chars \n";
        }
        
        // If we have errors we output them
        if(errorText != ""){
            document.getElementById("message").innerText = errorText;
        } else {
            let newUser = new User(firstname, lastname, birthday, gender, email, password, CPR);
            //denne funktion er på linje 138
            uploadUser(newUser)}
    });

    let apiButton = document.getElementById("apiButton");
    apiButton.addEventListener("click", function(){
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

function uploadfile(){
var xhttp = new XMLHttpRequest();
var file = document.getElementById('file')
//Vi finder den file, som er under file.files[0], i HTML er den måde en fil bliver gemt
//når man går brug af input tagget med type file. Se her https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
    var myfile = file.files[0]
    //Vi gør brug af FormData, da den encoder vores data, til en bestemt type som hedder "multipart/form-data" https://developer.mozilla.org/en-US/docs/Web/API/FormData
    //Denne type kan vi sende
    var formData = new FormData()
    //Her sætter vi key value pair i formen til file: Myfile
    //Så nøglen file, bliver lig den fil, som vi har uploadet
    //Via append, bliver den en del af FormData se dokumentation linje 127. 
    formData.append('file', myfile)

    //Her laves en request, man "initializer" den. Vi forklare vores Request hvilken slags den er og hvor den skal hen. 
    //True betyder det er en asynkron request vi laver. skal være true når der bruges multipart. 
    xhttp.open("POST", "http://localhost:3000/upload", true); 
    //Sender den request vi har defineret lige over. https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send
    xhttp.send(formData); 
    //betyder når readystate skifter, sker der noget
xhttp.onreadystatechange = function() {
    
    //4 er done, https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    //status 200 er ok, alt gik fint
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        //når man får svar fra serveren. 
        console.log(xhttp.responseText)   
    }
};

}

function uploadUser(user){
    
    //Laver en fetch, see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
fetch('http://localhost:3000/user', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
}).then(response => response.json()).then(data => 
    {
  alert('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}
