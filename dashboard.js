function goExpense(){

window.location.href="expense.html";

}

function goReport(){

window.location.href="report.html";

}

let expenses=JSON.parse(localStorage.getItem("expenses"))||[];

let total=0;

expenses.forEach(e=>{

total+=Number(e.amount);

});

document.getElementById("total").innerText=total;