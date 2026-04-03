function login(){

let email=document.getElementById("email").value;
let pass=document.getElementById("password").value;

if(email!=="" && pass!==""){

window.location.href="index.html";

}

}

/* Enter key navigation */

document.getElementById("email").addEventListener("keypress",function(e){

if(e.key==="Enter"){

document.getElementById("password").focus();

}

});