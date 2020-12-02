function validatePasswordLenght() {

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
const button = document.querySelector(".button");

//localStorage.setItem("test", "hest")

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