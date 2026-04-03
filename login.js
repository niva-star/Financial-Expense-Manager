function Login(){

let Email=document.getElementById("Email").value;
let Pass=document.getElementById("Password").value;

if(Email!=="" && Pass!==""){

window.location.href="index.html";

}

}

/* Enter key navigation */

document.getElementById("Email").addEventListener("keypress",function(e){

if(e.key==="Enter"){

document.getElementById("Password").focus();

}

});