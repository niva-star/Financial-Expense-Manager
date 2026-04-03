function goExpense(){

window.location.href="expense.html";

}

function goReport(){

window.location.href="report.html";

}

let Expenses=JSON.parse(localStorage.getItem("Expenses"))||[];

let total=0;

Expenses.forEach(e=>{

total+=Number(e.Amount);

});

document.getElementById("total").innerText=total;