let Expenses=JSON.parse(localStorage.getItem("Expenses"))||[];

let Total=0;

expenses.forEach(e=>{

Total+=Number(e.amount);

});

document.getElementById("Total").innerText=Total;

function back(){

window.location.href="index.html";

}