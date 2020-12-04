
function getInfo(){
	var username = document.getElementById('lusername')
    var password = document.getElementById('lpassword')

    let userLogin = {
        loginUsername: username.value,
        loginPassword: password.value
    }

    login(userLogin)

}

function login(userLogin){
    
    //Laver en fetch, see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
fetch('http://localhost:3000/userLogin', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userLogin),
  
}).then(res => res.json())
.then (data => {
  if(data!= "FAILED"){
      location.href="../View/account.html"
  } else {
      alert("Username or password incorrect")
  }
    console.log(data)
}).catch(error=>{
  console.log(error)
})
}


