let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

let total = 0;

let reportList = document.getElementById("reportList");

expenses.forEach(e => {

total += Number(e.amount);

reportList.innerHTML += `
<div class="report-box">
<h3>${e.name}</h3>
<p>Amount: ₹${e.amount}</p>
<p>Date: ${e.date}</p>
</div>
`;

});

document.getElementById("total").innerText = total;

function back(){
window.location.href="index.html";
}