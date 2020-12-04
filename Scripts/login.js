import fs from "fs";


function getInfo(req, res) {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value}

    



function login(user){
    
    //Laver en fetch, see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
fetch('http://localhost:3000/createUser', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
  
}).then(response =>{
  console.log(response)
}).catch(error=>{
  console.log(error)
})
}


