let expenses=JSON.parse(localStorage.getItem("expenses"))||[];

let total=0;

expenses.forEach(e=>{

total+=Number(e.amount);

});

document.getElementById("total").innerText=total;

function back(){

window.location.href="index.html";

}